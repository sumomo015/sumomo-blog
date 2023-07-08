<script lang="ts" setup>
// ナビゲーションのリスト
const navigationList: Navigation[] = [
  {
    name: 'Vue',
    path: '/vue',
  },
  {
    name: 'GCP',
    path: '/gcp',
  },
];
</script>

<template>
  <div class="flex min-h-full flex-col">
    <LayoutsCommonHeader :navigation-list="navigationList" />
    <main class="flex-shrink-0 flex-grow">
      <slot />
    </main>
    <LayoutsCommonFooter />
  </div>
</template>
