<script setup lang="ts">
const now = useNow()
const year = computed(() => now.value.getFullYear())
</script>

<template>
  <footer class="text-center text-sm text-gray-500 dark:text-gray-400">
    <p class="mb-2">
      Made with 💚 in Tokyo<br>
      using Vue, Nuxt, and UnoCSS.
    </p>
    <p>© {{ year }} - sumomo015.dev</p>
  </footer>
</template>
