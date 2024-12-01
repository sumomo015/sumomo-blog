<template>
  <div class="h-full">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="css">
:root, body, #__nuxt {
  --uno: "h-full"
}

:root {
  --uno: "font-sans text-base"
}

body {
  --uno: "base-color-text base-bg"
}
</style>
