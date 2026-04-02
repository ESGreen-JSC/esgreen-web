import { defineType, defineField } from 'sanity'

export const legalDocument = defineType({
  name: 'legalDocument',
  title: 'Văn bản pháp lý',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tên văn bản',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(200),
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
      name: 'documentNumber',
      title: 'Số hiệu văn bản',
      type: 'string',
      placeholder: 'VD: 06/2022/NĐ-CP',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issuedDate',
      title: 'Ngày ban hành',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issuingAuthority',
      title: 'Cơ quan ban hành',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'documentType',
      title: 'Loại văn bản',
      type: 'string',
      options: {
        list: [
          { title: 'Nghị định', value: 'decree' },
          { title: 'Thông tư', value: 'circular' },
          { title: 'Quyết định', value: 'decision' },
          { title: 'Hướng dẫn', value: 'guideline' },
          { title: 'Khác', value: 'other' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Mô tả tóm tắt (Tiếng Việt)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'excerptEn',
      title: 'Mô tả tóm tắt (English)',
      type: 'text',
      rows: 3,
      description: 'Bản dịch tiếng Anh của mô tả tóm tắt (tùy chọn)',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'file',
      title: 'File văn bản (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
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
      name: 'publishedAt',
      title: 'Ngày đăng lên website',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
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
          { title: 'Lưu trữ', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'documentNumber',
    },
  },
  orderings: [
    {
      title: 'Ngày ban hành (Mới nhất)',
      name: 'issuedDateDesc',
      by: [{ field: 'issuedDate', direction: 'desc' }],
    },
  ],
})
