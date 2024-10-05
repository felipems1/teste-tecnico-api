import { body } from 'express-validator';

export const validateUpdateDocument = [
  body('name').notEmpty().withMessage('O nome do documento é obrigatório.'),
  body('status').notEmpty().withMessage('O status é obrigatório.'),
];
