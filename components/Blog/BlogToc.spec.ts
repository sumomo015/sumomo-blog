// @vitest-environment nuxt
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import type { TocLink } from '@nuxt/content'
import { BlogToc } from '#components'

interface Section {
  id: string
  title: string
  depth: number
  selector: string
  element: Element
}

const section1: Section = {
  id: 'section1',
  title: 'Section 1',
  depth: 1,
  selector: 'a[href="/#section1"]',
  element: { id: 'section1' } as Element,
}
const subsection1: Section = {
  id: 'subsection1',
  title: 'Subsection 1',
  depth: 2,
  selector: 'a[href="/#subsection1"]',
  element: { id: 'subsection1' } as Element,
}
const subsection2: Section = {
  id: 'subsection2',
  title: 'Subsection 2',
  depth: 2,
  selector: 'a[href="/#subsection2"]',
  element: { id: 'subsection2' } as Element,
}
const section2: Section = {
  id: 'section2',
  title: 'Section 2',
  depth: 1,
  selector: 'a[href="/#section2"]',
  element: { id: 'section2' } as Element,
}

const LINK_CLASS = 'base-color-link'

const links: TocLink[] = [
  { text: section1.title, depth: 1, id: section1.id, children: [
    { text: subsection1.title, depth: 2, id: subsection1.id },
    { text: subsection2.title, depth: 2, id: subsection2.id },
  ] },
  { text: section2.title, depth: 1, id: section2.id },
]

describe('BlogToc', () => {
  let observerCallback: (entries: IntersectionObserverEntry[]) => void

  beforeEach(() => {
    class MockIntersectionObserver implements IntersectionObserver {
      readonly root: Document | Element | null
      readonly rootMargin: string
      readonly thresholds: number[]

      private observeredElements: Element[] = []

      disconnect = () => {
        this.observeredElements = []
      }

      observe = (target: Element) => {
        this.observeredElements.push(target)
      }

      takeRecords = vi.fn()
      unobserve = vi.fn()

      constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
        observerCallback = (entries: IntersectionObserverEntry[]) => {
          callback(entries, this)
        }
        this.root = options?.root ?? null
        this.rootMargin = options?.rootMargin ?? ''
        this.thresholds = options?.threshold ? [options.threshold].flat() : []
      }
    }

    vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver)
    document.getElementById = vi.fn().mockImplementation((id: string) => ({ id }))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('正常にレンダリングされること', async () => {
    const wrapper = await mountSuspended(BlogToc, { props: { links } })
    expect(wrapper.find('p').text()).toBe('目次')
    expect(wrapper.find(section1.selector).text()).toBe(section1.title)
    expect(wrapper.find(subsection1.selector).text()).toBe(subsection1.title)
    expect(wrapper.find(subsection2.selector).text()).toBe(subsection2.title)
    expect(wrapper.find(section2.selector).text()).toBe(section2.title)
    wrapper.unmount()
  })

  it('headings要素が表示された時に、目次の色が変わること', async () => {
    const wrapper = await mountSuspended(BlogToc, { props: { links } })
    observerCallback([{ isIntersecting: true, target: section1.element } as IntersectionObserverEntry])
    await nextTick()
    expect(wrapper.find(section1.selector).classes()).toContain(LINK_CLASS)
  })

  it('headings要素が消えた時に、目次の色が戻ること', async () => {
    const wrapper = await mountSuspended(BlogToc, { props: { links } })
    observerCallback([{ isIntersecting: true, target: section1.element } as IntersectionObserverEntry])
    await nextTick()
    expect(wrapper.find(section1.selector).classes()).toContain(LINK_CLASS)

    observerCallback([{ isIntersecting: false, target: section1.element } as IntersectionObserverEntry])
    await nextTick()
    expect(wrapper.find(section1.selector).classes()).not.toContain(LINK_CLASS)
  })

  it('linksが変わった時に、目次の色の動作が正しいこと', async () => {
    const wrapper = await mountSuspended(BlogToc, { props: { links } })
    observerCallback([{ isIntersecting: true, target: section1.element } as IntersectionObserverEntry])
    await nextTick()
    expect(wrapper.find(section1.selector).classes()).toContain(LINK_CLASS)

    await wrapper.setProps({ links: [{ text: 'Section 1', depth: 1, id: 'section1' }] })
    expect(wrapper.find(section1.selector).classes()).not.toContain(LINK_CLASS)

    observerCallback([{ isIntersecting: true, target: section1.element } as IntersectionObserverEntry])
    await nextTick()
    expect(wrapper.find(section1.selector).classes()).toContain(LINK_CLASS)

    observerCallback([{ isIntersecting: false, target: section1.element } as IntersectionObserverEntry])
    await nextTick()
    expect(wrapper.find(section1.selector).classes()).not.toContain(LINK_CLASS)
  })

  it('スナップショット', async () => {
    const wrapper = await mountSuspended(BlogToc, { props: { links } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
