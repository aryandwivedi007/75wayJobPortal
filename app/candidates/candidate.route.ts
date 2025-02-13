import { Router } from 'express';
import upload from '../common/config/multer.config';
import * as candidateController from './candidate.controller';
import passport from 'passport';
import { authorizeRoles } from '../common/jwt/passport.jwt.service';
const candidateRoutes = Router();

candidateRoutes
  .post(
    '/',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('CANDIDATE'),
    upload.single('resume'),
    candidateController.createJobRequest
  )
  .get(
    '/:jobId',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('EMPLOYER'),
    candidateController.getCandidateListForAJob
  )
  .patch(
    '/:candidateId',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('EMPLOYER'),
    candidateController.updateMarkedStatusForCanndidate
  )
  .patch(
    '/:date/:candidateId',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('EMPLOYER'),
    candidateController.scheduleInterviewDateService
  )
  .patch(
    '/:candidateId/:hiringStatus/job',
    passport.authenticate('jwt', { session: false }),
    authorizeRoles('EMPLOYER'),
    candidateController.updateCandidateHiredStatus
  );

export default candidateRoutes;
