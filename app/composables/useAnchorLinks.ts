import { useRuntimeConfig } from '#app'

interface GenerateInfo {
  h1: boolean
  h2: boolean
  h3: boolean
  h4: boolean
  h5: boolean
  h6: boolean
}

export function useAnchorLinks(): {
  generateInfo: globalThis.ComputedRef<GenerateInfo>
  h1: ComputedRef<boolean>
  h2: ComputedRef<boolean>
  h3: ComputedRef<boolean>
  h4: ComputedRef<boolean>
  h5: ComputedRef<boolean>
  h6: ComputedRef<boolean>
} {
  const { headings } = useRuntimeConfig().public.mdc

  const generateInfo = computed<GenerateInfo>(() => {
    if (!headings)
      return { h1: false, h2: false, h3: false, h4: false, h5: false, h6: false }

    if (typeof headings.anchorLinks === 'boolean' && headings.anchorLinks) {
      return { h1: true, h2: true, h3: true, h4: true, h5: true, h6: true }
    }

    if (typeof headings.anchorLinks === 'object') {
      return {
        h1: headings.anchorLinks.h1 ?? false,
        h2: headings.anchorLinks.h2 ?? false,
        h3: headings.anchorLinks.h3 ?? false,
        h4: headings.anchorLinks.h4 ?? false,
        h5: headings.anchorLinks.h5 ?? false,
        h6: headings.anchorLinks.h6 ?? false,
      }
    }

    return { h1: false, h2: false, h3: false, h4: false, h5: false, h6: false }
  })

  return {
    generateInfo,
    h1: computed(() => generateInfo.value.h1),
    h2: computed(() => generateInfo.value.h2),
    h3: computed(() => generateInfo.value.h3),
    h4: computed(() => generateInfo.value.h4),
    h5: computed(() => generateInfo.value.h5),
    h6: computed(() => generateInfo.value.h6),
  }
}
