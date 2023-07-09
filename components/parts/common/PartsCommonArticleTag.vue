<script lang="ts" setup>
const props = defineProps<{
  tag: string;
  hasLink?: boolean;
}>();

const tagsMap = getTagMap();

const tagStr = tagsMap.get(props.tag) ?? props.tag;
</script>

<template>
  <NuxtLink
    v-if="props.hasLink"
    :to="`/tags/${props.tag}`"
    class="inline-block cursor-pointer rounded-lg border border-zinc-400 border-opacity-50 px-2.5 py-0.5 text-sm text-primary dark:border-zinc-300 dark:border-opacity-50"
  >
    {{ tagStr }}
  </NuxtLink>
  <span
    v-else
    class="inline-block rounded-lg border border-zinc-400 border-opacity-50 px-2.5 py-0.5 text-sm text-primary dark:border-zinc-300 dark:border-opacity-50"
  >
    {{ tagStr }}
  </span>
</template>
