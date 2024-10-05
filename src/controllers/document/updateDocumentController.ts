import { Request, Response } from 'express';
import * as documentService from '../../services/documentService';

export const updateDocumentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, status } = req.body;
  const updatedDocument = await documentService.updateDocument(id, name, status);
  if (updatedDocument) {
    res.status(200).json(updatedDocument);
  } else {
    res.status(404).json({ message: 'Documento não encontrado.' });
  }
};