import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

import authRoutes from './routes/authRoutes';
import paymentRoutes from './routes/paymentRoutes';

// Stripe webhooks need raw body, so we separate it from the standard JSON body parser
// We will add the webhook route here later before app.use(express.json())

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

// Basic Route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('NeoTech Backend API is running!');
});

// Database Connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) throw new Error('MONGODB_URI is not defined in .env');

    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected Successfully');
    
    // Start Server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();
