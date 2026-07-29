import { useEffect } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ComoTrabalhamosSection } from '@/components/ComoTrabalhamosSection'
import { TimelineSection } from '@/components/TimelineSection'
import { StatsSection } from '@/components/StatsSection'
import { BeyondHackathonsSection } from '@/components/BeyondHackathonsSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { TeamSection } from '@/components/TeamSection'
import { CapabilitiesSection } from '@/components/CapabilitiesSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { TechMarqueeSection } from '@/components/TechMarqueeSection'
import { AchievementsSection } from '@/components/AchievementsSection'
import { QuoteSection } from '@/components/QuoteSection'
import { CtaSection } from '@/components/CtaSection'

export default function Index() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const scrollTo = params.get('scrollTo')
    if (!scrollTo) return
    requestAnimationFrame(() => {
      const target = document.getElementById(scrollTo)
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
      window.history.replaceState({}, '', '/')
    })
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ComoTrabalhamosSection />
      <TimelineSection />
      <StatsSection />
      <BeyondHackathonsSection />
      <PhilosophySection />
      <TeamSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <TechMarqueeSection />
      <AchievementsSection />
      <QuoteSection />
      <CtaSection />
    </div>
  )
}
