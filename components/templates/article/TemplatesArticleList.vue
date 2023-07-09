<script lang="ts" setup>
import { ArticleWithDate } from '@/types';

type Props = {
  articleList: ArticleWithDate[];
};

defineProps<Props>();
</script>

<template>
  <div>
    <PartsArticleCard
      v-for="article in articleList"
      :key="article._id"
      class="mb-5"
      :article="article"
    />
  </div>
</template>
