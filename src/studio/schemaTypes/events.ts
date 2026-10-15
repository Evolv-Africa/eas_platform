import { defineType } from 'sanity'

export const eventsSchema = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
    },
    {
      name: 'eventDate',
      title: 'Event Date & Time',
      type: 'datetime',
    },
    {
      name: 'eventType',
      title: 'Event Scope/Type',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'General location for the event',
    },
    {
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Only one event should be featured. If multiple are true, the earliest date will be used.',
      initialValue: false,
      validation: (Rule) =>
        Rule.custom(async (field, context) => {
          if (!field) return true;
          const client = context.getClient({ apiVersion: '2023-01-01' });
          const other = await client.fetch(
            `*[_type == "event" && isFeatured == true && _id != $id][0]`,
            { id: context.document?._id }
          );
          return other
            ? 'Another event is already marked as featured. Only one can be true.'
            : true;
        }),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'impactStorytelling',
      title: 'Impact Storytelling',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'mediaAndTestimonials',
      title: 'Media & Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'mediaItem', type: 'image', title: 'Media Image' },
            { name: 'quote', type: 'text', title: 'Testimonial Quote' },
          ],
        },
      ],
    },
    {
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'speaker' }] }],
      description: 'List of speaker references for this event',
    },
    {
      name: 'sponsorsAndPartners',
      title: 'Sponsors & Partners',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sponsor' }] }],
      description: 'List of sponsor and partner references for this event',
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      of: [{ type: 'scheduleDay' }],
      description: 'Array of days with schedule items for this event',
    },
    {
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      description:
        'Either a third-party ticket link (e.g. Tix) OR a deployed Google Apps Script web app URL. If "Registration Form Fields" below are added, this is treated as the Apps Script endpoint and a form modal is shown.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'registrationFields',
      title: 'Registration Form Fields',
      type: 'array',
      of: [{ type: 'registrationField' }],
      description: 'Leave empty to send visitors straight to the Registration URL.',
    },
    {
      name: 'allowEventRegistration',
      title: 'Allow Event Registration',
      type: 'boolean',
      description:
        'Allow visitors to register for this event. This mostly applies to upcoming events.',
      initialValue: false,
    },
  ],
})
