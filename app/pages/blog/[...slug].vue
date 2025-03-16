<script setup lang="ts">
const route = useRoute()

const { data: blog } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

defineOgImage({
  props: {
    title: blog.value?.title,
    description: blog.value?.description,
  },
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
useHead(blog.value?.head ?? {})
useSeoMeta(blog.value?.seo ?? {})
</script>

<template>
  <div class="mx-auto h-full max-w-7xl px-4 lg:px-8 sm:px-6">
    <article v-if="blog">
      <BlogHeader
        :article="blog"
        class="border-b border-(--ui-border) pb-14 pt-20"
      />

      <div class="block lg:grid lg:grid-cols-10 lg:gap-8">
        <ContentRenderer
          :value="blog"
          class="lg:col-span-8"
        />
        <div class="hidden lg:col-span-2 lg:block">
          <BlogToc
            v-if="blog.body?.toc?.links"
            class="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto"
            :links="blog.body?.toc?.links"
          />
        </div>
      </div>

      <div class="mt-10 border-b border-(--ui-border) py-12">
        <NuxtLink
          class="text-(--ui-primary)"
          to="/blog"
        >← 記事一覧へ戻る</NuxtLink>
      </div>
    </article>
  </div>
</template>
