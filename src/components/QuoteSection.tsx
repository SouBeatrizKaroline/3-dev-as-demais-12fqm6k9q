import { Quote } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

export function QuoteSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="depoimento"
      className="py-20 bg-gradient-to-r from-[#11122a] via-[#0a0b14] to-[#11122a] border-y border-violet-500/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-center">
        <div
          ref={ref}
          className={`relative max-w-2xl w-full md:w-[65%] transition-all duration-700 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative glass-card rounded-2xl p-8 md:p-10 border-l-2 border-l-violet-500/60 overflow-hidden">
            <Quote className="absolute top-4 left-4 w-16 h-16 text-[#a78bfa] opacity-[0.15] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed font-display tracking-tight text-center md:text-left">
                "A inovação floresce onde diferentes perspectivas se encontram. É da colaboração
                entre pessoas curiosas, diversas e comprometidas que surgem as soluções capazes de{' '}
                <span className="text-rose-400">gerar impacto real</span>."
              </p>
              <p className="text-sm font-medium text-[#a78bfa] mt-6 tracking-wider uppercase font-mono opacity-75 text-center md:text-left">
                — 3 Dev.as DemAIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
