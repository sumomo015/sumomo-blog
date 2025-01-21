<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'

defineProps<{ article: BlogCollectionItem }>()
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
      >
        投稿日 {{ article.datePublished }}
      </time>

      <span v-if="article.dateModified"> ・</span>

      <time
        v-if="article.dateModified"
        :datetime="article.dateModified"
      >
        最終更新日 {{ article.dateModified }}
      </time>
    </p>
  </div>
</template>
