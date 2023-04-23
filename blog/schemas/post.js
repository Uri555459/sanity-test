import {BookIcon} from '@sanity/icons'

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: BookIcon,
  groups: [
    {
      title: 'Meta',
      name: 'meta',
    },
    {
      title: 'Content',
      name: 'content',
    },
  ],
  fields: [
    {
      title: 'Meta title',
      name: 'meta_title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    },

    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      group: 'meta',
    },

    {
      title: 'Published date',
      name: 'publishedDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    },

    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      group: 'content',
      fields: [
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
        },
      ],
    },

    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },

    {
      title: 'Body content',
      name: 'body',
      type: 'array',
      validation: (Rule) => Rule.required(),
      group: 'content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
