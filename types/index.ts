import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

/**
 * ナビゲーション項目
 * @property name ナビゲーションの名前
 * @property path ナビゲーションのパス
 */
export interface Navigation {
  name: string;
  path: string;
}

/**
 * カスタム記事
 * @property createdAt 記事の作成日
 * @property updatedAt 記事の更新日
 * @property tags 記事のタグ
 */
export interface Article extends MarkdownParsedContent {
  createdAt: string;
  updatedAt?: string;
  tags: string[];
}

/**
 * カスタム記事 (Date)
 * @property createdAt 記事の作成日
 * @property updatedAt 記事の更新日
 * @property tags 記事のタグ
 */
export interface ArticleWithDate extends MarkdownParsedContent {
  createdAt: Date;
  updatedAt?: Date;
  tags: string[];
}
