import { Router } from 'express';
import { createContactInquiry, getContactInquiries, updateContactInquiryStatus, deleteContactInquiry } from '../controllers/contactController';

const router = Router();

router.post('/', createContactInquiry);
router.get('/', getContactInquiries);
router.patch('/:id', updateContactInquiryStatus);
router.delete('/:id', deleteContactInquiry);

export default router;
