import { GraduationCap } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PortfolioData } from "../data/portfolio";

type EducationSectionProps = {
  portfolio: PortfolioData;
};

export function EducationSection({ portfolio }: EducationSectionProps) {
  return (
    <AnimatedSection
      id="education"
      className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Education"
        title="Education"
        description="My academic journey and core academic milestones."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {portfolio.education.map((item) => (
          <GlassCard key={item.title} className="p-6">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan/70">
              <GraduationCap size={12} /> {item.year}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">{item.institution}</p>
            <p className="mt-4 text-sm text-muted">{item.detail}</p>
          </GlassCard>
        ))}
      </div>
    </AnimatedSection>
  );
}
