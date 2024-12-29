import type { MarkdownParsedContent } from '@nuxt/content'

export interface Article extends MarkdownParsedContent {
  datePublished?: string
  dateModified?: string
}
