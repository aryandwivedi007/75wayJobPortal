import { DataSource } from 'typeorm';
import { Job } from '../job/job.schema';
import { User } from '../users/user.schema';
import { Candidate } from '../candidates/candidate.schema';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: '75wayjobdb',
  entities: [User, Job, Candidate],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => console.log('Database Connected!'))
  .catch((err) => console.error('Database Connection Error:', err));
