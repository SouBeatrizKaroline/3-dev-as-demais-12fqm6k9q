import { useState } from 'react'
import { MapPin } from 'lucide-react'

export function InteractiveMap() {
  const [activePin, setActivePin] = useState<'pe' | 'rj' | 'df' | null>(null)

  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#121226] to-[#0b0b14] rounded-3xl border border-cyan-500/20 p-6 flex flex-col justify-between overflow-hidden shadow-2xl shadow-cyan-950/30 group">
      {/* Background glow effects */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#b300ff]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Brazil SVG Stylized Outline */}
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full max-h-[360px] drop-shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brazil Simplified Map Contour */}
          <path
            d="M 230 50 L 320 60 L 400 90 L 480 140 L 520 200 L 460 260 L 410 320 L 360 410 L 310 440 L 250 410 L 210 360 L 170 300 L 130 250 L 90 200 L 110 140 L 160 100 Z"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(0, 240, 255, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Connection Lines between Recife, Rio de Janeiro, and Brasília */}
          {/* Pernambuco to Rio */}
          <path
            d="M 490 190 Q 450 280 400 340"
            stroke="url(#gradient-pe-rj)"
            strokeWidth="2.5"
            className="animate-line-dash"
          />
          {/* Pernambuco to Brasília */}
          <path
            d="M 490 190 Q 390 220 330 250"
            stroke="url(#gradient-pe-df)"
            strokeWidth="2.5"
            className="animate-line-dash"
          />
          {/* Rio to Brasília */}
          <path
            d="M 400 340 Q 350 300 330 250"
            stroke="url(#gradient-rj-df)"
            strokeWidth="2.5"
            className="animate-line-dash"
          />

          <defs>
            <linearGradient id="gradient-pe-rj" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#b300ff" />
            </linearGradient>
            <linearGradient id="gradient-pe-df" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="gradient-rj-df" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b300ff" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Node 1: Pernambuco (Recife) */}
          <g
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={() => setActivePin('pe')}
            onMouseLeave={() => setActivePin(null)}
          >
            <circle cx="490" cy="190" r="14" fill="rgba(0,240,255,0.2)" />
            <circle cx="490" cy="190" r="8" fill="#00f0ff" className="animate-pulse" />
            <circle cx="490" cy="190" r="3" fill="#ffffff" />
            <text
              x="478"
              y="195"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              fontFamily="Inter"
              textAnchor="end"
            >
              Jaboatão dos Guararapes • PE
            </text>
          </g>

          {/* Node 2: Rio de Janeiro */}
          <g
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={() => setActivePin('rj')}
            onMouseLeave={() => setActivePin(null)}
          >
            <circle cx="400" cy="340" r="14" fill="rgba(179,0,255,0.2)" />
            <circle cx="400" cy="340" r="8" fill="#b300ff" className="animate-pulse" />
            <circle cx="400" cy="340" r="3" fill="#ffffff" />
            <text x="415" y="360" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="Inter">
              Duque de Caxias • RJ
            </text>
          </g>

          {/* Node 3: Distrito Federal (Brasília) */}
          <g
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={() => setActivePin('df')}
            onMouseLeave={() => setActivePin(null)}
          >
            <circle cx="330" cy="250" r="14" fill="rgba(16,185,129,0.2)" />
            <circle cx="330" cy="250" r="8" fill="#10b981" className="animate-pulse" />
            <circle cx="330" cy="250" r="3" fill="#ffffff" />
            <text x="240" y="255" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="Inter">
              Brasília (DF)
            </text>
          </g>
        </svg>
      </div>

      {/* Legend below the map */}
      <div className="grid grid-cols-3 gap-2 bg-[#0f0f1a]/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 z-10 text-center">
        <div
          className={`p-2 rounded-xl transition-all ${
            activePin === 'pe' ? 'bg-[#00f0ff]/20 border border-[#00f0ff]' : 'hover:bg-white/5'
          }`}
        >
          <div className="text-[9px] uppercase font-bold text-[#00f0ff] flex items-center justify-center gap-1 leading-tight">
            <MapPin className="w-3 h-3 shrink-0" /> Jaboatão dos Guararapes • PE
          </div>
          <div className="text-xs font-bold text-white mt-0.5">Beatriz Karoline</div>
        </div>

        <div
          className={`p-2 rounded-xl transition-all ${
            activePin === 'rj' ? 'bg-[#b300ff]/20 border border-[#b300ff]' : 'hover:bg-white/5'
          }`}
        >
          <div className="text-[9px] uppercase font-bold text-[#b300ff] flex items-center justify-center gap-1 leading-tight">
            <MapPin className="w-3 h-3 shrink-0" /> Duque de Caxias • RJ
          </div>
          <div className="text-xs font-bold text-white mt-0.5">Monique Cardoso</div>
        </div>

        <div
          className={`p-2 rounded-xl transition-all ${
            activePin === 'df' ? 'bg-emerald-500/20 border border-emerald-500' : 'hover:bg-white/5'
          }`}
        >
          <div className="text-[9px] uppercase font-bold text-emerald-400 flex items-center justify-center gap-1 leading-tight">
            <MapPin className="w-3 h-3 shrink-0" /> Brasília (DF)
          </div>
          <div className="text-xs font-bold text-white mt-0.5">Sonia Janara</div>
        </div>
      </div>
    </div>
  )
}
