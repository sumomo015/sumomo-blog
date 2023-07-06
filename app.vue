<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - スモモのブログ` : 'スモモのブログ';
  },
  script: [
    {
      children: `"use strict";"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)||document.documentElement.classList.add("dark");`,
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
