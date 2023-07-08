<script lang="ts" setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';

const darkModeHelper = useDarkModeHelper();
</script>

<template>
  <div
    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700"
    @click="darkModeHelper.toggleDarkMode"
  >
    <MoonIcon v-show="darkModeHelper.darkMode" class="h-6 w-6 text-inherit" />
    <SunIcon v-show="!darkModeHelper.darkMode" class="h-6 w-6 text-inherit" />
  </div>
</template>
