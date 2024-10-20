// schemaTypes/aboutPage.ts
import {defineType, defineField} from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page', // This title will only appear in the Studio
  type: 'document',
  fields: [
    defineField({
      name: 'title',  // Internal title for the Studio (e.g. "About Page Content")
      title: 'Page Title (For internal use only)',
      type: 'string',
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
            { name: 'text', title: 'Text', type: 'text' },
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
            { name: 'teamSectionTitle', title: 'Team Section Title', type: 'string' },
            {
              name: 'teamMembers',
              title: 'Team Members',
              type: 'array',
              of: [
                {
                  name: 'teamMember', // Team Member Object
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Name', type: 'string' },
                    { name: 'role', title: 'Role', type: 'string' },
                    { name: 'image', title: 'Image', type: 'image' },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'section3', // Section 3
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'text', title: 'Text', type: 'text' },
          ],
        },
      ],
    }),
  ],
});
