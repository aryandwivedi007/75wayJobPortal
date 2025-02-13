export const userRoutesDocs = {
  '/users/{userId}': {
    get: {
      summary: 'Get User by ID',
      description: 'Fetches the details of a user using their unique user ID.',
      tags: ['Users'],
      parameters: [
        {
          name: 'userId',
          in: 'path',
          description: 'The unique ID of the user.',
          required: true,
          schema: {
            type: 'string',
            example: '6c61d7ea-f5e0-4e4b-8011-e41293ae83ba',
          },
        },
      ],
      responses: {
        200: {
          description: 'User details successfully retrieved.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  userId: {
                    type: 'string',
                    description: 'The unique ID of the user.',
                    example: '60c72b2f9f1b2c001c1a3d10',
                  },
                  fullName: {
                    type: 'string',
                    description: 'Full name of the user.',
                    example: 'My HY',
                  },
                  email: {
                    type: 'string',
                    description: 'Email of the user.',
                    example: 'my@gmail.com',
                  },
                  role: {
                    type: 'string',
                    description: 'Role of the user.',
                    example: 'CANDIDATE',
                  },
                  active: {
                    type: 'boolean',
                    description: 'The active status of the user.',
                    example: true,
                  },
                },
              },
            },
          },
        },
        404: {
          description: 'User not found.',
        },
      },
    },
    put: {
      summary: 'Update User by ID',
      description: 'Updates the details of a user using their unique user ID.',
      tags: ['Users'],
      parameters: [
        {
          name: 'userId',
          in: 'path',
          description: 'The unique ID of the user.',
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
                userName: {
                  type: 'string',
                  description: 'The name of the user.',
                  example: 'John Doe',
                },
                email: {
                  type: 'string',
                  description: 'The email of the user.',
                  example: 'john.doe@example.com',
                },
                active: {
                  type: 'boolean',
                  description: 'The active status of the user.',
                  example: true,
                },
                role: {
                  type: 'string',
                  description: 'The role of the user.',
                  example: 'Admin',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User successfully updated.',
        },
        400: {
          description: 'Bad request - invalid user data.',
        },
        404: {
          description: 'User not found.',
        },
      },
    },
    patch: {
      summary: 'Edit User by ID',
      description: 'Partially updates the user details by their unique user ID.',
      tags: ['Users'],
      parameters: [
        {
          name: 'userId',
          in: 'path',
          description: 'The unique ID of the user.',
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
                fullName: {
                  type: 'string',
                  description: 'The name of the user.',
                  example: 'John Doe',
                },
                email: {
                  type: 'string',
                  description: 'Email of the user.',
                  example: 'john.doe@example.com',
                },
                active: {
                  type: 'boolean',
                  description: 'Active status of the user.',
                  example: true,
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User successfully edited.',
        },
        400: {
          description: 'Bad request - invalid data.',
        },
        404: {
          description: 'User not found.',
        },
      },
    },
    delete: {
      summary: 'Delete User by ID',
      description: 'Deletes the user using their unique user ID.',
      tags: ['Users'],
      parameters: [
        {
          name: 'userId',
          in: 'path',
          description: 'The unique ID of the user.',
          required: true,
          schema: {
            type: 'string',
            example: '60c72b2f9f1b2c001c1a3d10',
          },
        },
      ],
      responses: {
        200: {
          description: 'User successfully deleted.',
        },
        404: {
          description: 'User not found.',
        },
      },
    },
  },
  '/users': {
    post: {
      summary: 'Create a New User',
      description: 'Creates a new user with provided details.',
      tags: ['Users'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                fullName: {
                  type: 'string',
                  description: 'Full name of the user.',
                  example: 'My HY',
                },
                email: {
                  type: 'string',
                  description: 'Email address of the user.',
                  example: 'my.gmail.com',
                },
                password: {
                  type: 'string',
                  description: 'Password for the user account.',
                  example: 'dummy',
                },
                role: {
                  type: 'string',
                  description: 'Role of the user.',
                  example: 'CANDIDATE',
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'User successfully created.',
        },
        400: {
          description: 'Invalid data - failed to create user.',
        },
      },
    },
  },
};
