<script setup lang="ts">
const props = defineProps<{ id?: string }>()

defineSlots<{
  default: () => void
}>()

const { h3 } = useAnchorLinks()
</script>

<template>
  <h3
    :id="props.id"
    class="mb-5 mt-8 scroll-mt-20 text-xl font-bold text-(--ui-text-highlighted)"
  >
    <NuxtLink
      v-if="!!props.id && h3"
      :to="{ hash: `#${props.id}` }"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h3>
</template>
