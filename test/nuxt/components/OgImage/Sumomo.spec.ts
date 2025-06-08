// @vitest-environment nuxt

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import OgImageSumomo from '~/components/OgImage/Sumomo.vue'

describe('OgImageSumomo', () => {
  const selectorTitle = '[data-testid="title"]'
  const selectorDescription = '[data-testid="description"]'
  const selectorAuthor = '[data-testid="author"]'

  it('タイトルが表示されること', async () => {
    const wrapper = await mountSuspended(OgImageSumomo, {
      props: { title: 'Test Title' },
    })
    expect(wrapper.find(selectorTitle).text()).toBe('Test Title')
  })

  it('説明が表示されること', async () => {
    const wrapper = await mountSuspended(OgImageSumomo, {
      props: { description: 'Test Description' },
    })
    expect(wrapper.find(selectorDescription).text()).toBe('Test Description')
  })

  it('説明が渡されない場合は表示されないこと', async () => {
    const wrapper = await mountSuspended(OgImageSumomo)
    expect(wrapper.find(selectorDescription).exists()).toBe(false)
  })

  it('署名が表示されること', async () => {
    const wrapper = await mountSuspended(OgImageSumomo)
    expect(wrapper.find(selectorAuthor).text()).toBe('スモモ')
  })

  it('スナップショット', async () => {
    const wrapper = await mountSuspended(OgImageSumomo, {
      props: {
        title: 'Test Title',
        description: 'Test Description',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
