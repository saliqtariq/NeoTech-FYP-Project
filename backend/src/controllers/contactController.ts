import { Request, Response } from 'express';
import ContactInquiry from '../models/ContactInquiry';

// @desc    Create a new contact inquiry
// @route   POST /api/contact
// @access  Public
export const createContactInquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      res.status(400).json({ message: 'First name, last name, email, and message are required.' });
      return;
    }

    const newInquiry = await ContactInquiry.create({
      firstName,
      lastName,
      email,
      phone: phone || '',
      message,
      status: 'New',
    });

    res.status(201).json({
      message: 'Contact inquiry submitted successfully',
      inquiry: newInquiry,
    });
  } catch (error) {
    console.error('Create Contact Inquiry Error:', error);
    res.status(500).json({ message: 'Server error saving contact inquiry' });
  }
};

// @desc    Get all contact inquiries
// @route   GET /api/contact
// @access  Admin
export const getContactInquiries = async (req: Request, res: Response): Promise<void> => {
  try {
    const inquiries = await ContactInquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    console.error('Get Contact Inquiries Error:', error);
    res.status(500).json({ message: 'Server error fetching contact inquiries' });
  }
};

// @desc    Update contact inquiry status (e.g., mark as Read/Resolved)
// @route   PATCH /api/contact/:id
// @access  Admin
export const updateContactInquiryStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await ContactInquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      res.status(404).json({ message: 'Contact inquiry not found' });
      return;
    }

    res.json({ message: 'Contact inquiry updated successfully', inquiry: updated });
  } catch (error) {
    console.error('Update Contact Inquiry Error:', error);
    res.status(500).json({ message: 'Server error updating contact inquiry' });
  }
};

// @desc    Delete a contact inquiry
// @route   DELETE /api/contact/:id
// @access  Admin
export const deleteContactInquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deleted = await ContactInquiry.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: 'Contact inquiry not found' });
      return;
    }

    res.json({ message: 'Contact inquiry deleted successfully' });
  } catch (error) {
    console.error('Delete Contact Inquiry Error:', error);
    res.status(500).json({ message: 'Server error deleting contact inquiry' });
  }
};
