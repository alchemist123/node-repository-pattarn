import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from './user.controller';

const router = Router();
const userController = container.resolve(UserController);

router.get('/', userController.getAllUsers.bind(userController));
router.get('/:id', userController.getUser.bind(userController));
router.post('/', userController.createUser.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));
router.delete('/:id', userController.deleteUser.bind(userController));

export default router;
