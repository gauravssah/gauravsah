import { Download } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlassCard } from "../components/GlassCard";
import { PortfolioData } from "../data/portfolio";

type ResumeSectionProps = {
  portfolio: PortfolioData;
};

export function ResumeSection({ portfolio }: ResumeSectionProps) {
  return (
    <AnimatedSection
      id="resume"
      className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8"
    >
      <GlassCard className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan/70">
            {portfolio.resumeSection.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            {portfolio.resumeSection.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
            {portfolio.resumeSection.description}
          </p>
        </div>
        <a
          href={portfolio.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-6 py-3 font-medium text-bg transition hover:opacity-90"
        >
          {portfolio.resumeSection.buttonLabel} <Download size={18} />
        </a>
      </GlassCard>
    </AnimatedSection>
  );
}
