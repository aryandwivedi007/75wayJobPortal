import { sendEMail } from '../common/config/email.config';
import { readFileFromLocation } from '../common/helper/image-to-base64Encoder';
import { JobRepository } from '../job/job.repository';
import { UserRepository } from '../users/user.repostiory';
import { ICandidateRequest } from './candidate.dto';
import { CandidateRepository } from './candidate.repository';
import { Candidate } from './candidate.schema';

export const createJobRequest = async (file: any, data: ICandidateRequest) => {
  const job = await JobRepository.findOne({ where: { _id: data.jobId } });
  const user = await UserRepository.findOne({ where: { _id: data.userId } });

  if (!job) {
    throw new Error('Job not found');
  }
  if (!user) {
    throw new Error('User not found');
  }

  const resumeBuffer = data.resume;

  const candidate = new Candidate();
  candidate.user = user;
  candidate.job = job;
  candidate.resume = file.path;

  await CandidateRepository.save(candidate);
  await sendEMail(
    candidate.user.email,
    'Congratulations Your Form has been submitted',
    'Congratulations',
    '<h1>Your first step is completed. Keep  checking your emails for futher updates<h1>'
  );
  return candidate;
};

export const getCandidateListForAJob = async (jobId: string) => {
  const candidateList = await CandidateRepository.find({
    where: {
      job: {
        _id: jobId,
      },
    },
    relations: ['job'],
  });
  const updatedCarList = [];
  for (let i = 0; i < candidateList.length; i++) {
    const imageUrl = candidateList[i].resume;
    const imageBase64 = await readFileFromLocation(imageUrl);
    //console.log(imageBase64)
    updatedCarList.push({
      user: candidateList[i].user,
      model: candidateList[i].job,
      resume: imageBase64,
    });
  }
  return candidateList;
};

export const updateMarkedStatusForCanndidate = async (candidateId: string) => {
  const candidate = await CandidateRepository.findOne({
    where: { _id: candidateId },
    relations: ['user'],
  });

  candidate.isMarkedReadByEmployer = true;
  await CandidateRepository.save(candidate);
  await sendEMail(
    'aryan.735921@gmail.com',
    'Congratulations Your Resume has been looked by the Company',
    'Congratulations',
    '<h1>Company may reach you keep checking your email<h1>'
  );
  return candidate;
};

export const scheduleCandidateInterview = async (date: string, candidateId: string) => {
  const candidate = await CandidateRepository.findOne({
    where: { _id: candidateId },
    relations: ['user'],
  });
  candidate.interviewDate = date;
  await CandidateRepository.save(candidate);
  console.log(candidate);
  console.log(candidate.user.email);
  await sendEMail(
    'aryan.735921@gmail.com',
    'Congratulations Your Interview dates are scheduled',
    'Congratulations',
    '<h1>Your interview dates are scheduled plz go through link and  keep checking your email<h1>'
  );
};

export const updateCandidateHiredStatus = async (candidateId: string, hiringStatus: string) => {
  const candidate = await CandidateRepository.findOne({
    where: { _id: candidateId },
    relations: ['user'],
  });
  console.log('here');
  let isHired: Boolean;
  if (hiringStatus === 'true') {
    isHired = true;
  } else if (hiringStatus === 'false') {
    isHired = false;
  }
  candidate.isCandidateHired = isHired;
  const response = await CandidateRepository.save(candidate);
  if (response.isCandidateHired === true) {
    await sendEMail(
      candidate.user.email,
      'Congratulations You are hired hurreh!!!',
      'Congratulations',
      '<h1>You are hired and company hr will reach you by mail keep checking your email for futher updates</h1>'
    );
  } else {
    await sendEMail(
      'aryan.735921@gmail.com',
      'ALas You are not hired',
      'Sad',
      '<h1>Your application status is marked as unhired. Company hr will reach you by mail keep checking your email for futher updates</h1>'
    );
  }
};
