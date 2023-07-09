<script lang="ts" setup>
import { Article, ArticleWithDate } from '@/types';

/**
 * 記事のリスト
 */
const articleList = ref<ArticleWithDate[]>([]);

/**
 * 記事のリストを取得します。
 */
const fetchArticleList = async (): Promise<ArticleWithDate[]> => {
  const { data: articleList } = await useAsyncData('article-list', () =>
    queryContent<Article>('articles')
      .sort({
        createdAt: -1,
      })
      .find()
  );

  if (!articleList.value) throw new Error('articleList is undefined');

  const result = (articleList as globalThis.Ref<Article[]>).value.map(
    (article) => {
      return {
        ...article,
        createdAt: new Date(article.createdAt),
        updatedAt: article.updatedAt ? new Date(article.updatedAt) : undefined,
      };
    }
  );

  if (!result) throw new Error('articleList is undefined');
  return result;
};

// 記事のリストを取得
articleList.value = await fetchArticleList();
</script>

<template>
  <TemplatesMainPage :article-list="articleList" />
</template>
