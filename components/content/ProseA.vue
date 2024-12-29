<script setup lang="ts">
const props = defineProps<{ href: string }>()
const isExternal = computed(() => props.href.startsWith('http'))
</script>

<template>
  <NuxtLink
    :to="href"
    :external="isExternal"
    :target="isExternal ? '_blank' : undefined"
    class="font-medium base-color-link hover:underline"
  >
    <slot />
  </NuxtLink>
</template>
