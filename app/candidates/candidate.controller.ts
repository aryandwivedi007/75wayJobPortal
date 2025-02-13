import expressAsyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import * as candidateService from './candidate.service';
import { createResponse } from '../common/helper/response.helper';
export const createJobRequest = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await candidateService.createJobRequest(req.file, req.body);
  res.send(createResponse(result, 'Candidate Data Persisted Successfully'));
});

export const getCandidateListForAJob = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await candidateService.getCandidateListForAJob(req.params.jobId);
  res.send(createResponse(result, 'CAndidate data for a job is fetched successfully'));
});

export const updateMarkedStatusForCanndidate = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const result = await candidateService.updateMarkedStatusForCanndidate(req.params.candidateId);
    res.send(createResponse(result, 'Candidate update status is done'));
  }
);

export const scheduleInterviewDateService = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const result = await candidateService.scheduleCandidateInterview(
      req.params.interviewDate,
      req.params.candidateId
    );
    res.send(createResponse(result, 'Candidate interview is Scheduled successfully'));
  }
);

export const updateCandidateHiredStatus = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const result = await candidateService.updateCandidateHiredStatus(
      req.params.candidateId,
      req.params.hiringStatus
    );
    res.send(createResponse(result, 'Candidate hiring status has been marked successfully'));
  }
);

// export const scheduleCandidateInterview=expressAsyncHandler(async(req:Request,res:Response)=>{
//     const result=await candidateService.scheduleCandidateInterview(req.params.date,req.params.candidateId)
//     res.send(createResponse(result,"Candidate interview date is persisted successfully"))
// })
