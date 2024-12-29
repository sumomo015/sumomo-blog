<template>
  <div class="mx-auto h-full max-w-7xl px-4 lg:px-8 sm:px-6">
    <ContentDoc v-slot="{ doc }">
      <article>
        <BlogHeader
          :parsed-content="doc"
          class="border-b border-gray-200 pb-14 pt-20 dark:border-gray-800"
        />

        <ContentRenderer :value="doc" />

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
