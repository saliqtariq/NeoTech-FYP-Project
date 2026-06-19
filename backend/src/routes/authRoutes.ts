import { Router } from 'express';
import { signup, login } from '../controllers/authController';

const router = Router();

// Route: POST /api/auth/signup
router.post('/signup', signup);

// Route: POST /api/auth/login
router.post('/login', login);

export default router;
