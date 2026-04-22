import {defineType} from 'sanity'

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
      name: 'eventType',
      title: 'Event Scope/Type',
      type: 'string',
    },
    {
      name: 'impactStorytelling',
      title: 'Impact Storytelling',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'mediaAndTestimonials',
      title: 'Media & Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'mediaItem', type: 'image', title: 'Media Image'},
            {name: 'quote', type: 'text', title: 'Testimonial Quote'},
          ],
        },
      ],
    },
    {
      name: 'sponsorsAndPartners',
      title: 'Sponsors & Partners',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of sponsors and partners for this event',
    },
  ],
})
