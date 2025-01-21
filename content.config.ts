import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { asOgImageCollection } from 'nuxt-og-image/content'
import { asSchemaOrgCollection } from 'nuxt-schema-org/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(asSchemaOrgCollection(asSitemapCollection(asOgImageCollection(
      {
        type: 'page',
        source: 'blog/**/*.md',
        schema: z.object({
          datePublished: z.string(),
          dateModified: z.string().optional(),
        }),
      },
    )))),
  },
})
