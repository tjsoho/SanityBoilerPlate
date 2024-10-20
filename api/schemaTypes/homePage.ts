// schemaTypes/homePage.ts
import {defineType, defineField} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
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
          name: 'section1', // Section 1
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'subheading', title: 'Subheading', type: 'string' },
            { name: 'paragraph', title: 'Text', type: 'text' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
        {
          name: 'section2', // Section 2
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'subheading', title: 'Subheading', type: 'string' },
            { name: 'paragraph', title: 'Text', type: 'text' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
        {
          name: 'section3', // Section 3
          type: 'object',
          fields: [
            { name: 'galleryTitle', title: 'Gallery Title', type: 'string' },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
          ],
        },
        {
          name: 'section4', // Section 4
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'paragraph', title: 'Text', type: 'text' },
          ],
        },
      ],
    }),
  ],
});
