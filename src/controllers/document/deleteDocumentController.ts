import { Request, Response } from 'express';
import * as documentService from '../../services/documentService';

export const deleteDocumentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await documentService.deleteDocument(id);
  res.status(204).send();
};