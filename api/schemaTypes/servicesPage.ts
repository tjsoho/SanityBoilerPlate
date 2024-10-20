// schemaTypes/servicesPage.ts
import {defineType, defineField} from 'sanity';

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // Hero Section (title and description for the hero section)
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'string',
     
    }),

    // Services Section (array of services)
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          name: 'service',
          type: 'object',
          fields: [
            { name: 'title', title: 'Service Title', type: 'string' },
            { name: 'description', title: 'Service Description', type: 'text' },
            // Optional: You can add an image field here if needed
          ],
        },
      ],
    }),
  ],
});
