import { useState } from 'react'
import { Mail, Linkedin, Github, MessageSquare, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactFormModal } from '@/components/ContactFormModal'

export function CtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="contato" className="py-28 bg-[#0f0f1a] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00f0ff]/10 via-[#b300ff]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#14142b] to-[#0a0a14] p-8 md:p-14 rounded-3xl border border-cyan-500/30 text-center shadow-2xl shadow-cyan-950/40">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-xs font-bold text-[#00f0ff] mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Vamos Inovar Juntos</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display leading-tight mb-6">
            Vamos construir a próxima <span className="gradient-heading">solução juntos?</span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Estamos sempre abertas a novos desafios, colaborações, hackathons, projetos de
            inteligência artificial, pesquisas, parcerias e oportunidades de inovação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto gradient-btn font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Entrar em Contato</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <a
              href="https://www.linkedin.com/in/beatrizkaroline/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto glass-card hover:bg-white/10 text-white border-white/20 hover:border-[#00f0ff] font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Linkedin className="w-4 h-4 text-[#00f0ff]" />
                <span>LinkedIn da Equipe</span>
              </Button>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="ghost"
                className="w-full sm:w-auto text-slate-300 hover:text-white hover:bg-white/5 font-bold px-6 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <ContactFormModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
