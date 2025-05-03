<script setup lang="ts">
const props = defineProps<{ id?: string }>()

defineSlots<{
  default: () => void
}>()

const { h2 } = useAnchorLinks()
</script>

<template>
  <h2
    :id="props.id"
    class="mb-6 mt-12 scroll-mt-20 text-2xl font-bold text-(--ui-text-highlighted)"
  >
    <NuxtLink
      v-if="!!props.id && h2"
      :to="{ hash: `#${props.id}` }"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h2>
</template>
