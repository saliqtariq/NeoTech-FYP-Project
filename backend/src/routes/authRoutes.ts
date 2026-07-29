import { Router } from 'express';
import { signup, login, getAllUsers, syncUser } from '../controllers/authController';

const router = Router();

// Route: POST /api/auth/signup
router.post('/signup', signup);

// Route: POST /api/auth/login
router.post('/login', login);

// Route: GET /api/auth/users
router.get('/users', getAllUsers);

// Route: POST /api/auth/sync
router.post('/sync', syncUser);

export default router;
