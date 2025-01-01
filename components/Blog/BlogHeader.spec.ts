// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { BlogHeader } from '#components'
import type { Article } from '~/shared/types/content'

describe('BlogHeader', () => {
  const article: Article = {
    _type: 'markdown',
    _empty: false,
    _id: 'test-article',
    title: 'Test Article',
    description: 'This is a test article',
    body: {
      type: 'root',
      children: [],
    },
    datePublished: '2023-01-01',
    dateModified: '2023-01-02',
  }

  it('正常にレンダリングされること', async () => {
    const wrapper = await mountSuspended(BlogHeader, {
      props: { article },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('タイトルが表示されること', async () => {
    const wrapper = await mountSuspended(BlogHeader, {
      props: { article },
    })
    expect(wrapper.find('h1').text()).toBe('Test Article')
  })

  it('投稿日が表示されること', async () => {
    const wrapper = await mountSuspended(BlogHeader, {
      props: { article },
    })
    const timeElement = wrapper.find('time')
    expect(timeElement.exists()).toBe(true)
    expect(timeElement.text()).toContain('投稿日 2023-01-01')
  })

  it('投稿日がない場合、表示されないこと', async () => {
    const wrapper = await mountSuspended(BlogHeader, {
      props: { article: { ...article, datePublished: undefined } },
    })
    const timeElements = wrapper.findAll('time')
    expect(timeElements.length).toBe(1)
    expect(timeElements[0]?.text()).not.toContain('投稿日')
  })

  it('最終更新日が表示されること', async () => {
    const wrapper = await mountSuspended(BlogHeader, {
      props: { article },
    })
    const timeElements = wrapper.findAll('time')
    expect(timeElements.length).toBe(2)
    expect(timeElements[1]?.text()).toContain('最終更新日 2023-01-02')
  })

  it('最終更新日がない場合、表示されないこと', async () => {
    const wrapper = await mountSuspended(BlogHeader, {
      props: { article: { ...article, dateModified: undefined } },
    })
    const timeElements = wrapper.findAll('time')
    expect(timeElements.length).toBe(1)
    expect(timeElements[0]?.text()).not.toContain('最終更新日')
  })
})
