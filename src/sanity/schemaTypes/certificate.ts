import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'courseName',
      title: 'Course Name',
      type: 'string',
      description: 'The name of the course for this certificate'
    }),
    defineField({
      name: 'courseInfo',
      title: 'Course Info / Description',
      type: 'text',
      description: 'A brief description of what the course covers'
    }),
    defineField({
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
