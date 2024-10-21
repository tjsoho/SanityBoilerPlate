// api/sanity.config.ts
import { defineConfig } from 'sanity';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'SanityBoilerPlate',
  projectId: '2hcufetx',
  dataset: 'production',
  basePath: '/admin', // Serve the Studio from /admin to align with subdomain
  schema: {
    types: schemaTypes,
  },
});
