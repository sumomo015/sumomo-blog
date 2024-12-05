<template>
  <div class="flex items-center justify-between sm:(flex-row-reverse)">
    <!-- left start -->
    <div>
      <h1 class="mb-2 text-4xl font-bold sm:text-center base-color-header">
        Sumomo
      </h1>

      <div class="flex gap-x-4">
        <NuxtLink
          to="https://github.com/sumomo015"
          target="_blank"
          external
          class="flex items-center gap-x-2 base-hover-opacity"
        >
          <div class="i-simple-icons-github size-5" />
          <div>GitHub</div>
        </NuxtLink>

        <NuxtLink
          to="https://bsky.app/profile/sumomo015.dev"
          target="_blank"
          external
          class="flex items-center gap-x-2 base-hover-opacity"
        >
          <div class="i-simple-icons-bluesky size-5" />
          <div>Bluesky</div>
        </NuxtLink>
      </div>
    </div>
    <!-- left end -->

    <!-- right start -->
    <NuxtImg
      class="size-24 sm:size-64"
      sizes="96px sm:256px"
      src="/icon.png"
      alt="Sumomo's icon"
    />
    <!-- right end -->
  </div>
</template>
