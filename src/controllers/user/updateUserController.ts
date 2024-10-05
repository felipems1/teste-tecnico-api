import { body, validationResult } from 'express-validator';
import { Request, Response } from 'express';
import * as userService from '../../services/userService';

export const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await userService.updateUser(id, name, email);
    if (updatedUser) {
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado.' });
    }
};