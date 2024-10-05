import { createDocumentController } from '../controllers/document/createDocumentController';
import { deleteDocumentController } from '../controllers/document/deleteDocumentController';
import { getAllDocumentsController } from '../controllers/document/getAllDocumentController';
import { getDocumentsByUserId } from '../controllers/document/getDocumentByUserIdController';
import { updateDocumentController } from '../controllers/document/updateDocumentController';
import { Router } from 'express';

const router = Router();

router.post('/create', createDocumentController);
router.get('/', getAllDocumentsController);
router.get('/:userId', getDocumentsByUserId);
router.put('/:id', updateDocumentController);
router.delete('/:id', deleteDocumentController);

export default router;
