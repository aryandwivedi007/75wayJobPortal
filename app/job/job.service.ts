import { IJob, IJobQueryParams } from './job.dto';
import { JobRepository } from './job.repository';
import { Job } from './job.schema';

export const createJob = async (data: IJob) => {
  const job = await JobRepository.create(data);
  job.showJob = true;
  return await JobRepository.save(job);
};

export const getJobByQuery = async (jobQueryParams: IJobQueryParams) => {
  const whereConditions: any = {};

  if (jobQueryParams.city) {
    whereConditions.jobCity = jobQueryParams.city;
  }
  if (jobQueryParams.state) {
    whereConditions.jobState = jobQueryParams.state;
  }
  if (jobQueryParams.country) {
    whereConditions.jobCountry = jobQueryParams.country;
  }
  if (jobQueryParams.jobType) {
    whereConditions.jobType = jobQueryParams.jobType;
  }
  if (jobQueryParams.skill) {
    whereConditions.qualifications = jobQueryParams.skill;
  }

  const jobFromDb = await JobRepository.find({
    where: whereConditions,
  });

  return jobFromDb;
};

export const updateJob = async (jobId: string, data: Partial<IJob>) => {
  const job = await JobRepository.findOneBy({ _id: jobId });
  await JobRepository.update(jobId, data);
  return await JobRepository.findOneBy({ _id: jobId });
};

export const searchJobs = async (
  title: string,
  city: string,
  jobType: string,
  jobCountry: string
) => {
  let queryBuilder = JobRepository.createQueryBuilder('job');
  if (title) {
    queryBuilder = queryBuilder.andWhere('job.jobTitle LIKE :title', { title: `%${title}%` });
  }

  if (city) {
    queryBuilder = queryBuilder.andWhere('job.jobCity LIKE :city', { city: `%${city}%` });
  }

  if (jobType) {
    queryBuilder = queryBuilder.andWhere('job.jobType LIKE :jobType', { jobType: `%{jobType}%` });
  }

  if (jobCountry) {
    queryBuilder = queryBuilder.andWhere('job.jobCountry LIKE :jobCountry', {
      jobCountry: `%{jobCountry}%`,
    });
  }
  const jobs = await queryBuilder.getMany();
  return jobs;
};
// app.get('/search/jobs', async (req, res) => {
//   try {
//       const { title, city, minSalary, maxSalary, startDate, endDate } = req.query;

//       const jobRepository = getRepository(Job);

//       let queryBuilder = jobRepository.createQueryBuilder('job');

//       // Dynamic filters based on provided parameters
//       if (title) {
//           queryBuilder = queryBuilder.andWhere('job.jobTitle LIKE :title', { title: `%${title}%` });
//       }

//       if (city) {
//           queryBuilder = queryBuilder.andWhere('job.jobCity LIKE :city', { city: `%${city}%` });
//       }

//       if (minSalary) {
//           queryBuilder = queryBuilder.andWhere('job.expectedSalary >= :minSalary', { minSalary });
//       }

//       if (maxSalary) {
//           queryBuilder = queryBuilder.andWhere('job.expectedSalary <= :maxSalary', { maxSalary });
//       }

//       if (startDate || endDate) {
//           queryBuilder = queryBuilder.andWhere('job.createdAt BETWEEN :startDate AND :endDate', {
//               startDate: startDate ? new Date(startDate) : '1970-01-01', // Default to the earliest date
//               endDate: endDate ? new Date(endDate) : new Date(), // Default to the current date
//           });
//       }

//       // Execute the query
//       const jobs = await queryBuilder.getMany();

//       res.status(200).json({ jobs });
//   } catch (error) {
//       res.status(500).json({ message: error.message });
//   }
// });
