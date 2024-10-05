import { Request, Response } from 'express';
import * as documentService from '../../services/documentService';
import { validationResult } from 'express-validator';

export const createDocumentController = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return 
    }

    const { name, status, userId } = req.body;
    const newDocument = await documentService.createDocument(name, status, userId);
    res.status(201).json(newDocument);
};