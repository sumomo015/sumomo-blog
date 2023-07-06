<template>
  <div class="flex min-h-full flex-col">
    <LayoutsCommonHeader />
    <main class="flex-shrink-0 flex-grow">
      <slot />
    </main>
    <LayoutsCommonFooter />
  </div>
</template>
