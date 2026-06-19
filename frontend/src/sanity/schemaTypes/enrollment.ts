import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'enrollment',
  title: 'Enrollment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'course',
      title: 'Course',
      type: 'string',
    }),
    defineField({
      name: 'paymentFrequency',
      title: 'Payment Frequency',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Pending', 'Completed', 'Cancelled']
      },
      initialValue: 'Pending'
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'course'
    }
  }
})
