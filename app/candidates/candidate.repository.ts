import { AppDataSource } from '../db/db.config';
import { Candidate } from './candidate.schema';

export const CandidateRepository = AppDataSource.getRepository(Candidate);
