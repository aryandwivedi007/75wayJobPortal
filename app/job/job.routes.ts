import { Router } from 'express';
import * as jobController from './job.controller';
import passport from 'passport';
import { authorizeRoles } from '../common/jwt/passport.jwt.service';
const jobRoutes = Router();

jobRoutes
  .post(
    '/',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('EMPLOYER'),
    jobController.createJob
  )
  .patch(
    '/:jobId',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('EMPLOYER'),
    jobController.updateJob
  )
  .get(
    '/query',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('EMPLOYER', 'CANDIDATE'),
    jobController.getJobByQuery
  )
  .get(
    '/search',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('EMPLOYER', 'CANDIDATE'),
    jobController.searchJob
  );

export default jobRoutes;
