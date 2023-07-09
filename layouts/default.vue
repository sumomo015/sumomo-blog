<script lang="ts" setup>
import { Navigation } from '@/types';

const tagsMap = getTagMap();

// ナビゲーションのリスト
const navigationList: Navigation[] = [
  {
    name: tagsMap.get('vue') ?? 'vue',
    path: '/tags/vue',
  },
  {
    name: tagsMap.get('gcp') ?? 'gcp',
    path: '/tags/gcp',
  },
];
</script>

<template>
  <div class="flex min-h-full flex-col">
    <PartsLayoutHeader :navigation-list="navigationList" />
    <main class="mt-14 flex-shrink-0 flex-grow">
      <slot />
    </main>
    <PartsLayoutFooter />
  </div>
</template>
