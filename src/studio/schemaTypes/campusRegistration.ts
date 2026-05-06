import {defineField, defineType} from 'sanity'

export const campusRegistrationSchema = defineType({
  name: 'campusRegistration',
  title: 'Campus Tour Registration',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Student Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Student Name is required'),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .email()
          .error('A valid email address is required'),
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (Rule) => Rule.required().error('Institution is required'),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'institution',
    },
  },
})
