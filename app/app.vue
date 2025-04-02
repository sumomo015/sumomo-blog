<script setup lang="ts">
import { NuxtRouteAnnouncer, NuxtLayout, NuxtPage } from '#components'
</script>

<template>
  <div class="h-full">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
