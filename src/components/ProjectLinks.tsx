import { Globe, Github, Youtube, Video, Figma, ExternalLink } from 'lucide-react'
import type { ProjectLink } from '@/data/content'

const ICON_MAP: Record<string, React.ReactNode> = {
  globe: <Globe className="w-4 h-4" />,
  github: <Github className="w-4 h-4" />,
  youtube: <Youtube className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  figma: <Figma className="w-4 h-4" />,
}

interface ProjectLinksProps {
  links?: ProjectLink[]
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links || links.length === 0) return null

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-violet-500/8 hover:bg-violet-500/15 border border-violet-500/20 hover:border-violet-500/40 text-slate-200 hover:text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/10 cursor-pointer"
        >
          {ICON_MAP[link.icon] || <ExternalLink className="w-4 h-4" />}
          <span>{link.title}</span>
        </a>
      ))}
    </div>
  )
}
