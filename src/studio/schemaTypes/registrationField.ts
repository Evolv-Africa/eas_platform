import { defineType } from 'sanity'

export const registrationField = defineType({
  name: 'registrationField',
  title: 'Registration Field',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'name',
      title: 'Field Key',
      type: 'string',
      description: 'Must match the column/param name your Google Apps Script reads (e.g. fullName)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Input Type',
      type: 'string',
      options: { list: ['text', 'email', 'tel', 'number', 'textarea', 'select'] },
      initialValue: 'text',
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Only used for the "select" type',
      hidden: ({ parent }) => parent?.type !== 'select',
    },
    { name: 'placeholder', title: 'Placeholder', type: 'string' },
    { name: 'required', title: 'Required', type: 'boolean', initialValue: true },
  ],
  preview: { select: { title: 'label', subtitle: 'type' } },
})
