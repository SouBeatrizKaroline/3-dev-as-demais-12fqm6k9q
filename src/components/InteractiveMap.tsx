import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

interface MapMember {
  id: string
  name: string
  location: string
  shortLocation: string
  specialties: string
  color: string
  bgColor: string
  ringColor: string
  svgX: number
  svgY: number
}

const MEMBERS: MapMember[] = [
  {
    id: 'pe',
    name: 'Beatriz Karoline',
    location: 'Jaboatão dos Guararapes - PE',
    shortLocation: 'PE',
    specialties: 'Produto • UX • Estratégia • Design',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.15)',
    ringColor: 'border-[#8b5cf6]/50',
    svgX: 490,
    svgY: 190,
  },
  {
    id: 'rj',
    name: 'Monique',
    location: 'Duque de Caxias - RJ',
    shortLocation: 'RJ',
    specialties: 'Inteligência Artificial • Dados • LLMs • Agentes de IA',
    color: '#c4b5fd',
    bgColor: 'rgba(196,181,253,0.15)',
    ringColor: 'border-[#c4b5fd]/50',
    svgX: 400,
    svgY: 340,
  },
  {
    id: 'df',
    name: 'Sonia',
    location: 'Brasília - DF',
    shortLocation: 'DF',
    specialties: 'Engenharia de Software • Full Stack • Frontend • Backend',
    color: '#f0a0c0',
    bgColor: 'rgba(240,160,192,0.15)',
    ringColor: 'border-rose-400/50',
    svgX: 330,
    svgY: 250,
  },
]

export function InteractiveMap() {
  const [activePin, setActivePin] = useState<string | null>(null)
  const [clickedPin, setClickedPin] = useState<string | null>(null)
  const { ref, isInView } = useInView()

  const handlePinClick = (id: string) => {
    setClickedPin((prev) => (prev === id ? null : id))
    setActivePin(id)
  }

  const handleCardHover = (id: string | null) => {
    setActivePin(id)
  }

  const handleCardClick = (id: string) => {
    setClickedPin((prev) => (prev === id ? null : id))
    setActivePin(id)
  }

  return (
    <div
      ref={ref}
      className={`relative w-full bg-gradient-to-b from-[#12122a] to-[#0a0b14] rounded-2xl border border-violet-500/20 p-4 sm:p-6 shadow-2xl shadow-violet-950/30 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#7c3aed]/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#c4b5fd]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full mx-auto" style={{ maxWidth: '500px' }}>
        <div className="relative w-full" style={{ aspectRatio: '600 / 500' }}>
          <svg
            viewBox="0 0 600 500"
            className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.12)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 230 50 L 320 60 L 400 90 L 480 140 L 520 200 L 460 260 L 410 320 L 360 410 L 310 440 L 250 410 L 210 360 L 170 300 L 130 250 L 90 200 L 110 140 L 160 100 Z"
              fill="rgba(255, 255, 255, 0.02)"
              stroke="rgba(139, 92, 246, 0.25)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            <path
              d="M 490 190 Q 450 280 400 340"
              stroke="url(#gradient-pe-rj)"
              strokeWidth="2.5"
              className="animate-line-dash"
            />
            <path
              d="M 490 190 Q 390 220 330 250"
              stroke="url(#gradient-pe-df)"
              strokeWidth="2.5"
              className="animate-line-dash"
            />
            <path
              d="M 400 340 Q 350 300 330 250"
              stroke="url(#gradient-rj-df)"
              strokeWidth="2.5"
              className="animate-line-dash"
            />

            <defs>
              <linearGradient id="gradient-pe-rj" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
              <linearGradient id="gradient-pe-df" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#f0a0c0" />
              </linearGradient>
              <linearGradient id="gradient-rj-df" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#f0a0c0" />
              </linearGradient>
            </defs>

            {MEMBERS.map((m) => {
              const isActive = activePin === m.id || clickedPin === m.id
              return (
                <g
                  key={m.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setActivePin(m.id)}
                  onMouseLeave={() => setActivePin(null)}
                  onClick={() => handlePinClick(m.id)}
                >
                  <circle cx={m.svgX} cy={m.svgY} r="14" fill={m.bgColor} />
                  <circle
                    cx={m.svgX}
                    cy={m.svgY}
                    r="8"
                    fill={m.color}
                    className={isActive ? 'animate-pulse' : ''}
                    style={isActive ? { filter: `drop-shadow(0 0 8px ${m.color})` } : {}}
                  />
                  <circle cx={m.svgX} cy={m.svgY} r="3" fill="#ffffff" />
                </g>
              )
            })}
          </svg>

          {MEMBERS.map((m) => {
            const xPct = (m.svgX / 600) * 100
            const yPct = (m.svgY / 500) * 100
            const isActive = activePin === m.id || clickedPin === m.id
            return (
              <div
                key={`pin-label-${m.id}`}
                className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${xPct}%`, top: `${yPct + 7}%` }}
              >
                <span className="text-[9px] font-bold text-slate-400 select-none">
                  📍 {m.shortLocation}
                </span>
              </div>
            )
          })}

          {MEMBERS.map((m) => {
            const xPct = (m.svgX / 600) * 100
            const yPct = (m.svgY / 500) * 100
            const isActive = activePin === m.id || clickedPin === m.id
            if (!isActive) return null
            return (
              <div
                key={`tooltip-${m.id}`}
                className="absolute z-30 pointer-events-none"
                style={{
                  left: `${xPct}%`,
                  top: `${yPct}%`,
                  transform: m.id === 'df' ? 'translate(-110%, -50%)' : 'translate(-50%, -135%)',
                }}
              >
                <div
                  className={`glass-card backdrop-blur-md rounded-xl px-4 py-3 border ${m.ringColor} shadow-lg whitespace-nowrap transition-all duration-200 ${
                    isActive ? 'scale-105 opacity-100' : 'scale-95 opacity-0'
                  }`}
                >
                  <p className="text-sm font-bold text-white">{m.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 shrink-0" style={{ color: m.color }} />
                    <p className="text-xs text-slate-400">{m.location}</p>
                  </div>
                  <p className="text-[10px] font-semibold mt-1.5" style={{ color: m.color }}>
                    {m.specialties}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {MEMBERS.map((m) => {
          const isActive = activePin === m.id || clickedPin === m.id
          return (
            <div
              key={`member-card-${m.id}`}
              className={`glass-card rounded-xl p-4 border cursor-pointer transition-all duration-300 ${
                isActive
                  ? `${m.ringColor} bg-white/[0.05] scale-[1.02]`
                  : 'border-violet-500/10 hover:border-violet-500/25'
              }`}
              onMouseEnter={() => handleCardHover(m.id)}
              onMouseLeave={() => handleCardHover(null)}
              onClick={() => handleCardClick(m.id)}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300"
                  style={{
                    backgroundColor: m.color,
                    boxShadow: isActive ? `0 0 8px ${m.color}` : 'none',
                  }}
                />
                <h4 className="text-sm font-bold text-white truncate">{m.name}</h4>
              </div>
              <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                <span className="shrink-0">📍</span>
                <span className="truncate">{m.location}</span>
              </p>
              <p className="text-[11px] font-semibold leading-relaxed" style={{ color: m.color }}>
                {m.specialties}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
