<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <NuxtLayout name="default">
    <div class="h-full flex flex-col items-center justify-center gap-y-2 px-4 text-center sm:flex-row">
      <h1 class="border-(--ui-border) text-2xl font-bold sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl">
        {{ error.statusCode }}
      </h1>
      <p class="text-lg text-(--ui-text-muted) font-medium">
        {{ error.statusMessage }}
      </p>
    </div>
  </NuxtLayout>
</template>
