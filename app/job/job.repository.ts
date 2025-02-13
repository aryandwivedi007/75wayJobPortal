import { AppDataSource } from '../db/db.config';
import { Job } from './job.schema';

export const JobRepository = AppDataSource.getRepository(Job);
