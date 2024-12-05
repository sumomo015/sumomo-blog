// @vitest-environment nuxt

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import { HomeBottom } from '#components'

describe('HomeBottom', () => {
  it('スナップショット', async () => {
    const wrapper = await mountSuspended(HomeBottom)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
