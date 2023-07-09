<script lang="ts" setup>
import { ArticleWithDate } from '@/types';

defineProps<{
  articleList: ArticleWithDate[];
}>();
</script>

<template>
  <div class="mx-auto max-w-4xl px-5 sm:px-12">
    <h1 class="my-10 text-5xl font-bold">スモモのブログ</h1>
    <div class="my-4">
      <p class="my-2">どうも、<span class="font-bold">スモモ</span>です。</p>
      <p class="my-2">
        東京でフロントエンジニアしています。このブログでは、日々の学びや気づきを書いていきます。時には、プライベートなことも書くかもしれません。
      </p>
      <p class="my-2">よろしくお願いします。</p>
    </div>
    <TemplatesArticleList :article-list="articleList" />
  </div>
</template>
