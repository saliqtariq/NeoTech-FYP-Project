import { Request, Response } from 'express';
import Enrollment from '../models/Enrollment';

// @desc    Create a new enrollment/payment record
// @route   POST /api/enrollments
// @access  Public
export const createEnrollment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, course, paymentFrequency, status } = req.body;

    const newEnrollment = await Enrollment.create({
      name,
      email,
      phone,
      course,
      paymentFrequency: paymentFrequency || 'full',
      status: status || 'Pending',
    });

    res.status(201).json({
      message: 'Enrollment saved to MongoDB successfully',
      enrollment: newEnrollment,
    });
  } catch (error) {
    console.error('Create Enrollment Error:', error);
    res.status(500).json({ message: 'Server error saving enrollment to MongoDB' });
  }
};

// @desc    Get all enrollments
// @route   GET /api/enrollments
// @access  Public
export const getEnrollments = async (req: Request, res: Response): Promise<void> => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.json(enrollments);
  } catch (error) {
    console.error('Get Enrollments Error:', error);
    res.status(500).json({ message: 'Server error fetching enrollments' });
  }
};

// @desc    Update enrollment status
// @route   PATCH /api/enrollments/:id
// @access  Public
export const updateEnrollmentStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Enrollment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      res.status(404).json({ message: 'Enrollment not found' });
      return;
    }

    res.json({ message: 'Enrollment updated successfully', enrollment: updated });
  } catch (error) {
    console.error('Update Enrollment Error:', error);
    res.status(500).json({ message: 'Server error updating enrollment' });
  }
};
