// client/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '2hcufetx', // Replace with your actual project ID
  dataset: 'production',
  useCdn: false, // Set to `true` for faster response times
  apiVersion: '2023-10-04', // Use current date for the latest API version
});

