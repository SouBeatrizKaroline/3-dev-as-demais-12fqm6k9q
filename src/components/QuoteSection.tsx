import { Quote } from 'lucide-react'

export function QuoteSection() {
  return (
    <section
      id="depoimento"
      className="py-20 bg-gradient-to-r from-[#11122a] via-[#0a0b14] to-[#11122a] border-y border-violet-500/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <Quote className="w-12 h-12 text-[#a78bfa] opacity-60 mx-auto mb-6" />
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed font-display tracking-tight">
          "Não acreditamos que inovação acontece apenas dentro das empresas. Ela nasce quando
          pessoas curiosas, diversas e comprometidas resolvem construir juntas."
        </blockquote>
        <p className="text-base font-bold text-[#a78bfa] mt-6 tracking-wider uppercase font-mono">
          — 3 Dev.as DemAIs
        </p>
      </div>
    </section>
  )
}
