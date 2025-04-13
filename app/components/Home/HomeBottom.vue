<script setup lang="ts">
import { NuxtLink } from '#components'
</script>

<template>
  <div>
    <p class="mb-5">
      こんにちは、 <strong>スモモ</strong>です！
    </p>
    <p class="mb-5">
      東京でフロントエンドエンジニアとして、VueとNuxtに愛を注ぎながらコードと格闘する毎日を送っています。
      <br>
      このブログでは、開発中に出会った「なるほど！」や「詰まった…」をそのままシェア中。
    </p>
    <p class="mb-10">
      ちょっと役立つかもしれない、たまに深掘り、たまにゆるめ。
      <br>
      コーヒー片手に、ゆっくりしていってください ☕💻
    </p>

    <div class="flex justify-center">
      <NuxtLink
        to="/blog"
        :class="[
          'rounded-md px-3.5 py-2.5 font-medium',
          'text-sm text-(--ui-bg) bg-(--ui-primary)',
          'hover:opacity-60 transition-opacity duration-250',
        ]"
      >
        記事一覧へ
      </NuxtLink>
    </div>
  </div>
</template>
