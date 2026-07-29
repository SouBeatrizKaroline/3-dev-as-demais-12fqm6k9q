import { useState, useRef, useEffect } from 'react'

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<any>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const checkVisible = () => {
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsInView(true)
        return true
      }
      return false
    }

    if (checkVisible()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px', ...options },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
