import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Danh mục',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tên danh mục',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Mô tả',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'locale',
      title: 'Ngôn ngữ',
      type: 'string',
      options: {
        list: [
          { title: 'Tiếng Việt', value: 'vi' },
          { title: 'English', value: 'en' },
        ],
        layout: 'radio',
      },
      initialValue: 'vi',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'locale',
    },
  },
})
