<script setup lang="ts">
import { NuxtLink } from '#components'

useSeoMeta({
  title: '記事一覧',
  description: 'Sumomo\'s Blog の記事一覧です。',
})

const { data } = await useAsyncData('blog-list', async () => {
  return (await queryCollection('blog').all()).toReversed()
})

defineOgImage()
</script>

<template>
  <div class="mx-auto h-full max-w-5xl px-4 lg:px-8 sm:px-6">
    <h1 class="border-b border-(--ui-border) pb-14 pt-20 text-4xl font-bold text-(--ui-text-highlighted)">
      記事一覧
    </h1>

    <div
      v-for="blog in data"
      :key="blog.id"
      class="border-b border-(--ui-border) px-2 py-6"
    >
      <p>
        <time
          class="text-sm text-(--ui-text-muted) font-medium"
          :datetime="blog.datePublished"
        >{{ blog.datePublished }}</time>
      </p>
      <p>
        <NuxtLink
          class="text-xl font-medium text-(--ui-primary) hover:opacity-60 transition-opacity duration-250"
          :to="blog.path"
        >
          {{ blog.title }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
