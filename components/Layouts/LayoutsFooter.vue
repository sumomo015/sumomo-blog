<script setup lang="ts">
defineProps<{ year: number }>()
</script>

<template>
  <footer class="text-center text-sm base-color-secondary">
    <p class="mb-2">
      Made with 🩵 in Tokyo<br>
      using Vue, Nuxt, and UnoCSS.
    </p>
    <p>© {{ year }} - sumomo015.dev</p>
  </footer>
</template>
