import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.schema';

import { ICandidate } from './candidate.dto';
import { Job } from '../job/job.schema';

@Entity()
export class Candidate implements ICandidate {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @ManyToOne(() => User, (user) => user.candidates)
  user: User;

  @ManyToOne(() => Job, (job) => job.candidateList)
  job: Job;

  @Column()
  resume: string;

  @Column({ default: false })
  isMarkedReadByEmployer: boolean;

  @Column({ nullable: true })
  interviewDate!: string;

  @Column({ nullable: true })
  isCandidateHired: Boolean;

  @Column({ nullable: true })
  companyResponse: string;
}
