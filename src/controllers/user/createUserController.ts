import { Request, Response } from 'express';
import * as userService from '../../services/userService';

export const createUserController = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const newUser = await userService.createUser(name, email);
    res.status(201).json(newUser);
};


