import { Project } from '@/data/content'

const YEAR_OVERRIDES: Record<string, number> = {
  reclapp: 2025,
  greenhat: 2021,
}

function getAwardTier(project: Project): number {
  if (project.id === 'destinai') return 0

  const awards = project.awards ?? (project.award ? [project.award] : [])
  const text = awards.join(' ').toLowerCase()

  if (text.includes('1º lugar') || text.includes('ganhador')) return 1
  if (text.includes('2º lugar')) return 2
  if (text.includes('3º lugar')) return 3
  if (text.includes('menção honrosa')) return 4
  if (text.includes('winner')) return 5
  if (text.includes('top 3')) return 6
  if (text.includes('top 10')) return 7
  if (text.includes('top 15')) return 8
  if (text.includes('global nominee')) return 9
  return 10
}

function getAwardYear(project: Project): number {
  if (YEAR_OVERRIDES[project.id] !== undefined) return YEAR_OVERRIDES[project.id]
  const awards = project.awards ?? (project.award ? [project.award] : [])
  const text = awards.join(' ')
  const match = text.match(/\(?(20\d{2})\)?/)
  return match ? parseInt(match[1], 10) : 0
}

export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const tierA = getAwardTier(a)
    const tierB = getAwardTier(b)
    if (tierA !== tierB) return tierA - tierB

    const yearA = getAwardYear(a)
    const yearB = getAwardYear(b)
    if (yearA !== yearB) return yearB - yearA

    return 0
  })
}
