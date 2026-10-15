import {defineType} from 'sanity'

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Current Role',
      type: 'string',
      description: 'Update this field to support role changes over time',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'Shown as the answer in this person’s row.',
    },
    {
      name: 'ideologyQuestion',
      title: 'Ideology Question',
      type: 'string',
      description: 'The short question above the biography. Defaults to “What is an Ideology you live by?”',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'sortOrder',
      title: 'Row Order',
      type: 'number',
      description: 'Lower numbers appear first in the team list.',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          name: 'social',
          title: 'Social',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'musicSong',
      title: 'Music Mood Song',
      type: 'string',
    },
    {
      name: 'musicArtist',
      title: 'Music Mood Artist',
      type: 'string',
    },
    {
      name: 'musicMood',
      title: 'Music Mood Link',
      type: 'url',
    },
  ],
})
