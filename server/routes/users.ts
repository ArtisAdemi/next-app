import { Router, RequestHandler } from 'express';
import { userController } from '../controllers/userController';

const router = Router();

router.post('/login', userController.getUser as RequestHandler);

export default router;