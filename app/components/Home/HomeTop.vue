<template>
  <div class="flex items-center justify-between sm:flex-row-reverse">
    <!-- left start -->
    <div>
      <h1 class="mb-2 text-4xl font-bold sm:text-center text-(--ui-text-highlighted)">
        Sumomo
      </h1>

      <div class="flex gap-x-4">
        <NuxtLink
          to="https://github.com/sumomo015"
          target="_blank"
          external
          class="flex items-center gap-x-2 hover:opacity-60 transition-opacity duration-250"
        >
          <UIcon
            name="i-simple-icons-github"
            class="size-5"
          />
          <div>GitHub</div>
        </NuxtLink>

        <NuxtLink
          to="https://bsky.app/profile/sumomo015.com"
          target="_blank"
          external
          class="flex items-center gap-x-2 hover:opacity-60 transition-opacity duration-250"
        >
          <UIcon
            name="i-simple-icons-bluesky"
            class="size-5"
          />
          <div>Bluesky</div>
        </NuxtLink>
      </div>
    </div>
    <!-- left end -->

    <!-- right start -->
    <NuxtImg
      class="size-24 sm:size-64"
      sizes="96px sm:256px"
      src="/images/icon.png"
      alt="Sumomo's icon"
    />
    <!-- right end -->
  </div>
</template>
