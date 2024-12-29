<script setup lang="ts">
const colorMode = useColorMode()
const isDarkMode = computed(() => colorMode.value === 'dark')
const isScrollLocked = useScrollLock(window)
const now = useNow()
const year = computed(() => now.value.getFullYear())

function toggleColorScheme() {
  colorMode.preference = isDarkMode.value ? 'light' : 'dark'
}
function toggleScrollLock(scrollLock: boolean) {
  isScrollLocked.value = scrollLock
}
</script>

<template>
  <div class="h-full flex flex-col">
    <LayoutsHeader
      class="fixed left-0 right-0 top-0 z-50"
      :is-dark-mode="isDarkMode"
      @toggle-color-scheme="toggleColorScheme"
      @toggle-menu="toggleScrollLock"
    />

    <main class="flex-grow-1 pt-16">
      <slot />
    </main>

    <LayoutsFooter
      :year="year"
      class="py-10 sm:py-16"
    />
  </div>
</template>
