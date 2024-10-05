import { Request, Response } from 'express';
import * as documentService from '../../services/documentService';

export const createDocumentController = async (req: Request, res: Response) => {
    const { name, status, userId } = req.body;
    const newDocument = await documentService.createDocument(name, status, userId);
    res.status(201).json(newDocument);
};