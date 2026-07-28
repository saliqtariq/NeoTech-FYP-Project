import { Request, Response } from 'express';
import Stripe from 'stripe';
import Payment from '../models/Payment';
import Enrollment from '../models/Enrollment';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY is not defined in .env');
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2026-05-27.dahlia' as any,
});

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// @desc    Create Stripe Checkout Session (NO pending save - PaymentSuccess handles the Completed save)
// @route   POST /api/payments/create-checkout-session
// @access  Public
export const createCheckoutSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseName, price, courseId, currency, studentName, studentEmail } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency || 'usd',
            product_data: {
              name: courseName || 'NeoTech Course',
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: {
        courseId: courseId || 'unknown',
        studentName: studentName || 'Student',
        studentEmail: studentEmail || '',
        courseName: courseName || 'NeoTech Course',
      },
      success_url: `${FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/payment-canceled`,
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ message: 'Internal Server Error while creating checkout session' });
  }
};

// @desc    Save a completed payment to MongoDB (called by PaymentSuccess page after Stripe redirect)
// @route   POST /api/payments
// @access  Public
export const createPaymentRecord = async (req: Request, res: Response): Promise<void> => {
  try {
    const { transactionId, studentName, studentEmail, courseName, amount, currency, paymentMethod, status } = req.body;

    if (!studentName || !studentEmail || !courseName) {
      res.status(400).json({ message: 'studentName, studentEmail and courseName are required' });
      return;
    }

    const payment = await Payment.create({
      transactionId: transactionId || `txn_${Date.now()}`,
      studentName,
      studentEmail,
      courseName,
      amount: amount || 0,
      currency: currency || 'PKR',
      paymentMethod: paymentMethod || 'Full Payment',
      status: status || 'Completed',
    });

    res.status(201).json({ message: 'Payment record created in MongoDB', payment });
  } catch (error) {
    console.error('Create Payment Error:', error);
    res.status(500).json({ message: 'Error recording payment in MongoDB' });
  }
};

// @desc    Get all payments from MongoDB
// @route   GET /api/payments
// @access  Public
export const getPayments = async (req: Request, res: Response): Promise<void> => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (error) {
    console.error('Get Payments Error:', error);
    res.status(500).json({ message: 'Error fetching payments from MongoDB' });
  }
};

// @desc    Update payment status (Approve / Disapprove)
// @route   PATCH /api/payments/status
// @access  Public
export const updatePaymentStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, courseName, status } = req.body;

    const payment = await Payment.findOneAndUpdate(
      { studentEmail: email, courseName },
      { status },
      { new: true }
    );

    // Also update the enrollment status
    await Enrollment.findOneAndUpdate(
      { email, course: courseName },
      { status },
      { new: true }
    );

    if (!payment) {
      res.status(404).json({ message: 'Payment record not found in MongoDB' });
      return;
    }

    res.json({ message: `Payment & Enrollment status updated to ${status}`, payment });
  } catch (error) {
    console.error('Update Payment Status Error:', error);
    res.status(500).json({ message: 'Error updating payment status in MongoDB' });
  }
};
