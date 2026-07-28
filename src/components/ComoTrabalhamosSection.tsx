import { useInView } from '@/hooks/use-in-view'
import { Handshake } from 'lucide-react'

export function ComoTrabalhamosSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="como-trabalhamos"
      ref={ref}
      className="py-20 sm:py-24 bg-[#0a0a12] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30 flex items-center gap-1.5">
              <Handshake className="w-3.5 h-3.5" />
              Como Trabalhamos
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Colaboração sem <span className="gradient-heading">hierarquia</span>
          </h2>
          <p
            className={`text-slate-300 text-base sm:text-lg leading-relaxed mt-6 transition-all duration-700 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Acreditamos que inovação acontece através da colaboração. Cada integrante possui
            competências complementares, permitindo que diferentes perspectivas se encontrem para
            criar soluções mais completas, criativas e viáveis. Não trabalhamos com hierarquia
            técnica. Trabalhamos com confiança, autonomia e construção coletiva.
          </p>
        </div>
      </div>
    </section>
  )
}
