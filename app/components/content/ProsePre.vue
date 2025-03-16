<script setup lang="ts">
import type { StyleValue } from 'vue'

defineProps<{
  class?: string
  style?: StyleValue
}>()
</script>

<template>
  <pre
    class="prose-pre my-6 overflow-x-auto border border-(--ui-border-muted) rounded-md bg-(--ui-bg-muted) px-4 py-3"
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
