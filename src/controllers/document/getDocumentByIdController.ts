import { Request, Response } from 'express';
import * as documentService from '../../services/documentService';

export const getDocumentsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const documents = await documentService.findDocumentById(id);
    
    if (documents.length > 0) {
        res.status(200).json(documents);
    } else {
        res.status(404).json({ message: 'Nenhum documento encontrado.' });
    }
};
