<script setup lang="ts">
import { NuxtLink } from '#components'

const props = defineProps<{ href: string }>()

defineSlots<{
  default: () => void
}>()

const isExternal = computed(() => props.href.startsWith('http'))
</script>

<template>
  <NuxtLink
    class="font-bold text-(--ui-primary) hover:underline"
    :to="href"
    :external="isExternal"
    :target="isExternal ? '_blank' : undefined"
  >
    <slot />
  </NuxtLink>
</template>
