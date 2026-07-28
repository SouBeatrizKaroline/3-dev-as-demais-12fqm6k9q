import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { TimelineSection } from '@/components/TimelineSection'
import { StatsSection } from '@/components/StatsSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { TeamSection } from '@/components/TeamSection'
import { CapabilitiesSection } from '@/components/CapabilitiesSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { TechMarqueeSection } from '@/components/TechMarqueeSection'
import { AchievementsSection } from '@/components/AchievementsSection'
import { QuoteSection } from '@/components/QuoteSection'
import { CtaSection } from '@/components/CtaSection'

export default function Index() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <StatsSection />
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
