require('dotenv').config();
const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: 'd9m1wvck',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-06-17',
  token: process.env.VITE_SANITY_TOKEN
});
async function updateCourses() {
  const courses = await client.fetch('*[_type == "course"]');
  for (const c of courses) {
    if (c.title === "MERN Full Stack Development" || c.title === "UI / UX Design") {
      await client.patch(c._id).set({ duration: "3 Months" }).commit();
      console.log(`Updated ${c.title} in Sanity`);
    }
  }
}
updateCourses().catch(console.error);
