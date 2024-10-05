import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as documentService from '../../services/documentService';

export const updateDocumentController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return 
  }

  const existingDocument = await documentService.findDocumentById(id);
  if (!existingDocument) {
    res.status(404).json({ message: 'Documento não encontrado.' });
    return;
  }

  const { name, status } = req.body;

  const updatedDocument = await documentService.updateDocument(id, name, status);
  if (updatedDocument) {
    res.status(200).json(updatedDocument);
    return 
  } else {
    res.status(404).json({ message: 'Documento não encontrado.' });
    return 
  }
};
