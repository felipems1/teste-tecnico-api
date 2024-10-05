import { Request, Response } from 'express';
import * as userService from '../../services/userService';

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.status(204).send();
};
