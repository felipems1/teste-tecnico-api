import { getAllUsersController } from '../controllers/user/getAllUsersController';
import { createUserController } from '../controllers/user/createUserController';
import { deleteUserController } from '../controllers/user/deleteUserController';
import { getUserController } from '../controllers/user/getUserController';
import { updateUserController } from '../controllers/user/updateUserController';
import { Router } from 'express';

const router = Router();

router.post('/create', createUserController);
router.get('/', getAllUsersController);
router.get('/:id', getUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;
