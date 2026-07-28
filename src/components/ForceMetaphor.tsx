import { useState } from 'react'
import { Sparkles, Cpu, Layers, BrainCircuit } from 'lucide-react'

export function ForceMetaphor() {
  const [merged, setMerged] = useState(false)

  return (
    <div className="w-full bg-gradient-to-b from-[#0f0f1a] via-[#14142b] to-[#0f0f1a] py-16 px-6 rounded-3xl border border-white/10 relative overflow-hidden text-center my-12">
      <div className="max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
          Sinergia em Ação
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-4 font-display">
          Três mentes. Três regiões. <span className="neon-text-cyan">Uma só força.</span>
        </h3>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          Passe o mouse ou clique abaixo para ver como as visões individuais de produto,
          inteligência artificial e arquitetura se fundem na força do time.
        </p>
      </div>

      {/* Interactive Fusion Diagram */}
      <div
        className="relative w-full max-w-lg mx-auto h-[320px] flex items-center justify-center cursor-pointer group"
        onMouseEnter={() => setMerged(true)}
        onMouseLeave={() => setMerged(false)}
        onClick={() => setMerged(!merged)}
      >
        {/* Central Orb when merged */}
        <div
          className={`absolute z-20 w-48 h-48 rounded-full bg-gradient-to-tr from-[#00f0ff] via-[#b300ff] to-[#10b981] p-[2px] transition-all duration-700 ease-out shadow-2xl ${
            merged
              ? 'scale-125 opacity-100 shadow-cyan-500/50'
              : 'scale-50 opacity-0 pointer-events-none'
          }`}
        >
          <div className="w-full h-full bg-[#0a0a14] rounded-full flex flex-col items-center justify-center p-4">
            <Sparkles className="w-8 h-8 text-[#00f0ff] animate-spin-slow mb-1" />
            <h4 className="text-xl font-black text-white font-display">3 Dev.as DemAIs</h4>
            <p className="text-[11px] font-bold text-[#00f0ff] mt-0.5">
              Equipe Completa e De Alto Impacto
            </p>
          </div>
        </div>

        {/* Outer Node 1: Beatriz */}
        <div
          className={`absolute transition-all duration-700 ease-out flex flex-col items-center gap-2 p-4 rounded-2xl glass-card border-cyan-500/40 w-40 ${
            merged
              ? 'translate-x-0 translate-y-0 opacity-20 scale-75'
              : '-translate-x-32 -translate-y-20 opacity-100 hover:scale-105'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-white">Beatriz Karoline</span>
          <span className="text-[10px] text-cyan-400">Visão Multidisciplinar</span>
        </div>

        {/* Outer Node 2: Monique */}
        <div
          className={`absolute transition-all duration-700 ease-out flex flex-col items-center gap-2 p-4 rounded-2xl glass-card border-purple-500/40 w-40 ${
            merged
              ? 'translate-x-0 translate-y-0 opacity-20 scale-75'
              : 'translate-x-32 -translate-y-20 opacity-100 hover:scale-105'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-[#b300ff]/20 flex items-center justify-center text-[#b300ff]">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-white">Monique Cardoso</span>
          <span className="text-[10px] text-purple-400">IA & Ciência de Dados</span>
        </div>

        {/* Outer Node 3: Sonia */}
        <div
          className={`absolute transition-all duration-700 ease-out flex flex-col items-center gap-2 p-4 rounded-2xl glass-card border-emerald-500/40 w-40 ${
            merged
              ? 'translate-x-0 translate-y-0 opacity-20 scale-75'
              : 'translate-y-28 opacity-100 hover:scale-105'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-white">Sonia Janara</span>
          <span className="text-[10px] text-emerald-400">Desenvolvimento Full Stack</span>
        </div>
      </div>

      <p className="text-xs text-slate-500 font-medium mt-4">
        {merged
          ? '✨ Fusão ativada: Soluções completas do ideômetro ao deploy!'
          : '💡 Interaja com o diagrama acima para unificar o time'}
      </p>
    </div>
  )
}
