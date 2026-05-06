import {defineType} from 'sanity'

export const blogPostSchema = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    },
    {
      name: 'category',
      title: 'Primary Category',
      type: 'string',
      options: {
        list: [
          {title: 'Internship & Opportunity Insights', value: 'internship-opportunity'},
          {title: 'Events & Industry Happenings', value: 'events-industry'},
          {title: 'Academic & Career Success', value: 'academic-career'},
          {title: 'Social Media, Personal Branding & Visibility', value: 'branding-visibility'},
          {title: 'Youth Development & Thought Leadership', value: 'youth-development'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seoMetadata',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        {name: 'metaTitle', type: 'string', title: 'Meta Title'},
        {name: 'metaDescription', type: 'text', title: 'Meta Description'},
      ],
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
  ],
})
