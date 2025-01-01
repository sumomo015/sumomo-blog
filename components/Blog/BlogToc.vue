<script setup lang="ts">
import type { TocLink } from '@nuxt/content'

const props = defineProps<{ links: TocLink[] }>()

const visibleIds = ref<string[]>([])
const tocIds = computed(() => {
  const ids: string[] = []
  props.links.forEach((link) => {
    ids.push(link.id)
    link.children?.forEach((child) => {
      ids.push(child.id)
    })
  })
  return ids
})

function observeElements(ids: string[]) {
  ids.forEach((id) => {
    const element = document.getElementById(id)
    if (element) observer?.observe(element)
  })
}

watch(tocIds, (ids) => {
  observer?.disconnect()
  visibleIds.value = []
  observeElements(ids)
})
onMounted(() => {
  observeElements(tocIds.value)
})
onUnmounted(() => {
  observer?.disconnect()
})

const observer: IntersectionObserver | undefined = !import.meta.server
  ? new IntersectionObserver((entries) => {
    const newVisibleIds: string[] = [...visibleIds.value]

    entries.forEach((entry) => {
      if (entry.isIntersecting && !newVisibleIds.includes(entry.target.id)) {
        newVisibleIds.push(entry.target.id)
      }
      else if (!entry.isIntersecting && newVisibleIds.includes(entry.target.id)) {
        newVisibleIds.splice(newVisibleIds.indexOf(entry.target.id), 1)
      }
    })

    visibleIds.value = newVisibleIds
  }, { rootMargin: '-64px 0px 0px 0px' })
  : undefined
</script>

<template>
  <nav
    aria-label="目次"
    class="py-8"
  >
    <p class="mb-3 truncate text-sm/6 font-semibold">
      目次
    </p>

    <ul>
      <li
        v-for="link in links"
        :key="link.id"
        class="my-1"
      >
        <NuxtLink
          :to="{ hash: `#${link.id}` }"
          class="block truncate text-sm/6 base-hover-opacity"
          :class="{
            'base-color-link': visibleIds.includes(link.id),
            'base-color-secondary': !visibleIds.includes(link.id),
          }"
        >
          {{ link.text }}
        </NuxtLink>

        <ul>
          <li
            v-for="child in link.children"
            :key="child.id"
            class="my-1 ml-3"
          >
            <NuxtLink
              :to="{ hash: `#${child.id}` }"
              class="block truncate text-sm/6 base-hover-opacity"
              :class="{
                'base-color-link': visibleIds.includes(child.id),
                'base-color-secondary': !visibleIds.includes(child.id),
              }"
            >
              {{ child.text }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
