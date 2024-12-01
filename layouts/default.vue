<script setup lang="ts">
const colorMode = useColorMode()
const isDarkMode = computed(() => colorMode.value === 'dark')

function toggleColorScheme() {
  colorMode.preference = isDarkMode.value ? 'light' : 'dark'
}
</script>

<template>
  <div class="h-full flex flex-col">
    <LayoutsHeader
      :is-dark-mode="isDarkMode"
      @toggle-color-scheme="toggleColorScheme"
    />

    <main class="flex-grow-1">
      <slot />
    </main>

    <LayoutsFooter class="py-10 sm:py-16" />
  </div>
</template>
