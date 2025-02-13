import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { type Request, type Response } from 'express';
import createHttpError from 'http-errors';
import { Strategy as LocalStrategy } from 'passport-local';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../../users/user.service';
import { IUser } from '../../users/user.dto';

import { NextFunction } from 'express';
import { createResponse } from '../helper/response.helper';
const isValidPassword = async (value: string, password: string) => {
  const compare = bcrypt.compare(value, password);
  return compare;
};

export const initPassport = (): void => {
  passport.use(
    new Strategy(
      {
        secretOrKey: process.env.JWT_SECRET || 'abcdefghijkla12',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      async (token: { user: Request['user'] }, done) => {
        console.log('Decoded token:', token.user);
        try {
          done(null, token);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  // user login
  passport.use(
    'login',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await findUserByEmail(email);
          console.log(user, 'Hee I am');
          if (user == null) {
            done(createHttpError(401, 'User not found!'), false);
            return;
          }

          if (!user.active) {
            done(createHttpError(401, 'User is inactive'), false);
            return;
          }

          // if (user.blocked) {
          //   done(createError(401, "User is blocked, Contact to admin"), false);
          //   return;
          // }

          const validate = await isValidPassword(password, user.password);
          if (!validate) {
            done(createHttpError(401, 'Invalid email or password'), false);
            return;
          }
          const { password: _p, ...result } = user;
          done(null, result, { message: 'Logged in Successfully' });
        } catch (error: any) {
          done(createHttpError(500, error.message));
        }
      }
    )
  );
};

export const createUserTokens = (user: Omit<IUser, 'password'>) => {
  console.log(user);
  const jwtSecret = process.env.JWT_SECRET ?? 'abcdefghijkla12';
  const token = jwt.sign(user, jwtSecret, { expiresIn: '10h' });
  return { accessToken: token, refreshToken: '' };
};

export const decodeToken = (token: string) => {
  const decode = jwt.decode(token);
  console.log(decode);
  return decode as IUser;
};

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Ensure req.user exists and that the user's role is in the allowedRoles
    const user = req.user;

    if (!user || !allowedRoles.includes(user.role)) {
      // Send the response if the user is not authorized
      res.status(403).json({ message: 'Access denied. You do not have the required role.' });
    }

    // If the role is valid, continue to the next middleware
    next();
  };
};
