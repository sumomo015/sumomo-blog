<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import type { Article } from '~/shared/types/content'

const props = defineProps<{ parsedContent: ParsedContent }>()
const article = computed<Article>(() => props.parsedContent as Article)
</script>

<template>
  <div>
    <div class="mb-10">
      <NuxtLink
        class="base-color-link"
        to="/blog"
      >← 記事一覧へ戻る</NuxtLink>
    </div>

    <h1 class="mb-4 text-4xl font-bold base-color-header">
      {{ article.title }}
    </h1>

    <p class="base-color-secondary">
      <time
        v-if="article.datePublished"
        :datetime="article.datePublished"
      >投稿日 {{ article.datePublished }}</time>
      <template v-if="article.dateModified">
        ・ <time :datetime="article.dateModified">最終更新日 {{ article.dateModified }}</time>
      </template>
    </p>
  </div>
</template>
