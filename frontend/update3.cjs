const fs = require('fs');

// 1. Update courses.json
const coursesJsonFile = 'c:/Users/Dell/Desktop/neotech/frontend/src/data/courses.json';
let courses = JSON.parse(fs.readFileSync(coursesJsonFile, 'utf8'));
courses.forEach(c => {
  if(c.title === 'Spoken English Mastery') c.duration = '3 Months';
});
fs.writeFileSync(coursesJsonFile, JSON.stringify(courses, null, 2));

// 2. Update batches.json
const batchesJsonFile = 'c:/Users/Dell/Desktop/neotech/frontend/src/data/batches.json';
let batches = JSON.parse(fs.readFileSync(batchesJsonFile, 'utf8'));
batches.forEach(b => {
  if (b.course && b.course.title === 'Spoken English Mastery') {
    b.course.duration = '3 Months';
  }
});
fs.writeFileSync(batchesJsonFile, JSON.stringify(batches, null, 2));

// 3. Update Chatbot.tsx
const chatbotFile = 'c:/Users/Dell/Desktop/neotech/frontend/src/pages/Chatbot.tsx';
let chatbotText = fs.readFileSync(chatbotFile, 'utf8');
chatbotText = chatbotText.replace(/Spoken English Mastery: 2 Months/g, 'Spoken English Mastery: 3 Months');
chatbotText = chatbotText.replace(/Spoken English Mastery \(2 Months\)/g, 'Spoken English Mastery (3 Months)');
fs.writeFileSync(chatbotFile, chatbotText);

// 4. Update Sanity
require('dotenv').config();
const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: 'd9m1wvck',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-06-17',
  token: process.env.VITE_SANITY_TOKEN
});
async function updateSanity() {
  const allCourses = await client.fetch('*[_type == "course"]');
  for (const c of allCourses) {
    if (c.title === "Spoken English Mastery") {
      await client.patch(c._id).set({ duration: "3 Months" }).commit();
      console.log(`Updated ${c.title} in Sanity`);
    }
  }
}

updateSanity().then(() => {
  console.log("All durations for Spoken English updated to 3 Months locally and in Sanity!");
}).catch(console.error);
