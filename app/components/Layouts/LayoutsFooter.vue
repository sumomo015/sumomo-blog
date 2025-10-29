<script setup lang="ts">
defineProps<{ year: number }>()
</script>

<template>
  <footer class="text-center text-sm text-muted font-medium">
    <p class="mb-2">
      Made with 🩵 in Tokyo<br>
      using Vue, Nuxt, and Tailwind CSS.
    </p>
    <p>© {{ year }} - sumomo015.com</p>
  </footer>
</template>
