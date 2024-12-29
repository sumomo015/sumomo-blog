<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { h2 } = useAnchorLinks()
</script>

<template>
  <h2
    :id="props.id"
    class="mb-6 mt-12 scroll-mt-20 text-2xl font-bold base-color-header"
  >
    <a
      v-if="!!props.id && h2"
      :href="`#${props.id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
