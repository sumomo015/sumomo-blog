// @vitest-environment nuxt

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import { LayoutsHeader } from '#components'

describe('LayoutsHeader', () => {
  const selectorToogleButton = '[data-testid="toggle-color-scheme-button"]'
  const selectorMenuButton = '[data-testid="toggle-menu-button"]'

  it('スナップショット', async () => {
    const wrapperDark = await mountSuspended(LayoutsHeader, {
      props: { isDarkMode: true },
    })
    expect(wrapperDark.html()).toMatchSnapshot('dark')

    const wrapperLight = await mountSuspended(LayoutsHeader, {
      props: { isDarkMode: false },
    })
    expect(wrapperLight.html()).toMatchSnapshot('light')
  })

  it('カラー切り替えイベントが発火されること', async () => {
    const wrapper = await mountSuspended(LayoutsHeader, {
      props: { isDarkMode: true },
    })
    await wrapper.find(selectorToogleButton).trigger('click')
    expect(wrapper.emitted('toggleColorScheme')).toBeTruthy()
  })

  it('メニュー切り替えイベントが発火されること', async () => {
    const wrapper = await mountSuspended(LayoutsHeader, {
      props: { isDarkMode: true },
    })
    await wrapper.find(selectorMenuButton).trigger('click')
    expect(wrapper.emitted('toggleMenu')?.[0]).toEqual([true])
    await wrapper.find(selectorMenuButton).trigger('click')
    expect(wrapper.emitted('toggleMenu')?.[1]).toEqual([false])
  })
})
