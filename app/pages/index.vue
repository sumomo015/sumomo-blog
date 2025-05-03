<script setup lang="ts">
defineOgImage({
  props: { title: 'Sumomo\'s Blog' },
})
</script>

<template>
  <div class="flex flex-col gap-y-8 px-7 py-10 sm:mx-auto sm:h-full sm:w-140 sm:justify-center sm:gap-y-17 sm:px-0">
    <HomeTop />
    <HomeBottom />
  </div>
</template>
