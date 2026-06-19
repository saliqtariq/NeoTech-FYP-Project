import { Router } from 'express';
import { createCheckoutSession } from '../controllers/paymentController';

const router = Router();

// Route: POST /api/payments/create-checkout-session
// We are making this public for now so you can test it immediately without logging in
router.post('/create-checkout-session', createCheckoutSession);

export default router;
