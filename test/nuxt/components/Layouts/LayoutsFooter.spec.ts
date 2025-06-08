// @vitest-environment nuxt

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import { LayoutsFooter } from '#components'

describe('LayoutsFooter', () => {
  it('スナップショット', async () => {
    const wrapper = await mountSuspended(LayoutsFooter, {
      props: { year: 2024 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('年が正しく表示されること', async () => {
    const year = new Date().getFullYear()

    const wrapper = await mountSuspended(LayoutsFooter, {
      props: { year },
    })
    expect(wrapper.text()).toContain(year)
  })
})
