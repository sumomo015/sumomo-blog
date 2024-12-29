<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { h3 } = useAnchorLinks()
</script>

<template>
  <h3
    :id="props.id"
    class="mb-5 mt-8 scroll-mt-20 text-xl font-bold base-color-header"
  >
    <a
      v-if="!!props.id && h3"
      :href="`#${props.id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>
