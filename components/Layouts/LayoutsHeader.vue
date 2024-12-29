<script setup lang="ts">
defineProps<{ isDarkMode: boolean }>()
const emit = defineEmits<{
  toggleColorScheme: []
  toggleMenu: [boolean]
}>()

interface NavLink {
  to: string
  text: string
  icon: string
}

const route = useRoute()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navLinks: NavLink[] = [
  { to: '/', text: 'Home', icon: 'i-ph-house' },
  { to: '/blog', text: 'Blog', icon: 'i-ph-newspaper' },
]
const navLinkBaseClass: string[] = [
  'font-medium transition-colors',
  'hover:text-sky-500 dark:hover:text-sky-400',
]
const navLinkActiveClass = 'base-color-link font-semibold'

watch(isMenuOpen, (isOpen) => {
  emit('toggleMenu', isOpen)
})
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="border-b-1 border-gray-200 dark:border-gray-800 base-bg">
    <div class="flex items-center p-4 pl-6 xl:(mx-auto w-screen-xl) lg:px-8">
      <NuxtLink
        to="/"
        class="font-bold base-color-header base-hover-opacity"
      >
        Sumomo's Blog
      </NuxtLink>

      <div class="flex-grow-1" />

      <!-- desktop menu -->
      <nav
        class="mr-30 hidden gap-x-8 lg:flex"
        aria-label="Desktop navigation"
      >
        <NuxtLink
          v-for="(link, idx) in navLinks"
          :key="idx"
          :to="link.to"
          class="block text-sm"
          :class="navLinkBaseClass"
          :active-class="navLinkActiveClass"
        >
          {{ link.text }}
        </NuxtLink>
      </nav>
      <!-- desktop menu -->

      <!-- mobile menu -->
      <nav
        v-show="isMenuOpen"
        class="fixed inset-0 top-16 border-t-1 border-gray-200 bg-white px-4 lg:hidden dark:border-gray-800 dark:bg-gray-900 sm:px-6"
        aria-label="Mobile navigation"
      >
        <NuxtLink
          v-for="(link, idx) in navLinks"
          :key="idx"
          :to="link.to"
          class="mt-3 flex items-center gap-1.5 text-sm/6"
          :class="navLinkBaseClass"
          :active-class="navLinkActiveClass"
        >
          <span
            class="size-5 flex-shrink-0"
            :class="link.icon"
          />
          <span>{{ link.text }}</span>
        </NuxtLink>
      </nav>
      <!-- mobile menu -->

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
          data-testid="toggle-color-scheme-button"
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
          data-testid="toggle-menu-button"
          @click="toggleMenu"
        >
          <span
            class="size-5"
            :class="{ 'i-ph-list': !isMenuOpen, 'i-ph-x': isMenuOpen }"
          />
        </button>
      </div>
    </div>
  </header>
</template>
