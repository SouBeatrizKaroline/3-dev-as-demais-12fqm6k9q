import { useEffect, useState } from 'react'

export function useAnimatedCounter(endValue: number, trigger: boolean, duration: number = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easeOutQuad = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(easeOutQuad * endValue))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(endValue)
      }
    }

    window.requestAnimationFrame(step)
  }, [endValue, trigger, duration])

  return count
}
