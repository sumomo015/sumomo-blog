<script setup lang="ts">
useSeoMeta({
  title: '',
  articleModifiedTime: '2024-12-28',
})
</script>

<template>
  <div class="flex flex-col gap-y-8 px-7 py-10 sm:(mx-auto h-full w-140 justify-center gap-y-17 px-0)">
    <OgImage :props="{ title: 'Sumomo\'s Blog' }" />
    <HomeTop />
    <HomeBottom />
  </div>
</template>
