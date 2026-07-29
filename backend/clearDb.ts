import mongoose from 'mongoose';
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import Enrollment from './src/models/Enrollment';
import Payment from './src/models/Payment';
import ContactInquiry from './src/models/ContactInquiry';

dotenv.config();

const clearDb = async () => {
  try {
    // 1. Connect and clear MongoDB
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');
    
    await Enrollment.deleteMany({});
    console.log('Cleared MongoDB Enrollments');
    
    await Payment.deleteMany({});
    console.log('Cleared MongoDB Payments');
    
    await ContactInquiry.deleteMany({});
    console.log('Cleared MongoDB Contact Inquiries');

    // 2. Clear Sanity
    const sanityClient = createClient({
      projectId: 'd9m1wvck',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-06-17',
      token: 'skDhsdvhMoNeHom6YsVzZam5JeCYfYnjCLmYFd4NlTHPT3ikmqPFgRakYZZ4lwi9Uddb9thhEvUFEPwoIktvVhV3eaaVcESBqnXhCdDaLtj5xtEcTMNU5D66lH3Bwts2qACCTMPubbHZddKrLAsoKHEDLLBDwKc9NYf30DXmnAbI3oaFi59I'
    });

    const enrollments = await sanityClient.fetch('*[_type == "enrollment"]');
    console.log(`Found ${enrollments.length} enrollments in Sanity to delete`);
    
    for (const doc of enrollments) {
      await sanityClient.delete(doc._id);
    }
    console.log('Cleared Sanity Enrollments');

    console.log('All clear done!');
    process.exit(0);
  } catch (error) {
    console.error('Error clearing databases:', error);
    process.exit(1);
  }
};

clearDb();
