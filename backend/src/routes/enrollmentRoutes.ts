import { Router } from 'express';
import { createEnrollment, getEnrollments, updateEnrollmentStatus } from '../controllers/enrollmentController';

const router = Router();

router.post('/', createEnrollment);
router.get('/', getEnrollments);
router.patch('/:id', updateEnrollmentStatus);

export default router;
