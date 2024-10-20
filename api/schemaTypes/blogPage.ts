// schemaTypes/blogPage.ts
import {defineType, defineField} from 'sanity'

export const blogPage = defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'blogPost' }] },
      ],
    }),
  ],
});