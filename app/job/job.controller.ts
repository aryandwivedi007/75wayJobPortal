import expressAsyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import * as jobService from './job.service';
import { createResponse } from '../common/helper/response.helper';

export const createJob = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await jobService.createJob(req.body);
  res.send(createResponse(result, 'Job Created Successfully'));
});

export const getJobByQuery = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await jobService.getJobByQuery(req.body);
  res.send(createResponse(result, 'JOb By provided queries are fetched successfully'));
});

export const updateJob = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await jobService.updateJob(req.params.jobId, req.body);
  res.send(createResponse(result, 'Job is updated successfully'));
});

export const searchJob = expressAsyncHandler(async (req: Request, res: Response) => {
  const { title, city, jobType, jobCountry } = req.params;
  const result = await jobService.searchJobs(title, city, jobType, jobCountry);
  res.send(createResponse(result, 'Job is send successfully'));
});
