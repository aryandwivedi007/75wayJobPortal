import { body } from 'express-validator';
import { param } from 'express-validator';
export const createCandidate = [
  
  body('user').isUUID().withMessage('User ID must be a valid UUID'),
  body('job').isUUID().withMessage('Job ID must be a valid UUID'),
  body('resume')
    .isString()
    .withMessage('Resume must be a string')
    .notEmpty()
    .withMessage('Resume cannot be empty'),
  body('isMarkedReadByEmployer')
    .isBoolean()
    .withMessage('isMarkedReadByEmployer must be a boolean'),
  body('interviewDate')
    .optional()
    .isString()
    .withMessage('Interview date must be a string if provided'),
  body('isCandidateHired')
    .optional()
    .isBoolean()
    .withMessage('isCandidateHired must be a boolean if provided'),
  body('companyResponse')
    .optional()
    .isString()
    .withMessage('Company response must be a string if provided'),
];




export const getCandidateListForAJob = [
  param('jobId')
    .isUUID()
    .withMessage('Job ID must be a valid UUID')
];

// Validation for the `PATCH /:candidateId` route (updating candidate status)
export const updateMarkedStatusForCandidate = [
  param('candidateId')
    .isUUID()
    .withMessage('Candidate ID must be a valid UUID')
];

// Validation for the `PATCH /:date/:candidateId` route (scheduling interview date)
export const scheduleInterviewDateService = [
  param('date')
    .isString()
    .withMessage('Interview date must be a valid string')
    .isDate()
    .withMessage('Interview date must be a valid date string'),
  param('candidateId')
    .isUUID()
    .withMessage('Candidate ID must be a valid UUID')
];

// Validation for the `PATCH /:candidateId/:hiringStatus/job` route (updating hiring status)
export const updateCandidateHiredStatus = [
  param('candidateId')
    .isUUID()
    .withMessage('Candidate ID must be a valid UUID'),
  param('hiringStatus')
    .isBoolean()
    .withMessage('Hiring status must be a boolean value')
];

