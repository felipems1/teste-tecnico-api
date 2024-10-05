import { Request, Response } from 'express';
import * as documentService from '../../services/documentService';

export const getAllDocumentsController = async (req: Request, res: Response) => {
  const documents = await documentService.findAllDocuments();
  res.status(200).json(documents);
};