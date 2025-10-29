<template>
  <code
    :class="[
      'px-1.5 py-1 rounded-md text-sm font-bold',
      'text-highlighted',
      'border border-muted',
      'bg-elevated',
    ]"
  >
    <slot />
  </code>
</template>
