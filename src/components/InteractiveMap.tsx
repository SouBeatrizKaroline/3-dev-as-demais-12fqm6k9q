import { useState } from 'react'
import { MapPin } from 'lucide-react'

export function InteractiveMap() {
  const [activePin, setActivePin] = useState<'pe' | 'rj' | 'df' | null>(null)

  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#12122a] to-[#0a0b14] rounded-2xl border border-violet-500/20 p-6 flex flex-col justify-between overflow-hidden shadow-2xl shadow-violet-950/30 group">
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#7c3aed]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#c4b5fd]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full max-h-[360px] drop-shadow-[0_0_15px_rgba(139,92,246,0.12)]"
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

          <g
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={() => setActivePin('pe')}
            onMouseLeave={() => setActivePin(null)}
          >
            <circle cx="490" cy="190" r="14" fill="rgba(139,92,246,0.2)" />
            <circle cx="490" cy="190" r="8" fill="#8b5cf6" className="animate-pulse" />
            <circle cx="490" cy="190" r="3" fill="#ffffff" />
            <text
              x="478"
              y="195"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              fontFamily="Plus Jakarta Sans"
              textAnchor="end"
            >
              Jaboatão dos Guararapes • PE
            </text>
          </g>

          <g
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={() => setActivePin('rj')}
            onMouseLeave={() => setActivePin(null)}
          >
            <circle cx="400" cy="340" r="14" fill="rgba(196,181,253,0.2)" />
            <circle cx="400" cy="340" r="8" fill="#c4b5fd" className="animate-pulse" />
            <circle cx="400" cy="340" r="3" fill="#ffffff" />
            <text
              x="415"
              y="360"
              fill="#ffffff"
              fontSize="12"
              fontWeight="bold"
              fontFamily="Plus Jakarta Sans"
            >
              Duque de Caxias • RJ
            </text>
          </g>

          <g
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={() => setActivePin('df')}
            onMouseLeave={() => setActivePin(null)}
          >
            <circle cx="330" cy="250" r="14" fill="rgba(240,160,192,0.2)" />
            <circle cx="330" cy="250" r="8" fill="#f0a0c0" className="animate-pulse" />
            <circle cx="330" cy="250" r="3" fill="#ffffff" />
            <text
              x="240"
              y="255"
              fill="#ffffff"
              fontSize="13"
              fontWeight="bold"
              fontFamily="Plus Jakarta Sans"
            >
              Brasília (DF)
            </text>
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 bg-[#0a0b14]/80 backdrop-blur-md p-3 rounded-2xl border border-violet-500/10 z-10 text-center">
        <div
          className={`p-2 rounded-xl transition-all ${activePin === 'pe' ? 'bg-[#8b5cf6]/20 border border-[#8b5cf6]' : 'hover:bg-white/5'}`}
        >
          <div className="text-[9px] uppercase font-bold text-[#a78bfa] flex items-center justify-center gap-1 leading-tight">
            <MapPin className="w-3 h-3 shrink-0" /> Jaboatão • PE
          </div>
          <div className="text-xs font-bold text-white mt-0.5">Beatriz Karoline</div>
        </div>
        <div
          className={`p-2 rounded-xl transition-all ${activePin === 'rj' ? 'bg-[#c4b5fd]/20 border border-[#c4b5fd]' : 'hover:bg-white/5'}`}
        >
          <div className="text-[9px] uppercase font-bold text-[#c4b5fd] flex items-center justify-center gap-1 leading-tight">
            <MapPin className="w-3 h-3 shrink-0" /> Duque de Caxias • RJ
          </div>
          <div className="text-xs font-bold text-white mt-0.5">Monique Cardoso</div>
        </div>
        <div
          className={`p-2 rounded-xl transition-all ${activePin === 'df' ? 'bg-rose-400/20 border border-rose-400' : 'hover:bg-white/5'}`}
        >
          <div className="text-[9px] uppercase font-bold text-rose-400 flex items-center justify-center gap-1 leading-tight">
            <MapPin className="w-3 h-3 shrink-0" /> Brasília (DF)
          </div>
          <div className="text-xs font-bold text-white mt-0.5">Sonia Janara</div>
        </div>
      </div>
    </div>
  )
}
