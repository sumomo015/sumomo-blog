<script setup lang="ts">
const props = defineProps<{ href: string }>()
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
