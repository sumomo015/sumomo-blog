<template>
  <div>
    <p class="mb-5">
      こんにちは！<strong>スモモ</strong>と申します。私のブログにお越しいただきありがとうございます。
    </p>
    <p class="mb-5">
      現在、東京でフロントエンドエンジニアとして働いており、VueやNuxtを使った開発が大好きです。
    </p>
    <p class="mb-10">
      このブログでは、日々の学びや経験をシェアしていきたいと思います。どうぞゆっくりご覧ください！
    </p>

    <div class="flex justify-center">
      <NuxtLink
        to="/blog"
        class="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm text-white dark:bg-sky-400 dark:text-gray-900 base-hover-opacity"
      >
        記事一覧へ
      </NuxtLink>
    </div>
  </div>
</template>
