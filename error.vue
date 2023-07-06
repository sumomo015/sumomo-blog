<script lang="ts" setup>
import { NuxtError } from 'nuxt/app';

type Props = {
  error: NuxtError;
};

const props = defineProps<Props>();

const title = computed(() => {
  if (props.error.statusCode === 404) {
    return 'Page Not Found - スモモのブログ';
  }
  return 'エラーが発生しました - スモモのブログ';
});

useHead({
  title,
});
</script>

<template>
  <NuxtLayout>
    <div
      v-if="error.statusCode === 404"
      class="mx-auto my-20 max-w-screen-md px-4"
    >
      <h1 class="mb-4 text-5xl font-bold">Page Not Found</h1>
      <p>お探しのページが見つかりませんでした。URLをご確認ください。</p>
    </div>
    <div v-else class="mx-auto my-20 max-w-screen-md px-4">
      <h1 class="mb-4 text-5xl font-bold">エラーが発生しました</h1>
      <p>申し訳ありません。</p>
    </div>
  </NuxtLayout>
</template>
