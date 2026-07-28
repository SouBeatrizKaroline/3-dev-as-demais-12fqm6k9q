import { Link } from 'react-router-dom'
import { Sparkles, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00f0ff] to-[#b300ff] p-[1px] mb-6">
        <div className="w-full h-full bg-[#0f0f1a] rounded-[15px] flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-[#00f0ff]" />
        </div>
      </div>
      <h1 className="text-6xl font-black text-white font-display mb-2">404</h1>
      <p className="text-xl font-bold text-[#00f0ff] mb-4">Página não encontrada</p>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        A rota que você tentou acessar não existe no ecossistema da 3 Dev.as DemAIs.
      </p>
      <Link to="/">
        <Button className="gradient-btn font-bold px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Button>
      </Link>
    </div>
  )
}
