<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import type { Article } from '~/shared/types/content'

function convertContent(content: ParsedContent): Article {
  return content as Article
}
</script>

<template>
  <div class="mx-auto h-full max-w-7xl px-4 lg:px-8 sm:px-6">
    <OgImage />

    <ContentDoc v-slot="{ doc }">
      <article>
        <BlogHeader
          :article="convertContent(doc)"
          class="border-b border-gray-200 pb-14 pt-20 dark:border-gray-800"
        />

        <div class="block lg:(grid grid-cols-10 gap-8)">
          <ContentRenderer
            :value="doc"
            class="lg:col-span-8"
          />
          <div class="hidden lg:(col-span-2 block)">
            <BlogToc
              v-if="doc.body?.toc?.links"
              class="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto"
              :links="doc.body?.toc?.links"
            />
          </div>
        </div>

        <div class="mt-10 border-b border-gray-200 py-12 dark:border-gray-800">
          <NuxtLink
            class="base-color-link"
            to="/blog"
          >← 記事一覧へ戻る</NuxtLink>
        </div>
      </article>
    </ContentDoc>
  </div>
</template>
