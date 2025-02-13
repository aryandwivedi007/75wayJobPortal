export const jobRoutesDocs = {
  '/jobs': {
    post: {
      summary: 'Create a New Job Listing',
      description: 'Creates a new job listing with provided job details.',
      tags: ['Jobs'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                companyName: {
                  type: 'string',
                  description: 'Name of the company offering the job.',
                  example: 'Tech Corp',
                },
                jobTitle: {
                  type: 'string',
                  description: 'Title of the job position.',
                  example: 'Software Engineer',
                },
                expectedSalary: {
                  type: 'number',
                  description: 'Expected salary for the job position.',
                  example: 80000,
                },
                jobCity: {
                  type: 'string',
                  description: 'City where the job is located.',
                  example: 'San Francisco',
                },
                jobType: {
                  type: 'string',
                  description: 'Type of the job (e.g., Full-time, Part-time).',
                  example: 'Full-time',
                },
                jobState: {
                  type: 'string',
                  description: 'State where the job is located.',
                  example: 'California',
                },
                jobCountry: {
                  type: 'string',
                  description: 'Country where the job is located.',
                  example: 'USA',
                },
                qualifications: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                  description: 'List of required qualifications for the job.',
                  example: ["Bachelor's Degree", '3+ years experience in software development'],
                },
                showJob: {
                  type: 'boolean',
                  description: 'Whether to show the job listing publicly or not.',
                  example: true,
                },
              },
              required: [
                'companyName',
                'jobTitle',
                'expectedSalary',
                'jobCity',
                'jobType',
                'jobState',
                'jobCountry',
                'qualifications',
                'showJob',
              ],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Job successfully created.',
        },
        400: {
          description: 'Invalid data - failed to create job.',
        },
      },
    },
  },
  '/jobs/{jobId}': {
    patch: {
      summary: 'Update Job Listing by ID',
      description: 'Updates an existing job listing using the unique job ID.',
      tags: ['Jobs'],
      parameters: [
        {
          name: 'jobId',
          in: 'path',
          description: 'The unique ID of the job listing.',
          required: true,
          schema: {
            type: 'string',
            example: '60c72b2f9f1b2c001c1a3d10',
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                companyName: {
                  type: 'string',
                  description: 'Name of the company offering the job.',
                  example: 'Tech Corp',
                },
                jobTitle: {
                  type: 'string',
                  description: 'Title of the job position.',
                  example: 'Senior Software Engineer',
                },
                expectedSalary: {
                  type: 'number',
                  description: 'Expected salary for the job position.',
                  example: 100000,
                },
                jobCity: {
                  type: 'string',
                  description: 'City where the job is located.',
                  example: 'San Francisco',
                },
                jobType: {
                  type: 'string',
                  description: 'Type of the job (e.g., Full-time, Part-time).',
                  example: 'Full-time',
                },
                jobState: {
                  type: 'string',
                  description: 'State where the job is located.',
                  example: 'California',
                },
                jobCountry: {
                  type: 'string',
                  description: 'Country where the job is located.',
                  example: 'USA',
                },
                qualifications: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                  description: 'List of required qualifications for the job.',
                  example: ["Bachelor's Degree", '5+ years experience in software development'],
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Job successfully updated.',
        },
        400: {
          description: 'Invalid data - failed to update job.',
        },
        404: {
          description: 'Job not found.',
        },
      },
    },
  },
  '/jobs/query': {
    get: {
      summary: 'Get Jobs by Query',
      description: 'Fetches job listings based on specified query parameters.',
      tags: ['Jobs'],
      parameters: [
        {
          name: 'city',
          in: 'query',
          description: 'The city where the job is located.',
          required: true,
          schema: {
            type: 'string',
            example: 'San Francisco',
          },
        },
        {
          name: 'state',
          in: 'query',
          description: 'The state where the job is located.',
          required: true,
          schema: {
            type: 'string',
            example: 'California',
          },
        },
        {
          name: 'country',
          in: 'query',
          description: 'The country where the job is located.',
          required: true,
          schema: {
            type: 'string',
            example: 'USA',
          },
        },
        {
          name: 'jobType',
          in: 'query',
          description: 'The type of the job (e.g., Full-time, Part-time).',
          required: true,
          schema: {
            type: 'string',
            example: 'Full-time',
          },
        },
        {
          name: 'skill',
          in: 'query',
          description: 'The skill required for the job.',
          required: true,
          schema: {
            type: 'string',
            example: 'JavaScript',
          },
        },
      ],
      responses: {
        200: {
          description: 'Jobs successfully retrieved based on query.',
        },
        400: {
          description: 'Invalid query parameters.',
        },
      },
    },
  },
  '/jobs/search': {
    get: {
      summary: 'Search Jobs',
      description: 'Search for job listings using specific search parameters.',
      tags: ['Jobs'],
      parameters: [
        {
          name: 'searchTerm',
          in: 'query',
          description: 'Search term for the job title, company, or qualifications.',
          required: true,
          schema: {
            type: 'string',
            example: 'Software Engineer',
          },
        },
      ],
      responses: {
        200: {
          description: 'Search results successfully retrieved.',
        },
        400: {
          description: 'Invalid search term.',
        },
      },
    },
  },
};
