<template>
  <code
    :class="[
      'px-1.5 py-1 rounded-md text-sm font-bold',
      'text-(--ui-text-highlighted)',
      'border-1 border-(--ui-border-muted)',
      'bg-(--ui-bg-elevated)',
    ]"
  >
    <slot />
  </code>
</template>
