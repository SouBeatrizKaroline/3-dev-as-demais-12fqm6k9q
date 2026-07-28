import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Sparkles, Brain, Code2, Rocket, Award, Github, Linkedin, Mail } from 'lucide-react'
import beatrizImage from '@/assets/image-41af5.png'

export function FeaturedProfileSection() {
  return (
    <section
      id="perfil-destaque"
      className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <Badge
            variant="outline"
            className="mb-3 border-cyan-500/40 text-cyan-400 bg-cyan-950/40 px-3 py-1 text-xs font-semibold tracking-wide uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400 inline" />
            Liderança em Inovação
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Perfil de{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base md:text-lg">
            Conheça quem lidera a transformação digital e a inteligência artificial na equipe 3
            Dev.as DemAIs.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-slate-900/90 border-slate-800/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl overflow-hidden relative">
          {/* Decorative accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

          <CardContent className="p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Profile Image & Badge Container */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative group">
                  {/* Outer animated gradient ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500" />

                  <Avatar className="w-44 h-48 sm:w-52 sm:h-56 md:w-60 md:h-64 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden relative">
                    <AvatarImage
                      src={beatrizImage}
                      alt="Beatriz Karoline"
                      className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <AvatarFallback className="bg-slate-900 text-slate-200 font-bold text-xl">
                      BK
                    </AvatarFallback>
                  </Avatar>

                  {/* Highlight pill */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 border border-cyan-500/50 text-cyan-300 text-xs font-bold px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    Dev.a DemAI
                  </div>
                </div>
              </div>

              {/* Bio & Details Column */}
              <div className="flex-1 text-center md:text-left space-y-4 sm:space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-semibold mb-2.5">
                    <Brain className="w-3.5 h-3.5 text-cyan-400" />
                    Engenharia de Software & IA
                  </div>

                  {/* Prominent Name Display */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
                    Beatriz Karoline
                  </h3>

                  <p className="text-cyan-400 font-semibold text-base sm:text-lg mt-1">
                    Líder de Inovação & Desenvolvedora Full Stack
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Liderando a fronteira do desenvolvimento tecnológico na equipe{' '}
                  <strong className="text-white font-semibold">3 Dev.as DemAIs</strong>, Beatriz
                  Karoline é referência em arquiteturas escaláveis e integração de modelos
                  generativos de IA. Atua impulsionando soluções inovadoras que unem alta
                  performance, design elegante e excelência em engenharia de software.
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                  <Badge
                    variant="secondary"
                    className="bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700/60 px-3 py-1 text-xs"
                  >
                    <Code2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400" /> Full Stack Tech
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700/60 px-3 py-1 text-xs"
                  >
                    <Brain className="w-3.5 h-3.5 mr-1.5 text-purple-400" /> Inteligência Artificial
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700/60 px-3 py-1 text-xs"
                  >
                    <Rocket className="w-3.5 h-3.5 mr-1.5 text-blue-400" /> Inovação & Arquitetura
                  </Badge>
                </div>

                {/* Social & Contact Actions */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 border-0"
                  >
                    <a href="mailto:beatriz.karoline@devasdemais.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Contato Direto
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white text-sm"
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2 text-cyan-400" />
                      LinkedIn
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white text-sm"
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 text-slate-300" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
