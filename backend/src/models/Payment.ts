import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  transactionId: string;
  studentName: string;
  studentEmail: string;
  courseName: string;
  amount?: number;
  currency?: string;
  paymentMethod: string;
  status: string; // 'Pending' | 'Completed' | 'Disapproved'
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema: Schema = new Schema(
  {
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    studentEmail: {
      type: String,
      required: true,
      lowercase: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'PKR',
    },
    paymentMethod: {
      type: String,
      default: 'Full Payment',
    },
    status: {
      type: String,
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model<IPayment>('Payment', PaymentSchema);

export default Payment;
