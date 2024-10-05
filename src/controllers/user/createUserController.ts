import { Request, Response } from 'express';
import * as userService from '../../services/userService';
import { validationResult } from 'express-validator';

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return
    }

    const { name, email } = req.body;
    const newUser = await userService.createUser(name, email);
    res.status(201).json(newUser);
};


