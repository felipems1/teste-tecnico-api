import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as userService from '../../services/userService';

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
  
    const existingUser = await userService.findUserById(id);
    if (!existingUser) {
      res.status(404).json({ message: 'Usuário não encontrado.' });
      return;
    }
  
    const { name, email } = req.body;
  
    const updatedUser = await userService.updateUser(id, name, email);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  };