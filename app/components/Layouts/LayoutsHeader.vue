<script setup lang="ts">
import { NuxtLink, UIcon, ClientOnly } from '#components'

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
const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

const navLinks: NavLink[] = [
  { to: '/', text: 'Home', icon: 'i-ph-house' },
  { to: '/blog', text: 'Blog', icon: 'i-ph-newspaper' },
]
const navLinkBaseClass: string[] = [
  'font-bold transition-colors',
  'hover:text-(--ui-primary)',
]
const navLinkActiveClass = 'text-(--ui-primary)'

watch(isMenuOpen, (isOpen) => {
  emit('toggleMenu', isOpen)
})
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

function handleToggleColorScheme(): void {
  emit('toggleColorScheme')
}
</script>

<template>
  <header class="bg-(--ui-bg) border-b-1 border-(--ui-border)">
    <div class="flex items-center p-4 pl-6 xl:mx-auto xl:w-7xl lg:px-8">
      <NuxtLink
        to="/"
        class="font-bold text-(--ui-text-highlighted) hover:opacity-60 transition-opacity duration-250"
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
        class="fixed inset-0 top-16 border-t-1 border-(--ui-border) bg-(--ui-bg) px-4 lg:hidden sm:px-6"
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
          <UIcon
            :name="link.icon"
            class="size-5 flex-shrink-0"
          />
          <span>{{ link.text }}</span>
        </NuxtLink>
      </nav>
      <!-- mobile menu -->

      <div class="flex gap-x-1.5">
        <NuxtLink
          class="size-8 flex items-center justify-center rounded-md hover:bg-(--ui-bg-elevated) transition-colors"
          to="https://github.com/sumomo015"
          target="_blank"
          external
          aria-label="Go to GitHub"
        >
          <UIcon
            name="i-simple-icons-github"
            class="size-5"
          />
        </NuxtLink>

        <button
          class="size-8 flex items-center justify-center rounded-md duration-none hover:bg-(--ui-bg-elevated) transition-colors cursor-pointer"
          type="button"
          aria-label="Toggle dark mode"
          data-testid="toggle-color-scheme-button"
          @click="handleToggleColorScheme"
        >
          <ClientOnly>
            <UIcon
              :name="isDarkMode ? 'i-ph-moon' : 'i-ph-sun'"
              class="size-5"
            />
          </ClientOnly>
        </button>

        <button
          class="size-8 flex items-center justify-center rounded-md lg:hidden hover:bg-(--ui-bg-elevated) transition-colors cursor-pointer"
          type="button"
          aria-label="Toggle navigation menu"
          data-testid="toggle-menu-button"
          @click="toggleMenu"
        >
          <UIcon
            :name="isMenuOpen ? 'i-ph-x' : 'i-ph-list'"
            class="size-5"
          />
        </button>
      </div>
    </div>
  </header>
</template>
