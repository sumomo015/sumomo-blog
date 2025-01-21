// @vitest-environment nuxt
import { describe, it, expect, afterEach, vi } from 'vitest'
import { useAnchorLinks } from './useAnchorLinks'
import { useRuntimeConfig } from '#app'

vi.mock('#app', () => ({
  useRuntimeConfig: vi.fn(),
}))

describe('useAnchorLinks', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('`headings`が`undefined`の場合、全ての見出しにアンカーリンクを生成しない', () => {
    vi.mocked(useRuntimeConfig).mockReturnValue({
      public: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mdc: {},
      },
    })

    const { generateInfo, h1, h2, h3, h4, h5, h6 } = useAnchorLinks()
    expect(generateInfo.value).toEqual({ h1: false, h2: false, h3: false, h4: false, h5: false, h6: false })
    expect(h1.value).toBe(false)
    expect(h2.value).toBe(false)
    expect(h3.value).toBe(false)
    expect(h4.value).toBe(false)
    expect(h5.value).toBe(false)
    expect(h6.value).toBe(false)
  })

  it('`anchorLinks`が`true`の場合、全ての見出しにアンカーリンクを生成する', () => {
    vi.mocked(useRuntimeConfig).mockReturnValue({
      public: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mdc: {
          headings: {
            anchorLinks: true,
          },
        },
      },
    })

    const { generateInfo, h1, h2, h3, h4, h5, h6 } = useAnchorLinks()
    expect(generateInfo.value).toEqual({ h1: true, h2: true, h3: true, h4: true, h5: true, h6: true })
    expect(h1.value).toBe(true)
    expect(h2.value).toBe(true)
    expect(h3.value).toBe(true)
    expect(h4.value).toBe(true)
    expect(h5.value).toBe(true)
    expect(h6.value).toBe(true)
  })

  it('`anchorLinks`が`object`の場合、指定された見出しにのみアンカーリンクを生成する', () => {
    vi.mocked(useRuntimeConfig).mockReturnValue({
      public: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mdc: {
          headings: {
            anchorLinks: {
              h1: true,
              h2: false,
              h3: true,
              h4: false,
              h5: true,
              h6: false,
            },
          },
        },
      },
    })

    const { generateInfo, h1: h1_1, h2: h2_1, h3: h3_1, h4: h4_1, h5: h5_1, h6: h6_1 } = useAnchorLinks()
    expect(generateInfo.value).toEqual({ h1: true, h2: false, h3: true, h4: false, h5: true, h6: false })
    expect(h1_1.value).toBe(true)
    expect(h2_1.value).toBe(false)
    expect(h3_1.value).toBe(true)
    expect(h4_1.value).toBe(false)
    expect(h5_1.value).toBe(true)
    expect(h6_1.value).toBe(false)

    vi.mocked(useRuntimeConfig).mockReturnValue({
      public: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mdc: {
          headings: {
            anchorLinks: {
              h1: false,
              h2: true,
              h3: false,
              h4: true,
              h5: false,
              h6: true,
            },
          },
        },
      },
    })

    const { generateInfo: generateInfo2, h1: h1_2, h2: h2_2, h3: h3_2, h4: h4_2, h5: h5_2, h6: h6_2 } = useAnchorLinks()
    expect(generateInfo2.value).toEqual({ h1: false, h2: true, h3: false, h4: true, h5: false, h6: true })
    expect(h1_2.value).toBe(false)
    expect(h2_2.value).toBe(true)
    expect(h3_2.value).toBe(false)
    expect(h4_2.value).toBe(true)
    expect(h5_2.value).toBe(false)
    expect(h6_2.value).toBe(true)

    vi.mocked(useRuntimeConfig).mockReturnValue({
      public: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mdc: {
          headings: {
            anchorLinks: {
              h1: undefined,
              h2: undefined,
              h3: undefined,
              h4: undefined,
              h5: undefined,
              h6: undefined,
            },
          },
        },
      },
    })

    const { generateInfo: generateInfo3, h1: h1_3, h2: h2_3, h3: h3_3, h4: h4_3, h5: h5_3, h6: h6_3 } = useAnchorLinks()
    expect(generateInfo3.value).toEqual({ h1: false, h2: false, h3: false, h4: false, h5: false, h6: false })
    expect(h1_3.value).toBe(false)
    expect(h2_3.value).toBe(false)
    expect(h3_3.value).toBe(false)
    expect(h4_3.value).toBe(false)
    expect(h5_3.value).toBe(false)
    expect(h6_3.value).toBe(false)
  })

  it('`anchorLinks`が`false`の場合、全ての見出しにアンカーリンクを生成しない', () => {
    vi.mocked(useRuntimeConfig).mockReturnValue({
      public: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mdc: {
          headings: {
            anchorLinks: false,
          },
        },
      },
    })

    const { generateInfo, h1, h2, h3, h4, h5, h6 } = useAnchorLinks()
    expect(generateInfo.value).toEqual({ h1: false, h2: false, h3: false, h4: false, h5: false, h6: false })
    expect(h1.value).toBe(false)
    expect(h2.value).toBe(false)
    expect(h3.value).toBe(false)
    expect(h4.value).toBe(false)
    expect(h5.value).toBe(false)
    expect(h6.value).toBe(false)
  })
})
