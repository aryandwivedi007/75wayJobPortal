import { Router } from 'express';
import { catchError } from '../common/middleware/catch-error.middleware';
import * as userController from './user.controller';
import * as userValidator from './user.validator';
import passport from 'passport';
const userRoutes = Router();

userRoutes
  .get(
    '/:userId',
    catchError,
    passport.authenticate('jwt', { session: false }),
    userController.getUserById
  )
  //.get('/:email/find', userController.findUserByEmail)
  .post('/', catchError, userController.createUser)
  .put(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    userValidator.updateUser,
    catchError,
    userController.updateUser
  )
  .patch(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    userValidator.editUser,
    catchError,
    userController.editUser
  )
  .delete(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    catchError,
    userController.deleteUser
  );
//   .get(
//     '/loggedInUser/get',
//     passport.authenticate('jwt', { session: false }),
//     catchError,
//     userController.getLoggedInUser
//   )
//   .get(
//     '/:userId/getAllRooms',
//     //passport.authenticate('jwt', { session: false }),
//     catchError,
//     userController.getAllGroupOfAUser
//   );

export default userRoutes;
