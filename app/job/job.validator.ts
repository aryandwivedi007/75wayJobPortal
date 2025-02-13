import { body } from 'express-validator';

export const validateJob = [
  body('companyName')
    .isString()
    .withMessage('Company name must be a string')
    .notEmpty()
    .withMessage('Company name cannot be empty'),

  body('jobTitle')
    .isString()
    .withMessage('Job title must be a string')
    .notEmpty()
    .withMessage('Job title cannot be empty'),

  body('expectedSalary')
    .isNumeric()
    .withMessage('Expected salary must be a number')
    .custom((value) => value > 0)
    .withMessage('Expected salary must be a positive number'),

  body('jobCity')
    .isString()
    .withMessage('Job city must be a string')
    .notEmpty()
    .withMessage('Job city cannot be empty'),

  body('jobType')
    .isString()
    .withMessage('Job type must be a string')
    .notEmpty()
    .withMessage('Job type cannot be empty'),

  body('jobState')
    .isString()
    .withMessage('Job state must be a string')
    .notEmpty()
    .withMessage('Job state cannot be empty'),

  body('jobCountry')
    .isString()
    .withMessage('Job country must be a string')
    .notEmpty()
    .withMessage('Job country cannot be empty'),

  body('qualifications')
    .isArray()
    .withMessage('Qualifications must be an array')
    .notEmpty()
    .withMessage('Qualifications cannot be empty')
    .bail()
    .custom((qualifications: string[]) => {
      if (!qualifications.every((q) => typeof q === 'string')) {
        throw new Error('Each qualification must be a string');
      }
      return true;
    }),

  body('showJob').isBoolean().withMessage('Show job status must be a boolean'),
];
