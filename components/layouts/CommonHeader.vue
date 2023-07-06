<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/outline';

type Navigation = {
  name: string;
  path: string;
};

const navigationList: Navigation[] = [
  // {
  //   name: 'Vue',
  //   path: '/vue',
  // },
  // {
  //   name: 'GCP',
  //   path: '/gcp',
  // },
];
</script>

<template>
  <header
    class="flex h-14 select-none justify-between bg-white px-4 py-2 shadow-sm shadow-[rgba(0,0,0,0.1)] dark:bg-zinc-800"
  >
    <nav class="flex items-center font-bold md:hidden">
      <div
        class="mr-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700"
      >
        <Bars3Icon class="h-7 w-7" />
      </div>

      <NuxtLink
        class="mr-2 px-3 py-1 hover:text-primary"
        to="/"
        active-class="text-primary"
        >スモモのブログ</NuxtLink
      >
    </nav>
    <nav class="hidden items-center font-bold md:flex">
      <NuxtLink
        class="mr-2 px-3 py-1 hover:text-primary"
        to="/"
        active-class="text-primary"
        >スモモのブログ</NuxtLink
      >
      <NuxtLink
        v-for="(nav, index) in navigationList"
        :key="index"
        class="px-3 py-1 hover:text-primary"
        :to="nav.path"
        >{{ nav.name }}</NuxtLink
      >
    </nav>
    <div class="flex items-center">
      <LayoutsDarkModeSwitch />
    </div>
  </header>
</template>
