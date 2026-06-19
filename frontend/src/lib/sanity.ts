import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'd9m1wvck';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

// Read-only client (for public frontend)
export const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-06-17',
});

// Write client (for admin operations)
export const writeClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-06-17',
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
