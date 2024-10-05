import { Request, Response } from 'express';
import * as documentService from '../../services/documentService';

export const getDocumentsByUserId = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const documents = await documentService.findDocumentsByUserId(userId);
    
    if (documents.length > 0) {
        res.status(200).json(documents);
    } else {
        res.status(404).json({ message: 'Nenhum documento encontrado para este usuário.' });
    }
};
