<template>
  <code
    :class="[
      'px-1.5 py-1 rounded-md text-sm font-semibold',
      'base-color-header',
      'border-1 border-gray-200 dark:border-gray-700',
      'bg-gray-100 dark:bg-gray-800',
    ]"
  >
    <slot />
  </code>
</template>
