<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { h1 } = useAnchorLinks()
</script>

<template>
  <h1
    :id="props.id"
    class="mb-6 mt-12 scroll-mt-20 text-3xl font-bold base-color-header"
  >
    <a
      v-if="!!props.id && h1"
      :href="`#${props.id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>
