import { Request, Response } from 'express';
import * as userService from '../../services/userService';

export const getAllUsersController = async (req: Request, res: Response) => {
  const users = await userService.findAllUsers();
  res.status(200).json(users);
};