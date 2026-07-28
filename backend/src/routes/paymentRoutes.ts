import { Router } from 'express';
import {
  createCheckoutSession,
  createPaymentRecord,
  getPayments,
  updatePaymentStatus
} from '../controllers/paymentController';

const router = Router();

router.post('/create-checkout-session', createCheckoutSession);
router.post('/', createPaymentRecord);
router.get('/', getPayments);
router.patch('/status', updatePaymentStatus);

export default router;
