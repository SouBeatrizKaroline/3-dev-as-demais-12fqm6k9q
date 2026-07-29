import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Início', section: 'hero' },
  { label: 'Sobre', section: 'quem-somos' },
  { label: 'Projetos', section: 'projetos' },
  { label: 'Conquistas', section: 'conquistas' },
  { label: 'Equipe', section: 'equipe' },
  { label: 'Contato', section: 'contato' },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.section)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isMainPage = location.pathname === '/'
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const goToSection = (section: string) => {
    setMobileMenuOpen(false)
    if (isMainPage) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/?scrollTo=${section}`)
    }
  }

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault()
    goToSection(section)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] flex items-center',
        scrolled
          ? 'bg-[#0a0b14]/85 backdrop-blur-md border-b border-violet-500/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2 group cursor-pointer shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7c3aed] to-[#c4b5fd] p-[1px] shadow-sm shadow-violet-500/30 group-hover:shadow-violet-500/60 transition-all">
            <div className="w-full h-full bg-[#0a0b14] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#a78bfa] group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white font-display">
            3 Dev.as <span className="neon-text-cyan">DemAIs</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => handleNavClick(e, link.section)}
              className={cn(
                'text-sm font-medium transition-colors relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#a78bfa] after:transition-all',
                isMainPage && activeSection === link.section
                  ? 'text-[#a78bfa] after:w-full'
                  : 'text-slate-300 hover:text-[#a78bfa] after:w-0 hover:after:w-full',
              )}
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => goToSection('contato')}
            className="gradient-btn text-xs font-semibold px-5 py-2 rounded-full cursor-pointer min-h-[44px]"
          >
            Falar Conosco
          </Button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-300 hover:text-white focus:outline-none cursor-pointer min-h-[44px] min-w-[44px]"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#a78bfa]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[70px] bg-[#0a0b14]/95 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 animate-fade-in overflow-y-auto"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-2 mt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.section}
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link.section)}
                className={cn(
                  'flex items-center text-lg font-semibold py-3 px-4 rounded-xl transition-colors',
                  isMainPage && activeSection === link.section
                    ? 'text-[#a78bfa] bg-[#8b5cf6]/5'
                    : 'text-slate-200 hover:text-[#a78bfa] hover:bg-white/5',
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-6 mt-auto">
            <Button
              onClick={() => goToSection('contato')}
              className="w-full gradient-btn py-3 rounded-xl font-bold text-sm min-h-[44px]"
            >
              Falar Conosco
            </Button>
            <p className="text-center text-xs text-slate-500 mt-4">
              3 Dev.as DemAIs • Pernambuco, Rio de Janeiro & DF
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
