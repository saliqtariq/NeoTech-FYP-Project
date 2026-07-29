const fs = require('fs');

const coursesJsonFile = 'c:/Users/Dell/Desktop/neotech/frontend/src/data/courses.json';
let courses = JSON.parse(fs.readFileSync(coursesJsonFile, 'utf8'));
courses.forEach(c => {
  if(c.title === 'MERN Full Stack Development' || c.title === 'UI / UX Design') c.duration = '3 Months';
});
fs.writeFileSync(coursesJsonFile, JSON.stringify(courses, null, 2));

const batchesJsonFile = 'c:/Users/Dell/Desktop/neotech/frontend/src/data/batches.json';
let batchesText = fs.readFileSync(batchesJsonFile, 'utf8');
batchesText = batchesText.replace(/"duration":"4 Months"/g, '"duration":"3 Months"');
batchesText = batchesText.replace(/"duration":"2 Months"/g, '"duration":"3 Months"');
fs.writeFileSync(batchesJsonFile, batchesText);

const chatbotFile = 'c:/Users/Dell/Desktop/neotech/frontend/src/pages/Chatbot.tsx';
let chatbotText = fs.readFileSync(chatbotFile, 'utf8');
chatbotText = chatbotText.replace(/4 Months \|/g, '3 Months |');
chatbotText = chatbotText.replace(/2 Months \|/g, '3 Months |');
chatbotText = chatbotText.replace(/\(4 Months\)/g, '(3 Months)');
chatbotText = chatbotText.replace(/\(2 Months\)/g, '(3 Months)');
fs.writeFileSync(chatbotFile, chatbotText);

console.log("All durations updated to 3 Months locally!");
