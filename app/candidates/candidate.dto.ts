import { ManyToOne } from 'typeorm';
import { Job } from '../job/job.schema';
import { User } from '../users/user.schema';

export interface ICandidate {
  user: User;

  job: Job;
}

export interface ICandidateRequest {
  userId: string;
  jobId: string;
  resume: string;
}
