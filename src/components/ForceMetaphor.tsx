import { useInView } from '@/hooks/use-in-view'

const CIRCLES = [
  {
    name: 'Beatriz',
    label: 'Produto',
    items: ['UX', 'Estratégia', 'Design'],
    border: 'border-violet-500/50',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    position: 'left-[22%] top-[5%]',
  },
  {
    name: 'Monique',
    label: 'Inteligência Artificial',
    items: ['Análise de Dados', 'Agentes de IA', 'Machine Learning'],
    border: 'border-pink-500/50',
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    position: 'left-[50%] top-[52%]',
  },
  {
    name: 'Sonia',
    label: 'Engenharia de Software',
    items: ['Full Stack', 'Front-end', 'Back-end'],
    border: 'border-indigo-400/50',
    bg: 'bg-indigo-400/10',
    text: 'text-indigo-400',
    position: 'left-[78%] top-[5%]',
  },
]

export function ForceMetaphor() {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className="w-full py-16 px-4 rounded-2xl border border-violet-500/10 relative overflow-hidden bg-gradient-to-b from-[#0a0b14] via-[#11122a] to-[#0a0b14] my-12"
    >
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] bg-[#8b5cf6]/10 px-3 py-1 rounded-full border border-[#8b5cf6]/30">
          Nossa Força
        </span>
        <h3 className="text-2xl md:text-4xl font-bold text-white mt-4 font-display tracking-tight">
          Três especialidades. <span className="gradient-heading">Uma equipe.</span>
        </h3>
      </div>

      <div className="relative w-full max-w-xl mx-auto h-[340px] sm:h-[400px] md:h-[440px]">
        {CIRCLES.map((circle, i) => (
          <div
            key={circle.name}
            className={`absolute ${circle.position} -translate-x-1/2 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-2 ${circle.border} ${circle.bg} backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-4 text-center transition-opacity duration-500 ease-out`}
            style={{ transitionDelay: `${i * 200}ms`, opacity: isInView ? 1 : 0 }}
          >
            <p className={`text-sm sm:text-base font-bold ${circle.text} mb-1`}>{circle.name}</p>
            <p
              className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${circle.text} mb-2`}
            >
              {circle.label}
            </p>
            {circle.items.map((item) => (
              <p key={item} className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div
        className="text-center mt-6 transition-opacity duration-500"
        style={{ transitionDelay: '600ms', opacity: isInView ? 1 : 0 }}
      >
        <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
          <span className="text-sm font-bold text-violet-400">Produto</span>
          <span className="text-slate-500">+</span>
          <span className="text-sm font-bold text-pink-400">Inteligência Artificial</span>
          <span className="text-slate-500">+</span>
          <span className="text-sm font-bold text-indigo-400">Engenharia de Software</span>
          <span className="text-slate-500">=</span>
          <span className="text-sm font-bold gradient-heading">Soluções Digitais</span>
        </div>
        <h4 className="text-2xl md:text-3xl font-bold text-white font-display">3 Dev.as DemAIs</h4>
        <p className="text-sm text-slate-400 mt-2 max-w-md mx-auto px-4">
          Diferentes especialidades. Um único propósito: construir tecnologia que gera impacto.
        </p>
      </div>
    </div>
  )
}
