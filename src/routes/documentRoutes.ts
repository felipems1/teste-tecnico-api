import { Router } from 'express';
import { validateCreateDocument } from '../middlewares/validateCreateDocument';
import { createDocumentController } from '../controllers/document/createDocumentController';
import { deleteDocumentController } from '../controllers/document/deleteDocumentController';
import { getAllDocumentsController } from '../controllers/document/getAllDocumentController';
import { getDocumentsById } from '../controllers/document/getDocumentByIdController';
import { updateDocumentController } from '../controllers/document/updateDocumentController';
import { validateUpdateDocument } from '../middlewares/validateUpdateDocument';

const router = Router();

router.post('/create', validateCreateDocument, createDocumentController);
router.get('/', getAllDocumentsController);
router.get('/:id', getDocumentsById);
router.put('/:id', validateUpdateDocument, updateDocumentController);
router.delete('/:id', deleteDocumentController);

export default router;
