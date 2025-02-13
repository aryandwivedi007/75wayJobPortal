import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IJob } from './job.dto';
import { Candidate } from '../candidates/candidate.schema';
@Entity()
export class Job implements IJob {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  companyName: string;

  @Column()
  jobTitle: string;

  @Column()
  expectedSalary: Number;
  @Column()
  jobCity: string;

  @Column()
  jobState: string;

  @Column()
  jobCountry: string;

  @Column()
  jobType: string;

  @Column('json')
  qualifications: string[];

  showJob: boolean;

  @OneToMany(() => Candidate, (candidate) => candidate.job)
  candidateList: Candidate[];
}
