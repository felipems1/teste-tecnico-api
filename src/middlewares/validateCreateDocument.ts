import { body } from "express-validator";

export const validateCreateDocument = [
  body('name').notEmpty().withMessage('O nome do documento é obrigatório.'),
  body('status').notEmpty().withMessage('O status é obrigatório.'),
  body('userId').notEmpty().withMessage('O ID do usuário é obrigatório.')
];