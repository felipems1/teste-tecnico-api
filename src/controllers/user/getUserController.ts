import { Request, Response } from 'express';
import * as userService from '../../services/userService';

export const getUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.findUserById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado.' });
    }
};

