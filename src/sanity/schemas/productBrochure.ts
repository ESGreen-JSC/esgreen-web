import { defineType, defineField } from 'sanity'

export const productBrochure = defineType({
  name: 'productBrochure',
  title: 'Brochure sản phẩm',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tên brochure',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'product',
      title: 'Sản phẩm',
      type: 'string',
      options: {
        list: [
          { title: 'Phần mềm kiểm kê KNK', value: 'ghg-inventory' },
          { title: 'Chấm điểm ESG', value: 'esg-rating' },
          { title: 'Tư vấn Net Zero', value: 'net-zero' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'File brochure (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'version',
      title: 'Phiên bản',
      type: 'string',
      placeholder: 'VD: v1.0',
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
    defineField({
      name: 'status',
      title: 'Trạng thái',
      type: 'string',
      options: {
        list: [
          { title: 'Bản nháp', value: 'draft' },
          { title: 'Đã đăng', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'product',
    },
  },
})
