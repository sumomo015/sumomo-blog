<script setup lang="ts">
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
    <h1 class="border-b border-gray-200 pb-14 pt-20 text-4xl font-bold dark:border-gray-800 base-color-header">
      記事一覧
    </h1>

    <div
      v-for="blog in data"
      :key="blog.id"
      class="border-b border-gray-200 px-2 py-6 dark:border-gray-800"
    >
      <p>
        <time
          class="text-sm base-color-secondary"
          :datetime="blog.datePublished"
        >{{ blog.datePublished }}</time>
      </p>
      <p>
        <NuxtLink
          class="text-xl font-medium base-color-link base-hover-opacity"
          :to="blog.path"
        >{{ blog.title }}</NuxtLink>
      </p>
    </div>
  </div>
</template>
