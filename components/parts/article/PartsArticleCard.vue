<script lang="ts" setup>
import { ArticleWithDate } from '@/types';

type props = {
  article: ArticleWithDate;
};

defineProps<props>();
</script>

<template>
  <NuxtLink :to="article._path" class="block">
    <div
      class="flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-600 border-opacity-20 p-5 transition-colors hover:bg-zinc-500 hover:bg-opacity-5 active:bg-zinc-500 active:bg-opacity-10 dark:border-zinc-400 dark:border-opacity-20 dark:bg-zinc-800 dark:bg-opacity-40 hover:dark:bg-zinc-600 hover:dark:bg-opacity-5 active:dark:bg-zinc-600 active:dark:bg-opacity-10"
    >
      <h2
        class="mb-4 text-2xl font-bold transition-colors hover:text-primary hover:underline lg:text-3xl"
      >
        {{ article.title }}
      </h2>
      <p class="mb-4 text-base text-zinc-500 dark:text-zinc-400">
        {{ article.createdAt.toLocaleDateString('ja-JP') }}
      </p>
      <p class="text mb-4">
        {{ article.description }}
      </p>
      <div>
        <PartsCommonArticleTag
          v-for="(tag, index) in article.tags"
          :key="index"
          class="mr-1 last-of-type:mr-0"
          :tag="tag"
        />
      </div>
    </div>
  </NuxtLink>
</template>
