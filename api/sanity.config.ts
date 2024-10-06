import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'SanityBoilerPlate',

  projectId: '2hcufetx',
  dataset: 'production',

  plugins: [structureTool() ],

  schema: {
    types: schemaTypes,
  },
})
