<script setup lang="ts">
defineOgImage({
  props: { title: 'Sumomo\'s Blog' },
})
</script>

<template>
  <div class="flex flex-col gap-y-8 px-7 py-10 sm:(mx-auto h-full w-140 justify-center gap-y-17 px-0)">
    <HomeTop />
    <HomeBottom />
  </div>
</template>
