<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <NuxtLayout name="default">
    <div class="h-full flex flex-col items-center justify-center gap-y-2 px-4 text-center sm:flex-row">
      <h1 class="border-gray-200 text-2xl font-bold sm:(mr-6 border-r pr-6 text-3xl) dark:border-gray-800">
        {{ error.statusCode }}
      </h1>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        {{ error.statusMessage }}
      </p>
    </div>
  </NuxtLayout>
</template>
