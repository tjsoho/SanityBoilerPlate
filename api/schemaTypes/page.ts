// schemaTypes/page.ts
import {defineType, defineField} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Web Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'subheading', title: 'Subheading', type: 'string' },
            { name: 'text', title: 'Text', type: 'text' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
  ],
})
