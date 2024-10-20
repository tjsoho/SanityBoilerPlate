import { defineConfig } from 'sanity';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'SanityBoilerPlate',
  projectId: '2hcufetx',
  dataset: 'production',
  basePath: '/admin', // This sets the Studio to be served at /admin
  schema: {
    types: schemaTypes,
  },
});
