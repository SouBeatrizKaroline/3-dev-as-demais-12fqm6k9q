import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'História', href: '#historia' },
  { label: 'Estatísticas', href: '#estatisticas' },
  { label: 'Filosofia', href: '#filosofia' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] flex items-center ${
        scrolled
          ? 'bg-[#0f0f1a]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f0ff] to-[#b300ff] p-[1px] shadow-sm shadow-cyan-500/30 group-hover:shadow-cyan-500/60 transition-all">
            <div className="w-full h-full bg-[#0f0f1a] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#00f0ff] group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white font-display">
            3 Dev.as <span className="neon-text-cyan">DemAIs</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-[#00f0ff] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00f0ff] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => {
              const el = document.querySelector('#contato')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="gradient-btn text-xs font-semibold px-5 py-2 rounded-full cursor-pointer"
          >
            Falar Conosco
          </Button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00f0ff]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-[#0f0f1a]/95 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-between p-6 animate-fade-in">
          <div className="flex flex-col gap-4 mt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="flex items-center justify-between text-lg font-semibold text-slate-200 hover:text-[#00f0ff] border-b border-white/5 pb-3 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-5 h-5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <Button
              onClick={() => {
                setMobileMenuOpen(false)
                document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full gradient-btn py-3 rounded-xl font-bold text-sm"
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
