import { createResponse } from '../common/helper/response.helper';
import * as userService from './user.service';
import expressAsyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

export const createUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  res.send(createResponse(result, 'User created sucssefully'));
});

export const updateUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await userService.updateUser(req.params.userId, req.body);
  res.send(createResponse(result, 'User updated sucssefully'));
});

export const editUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await userService.editUser(req.params.userId, req.body);
  res.send(createResponse(result, 'User updated sucssefully'));
});

export const deleteUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await userService.deleteUser(req.params.userId);
  res.send(createResponse(result, 'User deleted sucssefully'));
});

export const getUserById = expressAsyncHandler(async (req: Request, res: Response) => {
  const result = await userService.getUserById(req.params.id);
  res.send(createResponse(result));
});

// export const getAllUser = expressAsyncHandler(async (req: Request, res: Response) => {
//     const result = await userService.getAllUser();
//     res.send(createResponse(result))
// });
