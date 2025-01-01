<script setup lang="ts">
import type { StyleValue } from 'vue'

defineProps<{
  class?: string
  style?: StyleValue
}>()
</script>

<template>
  <pre
    class="prose-pre my-6 overflow-x-auto border border-gray-200 rounded-md bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800"
    :class="$props.class"
    :style="$props.style"
  ><slot /></pre>
</template>

<style scoped>
pre.prose-pre :deep(code .line) {
  display: block;
  min-height:1rem;
}
</style>
