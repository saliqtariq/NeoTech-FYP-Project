import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
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
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'students',
      title: 'Students Enrolled',
      type: 'string',
      description: 'e.g. 100+ or 0+'
    }),
    defineField({
      name: 'modules',
      title: 'Modules Count',
      type: 'number',
    }),
    defineField({
      name: 'projects',
      title: 'Projects Count',
      type: 'number',
    }),
    defineField({
      name: 'skills',
      title: 'Key Skills',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of skills/technologies mastered (e.g. React, Node.js)'
    }),
    defineField({
      name: 'priceUSD',
      title: 'Price (USD)',
      type: 'number',
    }),
    defineField({
      name: 'pricePKR',
      title: 'Price (PKR)',
      type: 'number',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      description: 'e.g. Advance, Beginner',
    }),
    defineField({
      name: 'isRamadan',
      title: 'Is Ramadan Special?',
      type: 'boolean',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'string',
      description: 'e.g. 4.8',
    }),
  ],
})
