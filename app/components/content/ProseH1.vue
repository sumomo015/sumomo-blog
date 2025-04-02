<script setup lang="ts">
import { NuxtLink } from '#components'

const props = defineProps<{ id?: string }>()

defineSlots<{
  default: () => void
}>()

const { h1 } = useAnchorLinks()
</script>

<template>
  <h1
    :id="props.id"
    class="mb-6 mt-12 scroll-mt-20 text-3xl font-bold text-(--ui-text-highlighted)"
  >
    <NuxtLink
      v-if="!!props.id && h1"
      :to="{ hash: `#${props.id}` }"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h1>
</template>
