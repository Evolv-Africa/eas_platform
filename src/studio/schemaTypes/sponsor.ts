import { defineType } from 'sanity';

export const sponsorSchema = defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'isMainEventSponsor',
      title: 'Main Event Sponsor',
      type: 'boolean',
      description:
        'Show this sponsor on the home page (main event). This does not stop other events from referencing this sponsor.',
      initialValue: false,
    },
  ],
});
