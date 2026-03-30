'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'
import { apiVersion, dataset, projectId } from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('ESGreen CMS')
          .items([
            S.listItem()
              .title('Nội dung')
              .child(
                S.list()
                  .title('Nội dung')
                  .items([
                    S.documentTypeListItem('blogPost').title('Bài viết'),
                    S.documentTypeListItem('legalDocument').title('Văn bản pháp lý'),
                  ])
              ),
            S.listItem()
              .title('Sản phẩm')
              .child(
                S.list()
                  .title('Sản phẩm')
                  .items([
                    S.documentTypeListItem('productBrochure').title('Brochure'),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Cấu hình')
              .child(
                S.list()
                  .title('Cấu hình')
                  .items([
                    S.documentTypeListItem('category').title('Danh mục'),
                  ])
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
