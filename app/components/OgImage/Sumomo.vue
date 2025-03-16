<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    class="relative h-full w-full flex items-center justify-center border-2 border-white bg-neutral-900 text-white"
  >
    <div class="flex flex-col items-center gap-4 text-center">
      <h1
        data-testid="title"
        class="flex text-7xl font-bold"
      >
        {{ title }}
      </h1>
      <p
        v-if="description"
        data-testid="description"
        class="max-w-3xl text-2xl"
      >
        {{ description }}
      </p>
    </div>

    <p
      data-testid="author"
      class="absolute bottom-17 right-13 flex gap-4 font-bold"
    >
      スモモ
    </p>
  </div>
</template>
