import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { Send, CheckCircle2 } from 'lucide-react'

interface ContactFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactFormModal({ open, onOpenChange }: ContactFormModalProps) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Em breve nossa equipe entrará em contato com você.',
      })
    }, 1200)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#11122a] border border-violet-500/25 text-white max-w-lg rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-display text-white">
            Fale com a 3 Dev.as DemAIs
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-xs">
            Envie sua proposta de projeto, convite para hackathon ou parceria técnica.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center gap-4">
            <CheckCircle2 className="w-16 h-16 text-[#a78bfa] animate-bounce" />
            <h3 className="text-xl font-bold text-white">Mensagem recebida!</h3>
            <p className="text-sm text-slate-300">
              Obrigado pelo contato. Responderemos o mais rápido possível no seu e-mail.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false)
                onOpenChange(false)
              }}
              className="gradient-btn px-6 py-2 rounded-xl text-xs font-bold min-h-[44px]"
            >
              Fechar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1 block">
                Seu Nome / Organização
              </label>
              <Input
                required
                placeholder="Ex: Maria Silva • Startup X"
                className="bg-white/5 border-violet-500/15 text-white placeholder:text-slate-500 rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1 block">
                E-mail de Contato
              </label>
              <Input
                required
                type="email"
                placeholder="exemplo@empresa.com"
                className="bg-white/5 border-violet-500/15 text-white placeholder:text-slate-500 rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1 block">Assunto</label>
              <Input
                required
                placeholder="Hackathon, Projeto de IA, Parceria..."
                className="bg-white/5 border-violet-500/15 text-white placeholder:text-slate-500 rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1 block">
                Sua Mensagem
              </label>
              <Textarea
                required
                rows={4}
                placeholder="Descreva brevemente o projeto, desafio ou oportunidade..."
                className="bg-white/5 border-violet-500/15 text-white placeholder:text-slate-500 rounded-xl text-sm"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="gradient-btn font-bold py-3 rounded-xl flex items-center justify-center gap-2 mt-2 cursor-pointer min-h-[44px]"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Enviando...' : 'Enviar Mensagem'}</span>
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
