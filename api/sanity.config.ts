import { defineConfig } from 'sanity';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'SanityBoilerPlate',
  projectId: '2hcufetx',
  dataset: 'production',
  basePath: '/', // Serve from the root since we're mapping admin.domain.com.au
  schema: {
    types: schemaTypes,
  },
});
