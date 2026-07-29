import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 h-12 px-3 sm:px-4 rounded-full gradient-btn font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in min-h-[44px]"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
      <span className="hidden sm:inline">Voltar ao topo</span>
    </button>
  )
}
