import { body } from 'express-validator';

export const validateCreateUser = [
  body('name').notEmpty().withMessage('O nome é obrigatório.'),
  body('email').notEmpty().withMessage('O email é obrigatório.')
];
