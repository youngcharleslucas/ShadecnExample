import { useEffect } from "react"

export const VERSIONS = Object.freeze({
  V0: '',
  V1: 'theme-v1',
  V2: 'theme-v2',
  V3: 'theme-v3'
})

export default function useVersion(className) {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const target = document.documentElement

    // Looks for the string value of VERSIONS, like theme-v1
    if (Object.values(VERSIONS).includes(className)) {
      target.classList.add(className)
    }
    return () => {
      target.classList.remove(className)
    }
  }, [className])
}
