// @vitest-environment nuxt

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import { ProseA, ProsePre, ProseCode, ProseH1, ProseH2, ProseH3, ProseLi, ProseP, ProseUl } from '#components'

describe('Prose', () => {
  it('ProseA', async () => {
    const wrapper = await mountSuspended(ProseA, {
      props: { href: 'https://example.com' },
      slots: { default: 'リンク' },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('a').attributes('href')).toBe('https://example.com')
    expect(wrapper.find('a').attributes('target')).toBe('_blank')

    await wrapper.setProps({ href: '/test' })
    expect(wrapper.find('a').attributes('href')).toBe('/test')
    expect(wrapper.find('a').attributes('target')).toBeUndefined()
  })

  it('ProseCode', async () => {
    const wrapper = await mountSuspended(ProseCode, {
      slots: { default: 'インラインコード' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ProseH1', async () => {
    const wrapper = await mountSuspended(ProseH1, {
      slots: { default: '見出し1' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ProseH2', async () => {
    const wrapper = await mountSuspended(ProseH2, {
      slots: { default: '見出し2' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ProseH3', async () => {
    const wrapper = await mountSuspended(ProseH3, {
      slots: { default: '見出し3' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ProseLi', async () => {
    const wrapper = await mountSuspended(ProseLi, {
      slots: { default: 'リストアイテム' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ProseP', async () => {
    const wrapper = await mountSuspended(ProseP, {
      slots: { default: '段落' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ProsePre', async () => {
    const wrapper = await mountSuspended(ProsePre, {
      slots: { default: 'コードブロック' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ProseUl', async () => {
    const wrapper = await mountSuspended(ProseUl, {
      slots: { default: 'リスト' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
