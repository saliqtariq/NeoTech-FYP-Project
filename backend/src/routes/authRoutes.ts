import { Router } from 'express';
import { signup, login, getAllUsers } from '../controllers/authController';

const router = Router();

// Route: POST /api/auth/signup
router.post('/signup', signup);

// Route: POST /api/auth/login
router.post('/login', login);

// Route: GET /api/auth/users
router.get('/users', getAllUsers);

export default router;
