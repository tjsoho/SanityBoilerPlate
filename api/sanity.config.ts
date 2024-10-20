import { defineConfig } from 'sanity';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'SanityBoilerPlate',
  projectId: '2hcufetx',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
});
