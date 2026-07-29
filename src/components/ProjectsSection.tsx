import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { PROJECTS, Project } from '@/data/content'
import { ProjectCaseModal } from '@/components/ProjectCaseModal'
import { ProjectCard } from '@/components/ProjectCard'

export function ProjectsSection() {
  const { ref: awardedRef, isInView: awardedInView } = useInView()
  const { ref: featuredRef, isInView: featuredInView } = useInView()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const awardedProjects = PROJECTS.filter((p) => p.isAwarded)
  const featuredProjects = PROJECTS.filter((p) => !p.isAwarded)

  return (
    <section id="projetos" className="py-24 bg-[#0f0f1a] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={awardedRef}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Principais Projetos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
              Soluções premiadas que <span className="gradient-heading">geram impacto real</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Clique em "Ver Case Completo" para conhecer o desafio, solução e resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awardedProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={awardedInView}
                onOpenModal={openModal}
              />
            ))}
          </div>
        </div>

        <div ref={featuredRef} className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              Outros Projetos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
              Projetos de <span className="gradient-heading">Destaque</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Soluções inovadoras que também fizeram parte da nossa trajetória.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={featuredInView}
                onOpenModal={openModal}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectCaseModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
