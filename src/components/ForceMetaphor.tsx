import { useInView } from '@/hooks/use-in-view'

const CIRCLES = [
  {
    name: 'Beatriz',
    items: ['Produto', 'UX', 'Estratégia', 'Multidisciplinaridade'],
    border: 'border-cyan-500/50',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    position: 'left-[28%] top-[5%]',
  },
  {
    name: 'Monique',
    items: ['IA', 'Dados', 'LLMs', 'Cloud'],
    border: 'border-purple-500/50',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    position: 'left-[72%] top-[5%]',
  },
  {
    name: 'Sonia',
    items: ['Full Stack', 'Frontend', 'Backend', 'Arquitetura'],
    border: 'border-emerald-500/50',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    position: 'left-[50%] top-[52%]',
  },
]

export function ForceMetaphor() {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className="w-full py-16 px-4 rounded-3xl border border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0f0f1a] via-[#14142b] to-[#0f0f1a] my-12"
    >
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
          Sinergia em Ação
        </span>
        <h3 className="text-2xl md:text-4xl font-extrabold text-white mt-4 font-display">
          Três especialidades. <span className="gradient-heading">Uma equipe.</span>
        </h3>
      </div>

      <div className="relative w-full max-w-xl mx-auto h-[340px] sm:h-[400px] md:h-[440px]">
        {CIRCLES.map((circle, i) => (
          <div
            key={circle.name}
            className={`absolute ${circle.position} -translate-x-1/2 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-2 ${circle.border} ${circle.bg} backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-4 text-center transition-opacity duration-700 ease-out`}
            style={{
              transitionDelay: `${i * 200}ms`,
              opacity: isInView ? 1 : 0,
            }}
          >
            <p className={`text-sm sm:text-base font-bold ${circle.text} mb-2`}>{circle.name}</p>
            {circle.items.map((item) => (
              <p key={item} className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div
        className="text-center mt-6 transition-opacity duration-700"
        style={{
          transitionDelay: '600ms',
          opacity: isInView ? 1 : 0,
        }}
      >
        <h4 className="text-2xl md:text-3xl font-black text-white font-display">3 Dev.as DemAIs</h4>
        <p className="text-sm text-slate-400 mt-2 max-w-md mx-auto px-4">
          Diferentes especialidades. Um único objetivo: construir soluções de alto impacto.
        </p>
      </div>
    </div>
  )
}
