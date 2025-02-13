export interface IJob {
  companyName: string;
  jobTitle: string;
  expectedSalary: Number;
  jobCity: string;
  jobType: string;
  jobState: string;
  jobCountry: string;
  qualifications: string[];
  showJob: boolean;
}

export interface IJobQueryParams {
  city: string;
  state: string;
  country: string;
  jobType: string;
  skill: string;
}
