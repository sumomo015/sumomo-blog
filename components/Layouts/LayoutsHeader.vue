<script setup lang="ts">
defineProps<{ isDarkMode: boolean }>()
defineEmits<{ toggleColorScheme: [] }>()
</script>

<template>
  <header class="border-b-1 border-gray-200 dark:border-gray-800 base-bg">
    <div class="flex items-center p-4 pl-6 lg:(mx-auto w-screen-lg)">
      <NuxtLink
        to="/"
        class="text-base font-bold base-color-header base-hover-opacity"
      >
        Sumomo's Blog
      </NuxtLink>

      <div class="flex-grow-1" />

      <div class="flex gap-x-1.5">
        <NuxtLink
          class="size-8 flex items-center justify-center rounded-md base-hover-bg"
          to="https://github.com/sumomo015"
          target="_blank"
          external
          aria-label="Go to GitHub"
        >
          <span class="i-simple-icons-github size-5" />
        </NuxtLink>

        <button
          class="size-8 flex items-center justify-center rounded-md duration-none base-hover-bg"
          type="button"
          aria-label="Toggle dark mode"
          @click="$emit('toggleColorScheme')"
        >
          <ClientOnly>
            <span
              class="size-5"
              :class="{ 'i-ph-moon': isDarkMode, 'i-ph-sun': !isDarkMode }"
            />
          </ClientOnly>
        </button>

        <button
          class="size-8 flex items-center justify-center rounded-md lg:hidden base-hover-bg"
          type="button"
          aria-label="Toggle navigation menu"
        >
          <span class="i-ph-list size-5" />
        </button>
      </div>
    </div>
  </header>
</template>
