import mongoose, { Schema, Document } from 'mongoose';

export interface IContactInquiry extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactInquirySchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

const ContactInquiry = mongoose.model<IContactInquiry>('ContactInquiry', ContactInquirySchema);

export default ContactInquiry;
