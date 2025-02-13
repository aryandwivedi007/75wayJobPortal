export const candidateRoutesDocs = {
  '/candidates': {
    post: {
      summary: 'Create Job Request by Candidate',
      description:
        'Allows a candidate to create a job request by submitting their resume and relevant job details.',
      tags: ['Candidates'],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                userId: {
                  type: 'string',
                  description: 'The unique ID of the candidate.',
                  example: 'f8ede773-7ae8-4a8f-9f82-b71ccb8dbaf8',
                },
                jobId: {
                  type: 'string',
                  description: 'The unique ID of the job the candidate is applying for.',
                  example: '1f813c41-7aef-4dfd-93c2-33ee27a165a0',
                },
                resume: {
                  type: 'string',
                  format: 'binary',
                  description: 'The resume file of the candidate in PDF, DOCX, etc.',
                },
              },
              required: ['userId', 'jobId', 'resume'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Job request successfully created.',
        },
        400: {
          description: 'Invalid request data or missing required fields.',
        },
      },
    },
  },
  '/candidates/{jobId}': {
    get: {
      summary: 'Get Candidate List for a Job',
      description: 'Retrieves the list of candidates who have applied for a specific job.',
      tags: ['Candidates'],
      parameters: [
        {
          name: 'jobId',
          in: 'path',
          description: 'The unique ID of the job for which to fetch the candidate list.',
          required: true,
          schema: {
            type: 'string',
            example: '1f813c41-7aef-4dfd-93c2-33ee27a165a0',
          },
        },
      ],
      responses: {
        200: {
          description: 'List of candidates successfully retrieved.',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    userId: {
                      type: 'string',
                      description: 'The ID of the candidate.',
                      example: '60c72b2f9f1b2c001c1a3d10',
                    },
                    userName: {
                      type: 'string',
                      description: 'The name of the candidate.',
                      example: 'Jane Doe',
                    },
                    jobTitle: {
                      type: 'string',
                      description: 'The job title the candidate applied for.',
                      example: 'Software Engineer',
                    },
                    resumeUrl: {
                      type: 'string',
                      description: 'URL to the candidate’s uploaded resume.',
                      example: 'https://example.com/resume/janedoe.pdf',
                    },
                  },
                },
              },
            },
          },
        },
        404: {
          description: 'Job not found or no candidates for this job.',
        },
      },
    },
  },
  '/candidates/{candidateId}': {
    patch: {
      summary: 'Update Candidate Marked Status',
      description:
        'Updates the status of a candidate (e.g., marked as reviewed, shortlisted, etc.).',
      tags: ['Candidates'],
      parameters: [
        {
          name: 'candidateId',
          in: 'path',
          description: 'The unique ID of the candidate to be updated.',
          required: true,
          schema: {
            type: 'string',
            example: 'f8ede773-7ae8-4a8f-9f82-b71ccb8dbaf8',
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
                status: {
                  type: 'string',
                  description:
                    'The new status of the candidate (e.g., "Shortlisted", "Rejected", etc.).',
                  example: 'Shortlisted',
                },
              },
              required: ['status'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Candidate status successfully updated.',
        },
        400: {
          description: 'Invalid status or missing required fields.',
        },
        404: {
          description: 'Candidate not found.',
        },
      },
    },
  },
  '/candidates/{date}/{candidateId}': {
    patch: {
      summary: 'Schedule Interview Date for Candidate',
      description: 'Schedules a candidate’s interview for the specified date.',
      tags: ['Candidates'],
      parameters: [
        {
          name: 'candidateId',
          in: 'path',
          description: 'The unique ID of the candidate to schedule the interview.',
          required: true,
          schema: {
            type: 'string',
            example: '7dd80d78-8273-444c-978e-b3be19800ae5',
          },
        },
        {
          name: 'date',
          in: 'path',
          description: 'The date of the interview to be scheduled.',
          required: true,
          schema: {
            type: 'string',
            example: '2025-02-25',
          },
        },
      ],
      responses: {
        200: {
          description: 'Interview successfully scheduled.',
        },
        400: {
          description: 'Invalid date or candidate ID.',
        },
      },
    },
  },
  '/candidates/{candidateId}/{hiringStatus}/job': {
    patch: {
      summary: 'Update Candidate Hiring Status',
      description: 'Updates the hiring status of a candidate (e.g., "Hired", "Rejected").',
      tags: ['Candidates'],
      parameters: [
        {
          name: 'candidateId',
          in: 'path',
          description: 'The unique ID of the candidate whose hiring status needs to be updated.',
          required: true,
          schema: {
            type: 'string',
            example: '7dd80d78-8273-444c-978e-b3be19800ae5',
          },
        },
        {
          name: 'hiringStatus',
          in: 'path',
          description: 'The new hiring status of the candidate (e.g., "Hired", "Rejected").',
          required: true,
          schema: {
            type: 'string',
            example: 'Hired',
          },
        },
      ],
      responses: {
        200: {
          description: 'Hiring status successfully updated.',
        },
        400: {
          description: 'Invalid status or candidate ID.',
        },
      },
    },
  },
};
