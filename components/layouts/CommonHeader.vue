<script lang="ts" setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

type props = {
  navigationList: Navigation[];
};

defineProps<props>();

const isSubmenuOpen = ref(false);

const route = useRoute();

watch(
  () => route.path,
  () => {
    isSubmenuOpen.value = false;
  }
);
</script>

<template>
  <header
    class="flex h-14 select-none justify-between bg-white px-4 py-2 shadow-sm shadow-[rgba(0,0,0,0.1)] dark:bg-zinc-800"
  >
    <nav class="flex items-center font-bold md:hidden">
      <div
        class="mr-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700"
        @click="isSubmenuOpen = true"
      >
        <Bars3Icon class="h-7 w-7" />
      </div>

      <img
        src="assets/images/icon.png"
        alt="icon"
        class="block h-8 rounded-full"
      />

      <NuxtLink
        class="mr-2 px-3 py-1 hover:text-primary"
        to="/"
        active-class="text-primary"
        >スモモのブログ</NuxtLink
      >
    </nav>

    <nav class="hidden items-center font-bold md:flex">
      <img
        src="assets/images/icon.png"
        alt="icon"
        class="block h-8 rounded-full"
      />
      <NuxtLink
        class="mr-2 px-3 py-1 transition-colors hover:text-primary"
        to="/"
        active-class="text-primary"
        >スモモのブログ</NuxtLink
      >
      <NuxtLink
        v-for="(nav, index) in navigationList"
        :key="index"
        class="px-3 py-1 transition-colors hover:text-primary"
        :to="nav.path"
        active-class="text-primary"
        >{{ nav.name }}</NuxtLink
      >
    </nav>

    <div class="flex items-center">
      <LayoutsDarkModeSwitch />
    </div>

    <Transition name="fade">
      <div
        v-show="isSubmenuOpen"
        class="fixed inset-0 bg-black opacity-60 md:hidden"
        @click="isSubmenuOpen = false"
      ></div>
    </Transition>

    <div
      :class="{
        'translate-x-0 opacity-100': isSubmenuOpen,
        '-translate-x-full opacity-0': !isSubmenuOpen,
      }"
      class="fixed inset-y-0 left-0 w-9/12 bg-white transition-all dark:bg-zinc-800 md:hidden"
    >
      <div
        class="flex h-14 select-none items-center bg-white px-4 py-2 shadow-sm shadow-[rgba(0,0,0,0.1)] dark:bg-zinc-800"
      >
        <img
          src="assets/images/icon.png"
          alt="icon"
          class="block h-8 rounded-full"
        />
        <NuxtLink
          class="mr-2 px-3 py-1 font-bold transition-colors hover:text-primary"
          to="/"
          active-class="text-primary"
          >スモモのブログ</NuxtLink
        >
        <div class="flex-grow"></div>
        <div
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700"
          @click="isSubmenuOpen = false"
        >
          <XMarkIcon class="h-7 w-7" />
        </div>
      </div>
      <div class="p-2">
        <div
          v-for="(nav, index) in navigationList"
          :key="index"
          class="text-zinc-500 dark:text-zinc-200 [&:nth-child(n+2)]:mt-1"
        >
          <NuxtLink
            class="block rounded px-3 py-1.5 font-bold transition-colors hover:bg-black hover:bg-opacity-5 hover:dark:bg-white hover:dark:bg-opacity-5"
            :to="nav.path"
            active-class="bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5"
            >{{ nav.name }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
