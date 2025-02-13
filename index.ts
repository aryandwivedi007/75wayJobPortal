import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import routers from './app/routes';
import { IUser } from './app/users/user.dto';
import { setupSwagger } from './app/common/config/swagger.config';
import passport from 'passport';
import { initPassport } from './app/common/jwt/passport.jwt.service';
const port = process.env.PORT || 3000;
const app = express();
dotenv.config();
// app.use(
//     cors({
//       origin: '*', // Allow all origins (disables CORS)
//       methods: ['GET', 'POST'],
//       allowedHeaders: ['Content-Type'],
//       credentials: true,
//     })
//   );

setupSwagger(app);
declare global {
  namespace Express {
    interface User extends Omit<IUser, 'password'> {}
    interface Request {
      user?: User;
    }
  }
}
app.use(bodyParser.json());
initPassport();
app.use(passport.initialize());
app.use('/api', routers);
app.get('/', (req, res) => {
  res.send(`Hello`);
});
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
