<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="flex select-none flex-col items-center bg-gray-700 p-8 text-gray-200"
  >
    <div class="text-center">
      © {{ year }} スモモのブログ All rights reserved.
    </div>
  </footer>
</template>
