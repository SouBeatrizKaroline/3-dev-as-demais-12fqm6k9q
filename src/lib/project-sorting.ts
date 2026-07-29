import { Project } from '@/data/content'

const PINNED_IDS = ['destinai', 'giro']

const YEAR_OVERRIDES: Record<string, number> = {
  reclapp: 2025,
  greenhat: 2021,
}

function getAwardTier(project: Project): number {
  const awards = project.awards ?? (project.award ? [project.award] : [])
  const text = awards.join(' ').toLowerCase()

  if (text.includes('1º lugar') || text.includes('winner')) return 1
  if (text.includes('2º lugar')) return 2
  if (text.includes('3º lugar')) return 3
  if (text.includes('menção honrosa')) return 4
  if (text.includes('finalista') && !text.includes('global nominee')) return 5
  if (text.includes('global nominee')) return 6
  if (text.includes('top')) return 7
  return 8
}

function getAwardYear(project: Project): number {
  if (YEAR_OVERRIDES[project.id] !== undefined) return YEAR_OVERRIDES[project.id]
  const awards = project.awards ?? (project.award ? [project.award] : [])
  const text = awards.join(' ')
  const match = text.match(/\(?(20\d{2})\)?/)
  return match ? parseInt(match[1], 10) : 0
}

export function sortProjects(projects: Project[]): Project[] {
  const pinned: Project[] = []
  const rest: Project[] = []

  for (const id of PINNED_IDS) {
    const p = projects.find((proj) => proj.id === id)
    if (p) pinned.push(p)
  }

  for (const p of projects) {
    if (!PINNED_IDS.includes(p.id)) rest.push(p)
  }

  rest.sort((a, b) => {
    const tierA = getAwardTier(a)
    const tierB = getAwardTier(b)
    if (tierA !== tierB) return tierA - tierB

    const yearA = getAwardYear(a)
    const yearB = getAwardYear(b)
    if (yearA !== yearB) return yearB - yearA

    return 0
  })

  return [...pinned, ...rest]
}
