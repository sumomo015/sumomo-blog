// @vitest-environment nuxt

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import { HomeTop } from '#components'

describe('HomeTop', () => {
  it('スナップショット', async () => {
    const wrapper = await mountSuspended(HomeTop)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
