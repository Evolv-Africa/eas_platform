import { defineType, defineField } from 'sanity';

export const scheduleItem = defineType({
  name: 'scheduleItem',
  title: 'Schedule Item',
  type: 'object',
  fields: [
    defineField({ name: 'time', title: 'Time', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
  ],
});

export const scheduleDay = defineType({
  name: 'scheduleDay',
  title: 'Schedule Day',
  type: 'object',
  fields: [
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'dayTitle', title: 'Day Title', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Schedule Items',
      type: 'array',
      of: [{ type: 'scheduleItem' }],
    }),
  ],
});
