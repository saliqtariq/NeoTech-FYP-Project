import { Request, Response } from 'express';
import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_your_key';
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2026-05-27.dahlia' as any, // Fixed TS error matching the SDK version
});

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// @desc    Create Stripe Checkout Session
// @route   POST /api/payments/create-checkout-session
// @access  Public (for now, usually protected)
export const createCheckoutSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseName, price, courseId, currency } = req.body;

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency || 'usd',
            product_data: {
              name: courseName || 'NeoTech Course',
            },
            unit_amount: price * 100, // Stripe expects the price in cents/smallest currency unit
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // We pass the courseId in metadata so we know what they bought when the webhook fires
      metadata: {
        courseId: courseId || 'unknown',
      },
      // Redirects after success or cancel
      success_url: `${FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/payment-canceled`,
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ message: 'Internal Server Error while creating checkout session' });
  }
};
