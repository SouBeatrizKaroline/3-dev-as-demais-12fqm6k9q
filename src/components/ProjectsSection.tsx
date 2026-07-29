import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { PROJECTS, Project } from '@/data/content'
import { ProjectCaseModal } from '@/components/ProjectCaseModal'
import { ProjectCard } from '@/components/ProjectCard'

const PROJECT_ORDER = [
  'destinai',
  'reclapp',
  'giro',
  'infinitour',
  'ium',
  'potencia-hack',
  'viga',
  'greenhat',
  'connectgreen',
  'pegabot-extension',
  'dionisa',
  'earth-connections',
  'lazurus',
  'siscar',
  'saude-express',
]

export function ProjectsSection() {
  const { ref, isInView } = useInView()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const sortedProjects = [...PROJECTS].sort(
    (a, b) => PROJECT_ORDER.indexOf(a.id) - PROJECT_ORDER.indexOf(b.id),
  )

  return (
    <section id="projetos" className="py-24 bg-[#0f0f1a] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Principais Projetos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
              Soluções que <span className="gradient-heading">geram impacto real</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Conheça alguns dos projetos que marcaram nossa trajetória em hackathons, desafios de
              inovação e desenvolvimento de soluções para problemas reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={isInView}
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
