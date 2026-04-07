import { BriefcaseBusiness } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PortfolioData } from "../data/portfolio";

type ExperienceSectionProps = {
  portfolio: PortfolioData;
};

export function ExperienceSection({ portfolio }: ExperienceSectionProps) {
  return (
    <AnimatedSection
      id="experience"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 md:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.12),transparent_65%)]" />
      <div className="pointer-events-none absolute right-[-6rem] top-24 -z-10 h-52 w-52 rounded-full bg-cyan/5 blur-3xl" />
      <SectionHeading
        eyebrow="Experience"
        title="Timeline of internships and delivery"
        description="Real-world internship work across startup delivery, government digitization, and software engineering practice."
      />
      <div className="grid gap-8 lg:grid-cols-[0.39fr_0.61fr] lg:items-start">
        <GlassCard className="relative h-fit overflow-hidden p-6 md:sticky md:top-28 md:p-7">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
          <p className="text-xs uppercase tracking-[0.3em] text-cyan/70">
            Experience highlights
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white md:text-[2rem] md:leading-tight">
            Hands-on delivery across domains
          </h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/70 md:text-base">
            Startup engineering, e-governance workflows, and iterative product
            improvement with measurable outcomes.
          </p>

          <div className="mt-6 grid gap-3">
            {portfolio.experienceHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="text-lg font-semibold text-white">
                  {item.value}
                </div>
                <div className="mt-0.5 text-sm text-white/70">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {portfolio.experienceFocusTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>

        <div className="relative">
          <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan/70 via-neon/40 to-transparent lg:block" />

          <div className="space-y-6 md:space-y-7">
            {portfolio.experience.map((experience) => (
              <div
                key={`${experience.title}-${experience.company}`}
                className="group grid gap-4 lg:grid-cols-[3.25rem_minmax(0,1fr)] lg:gap-5"
              >
                <div className="relative hidden lg:block">
                  <span className="absolute left-1/2 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-cyan/45 bg-cyan shadow-[0_0_20px_rgba(103,232,249,0.85)]" />
                  <span className="absolute left-1/2 top-10 bottom-[-1.5rem] w-px -translate-x-1/2 bg-gradient-to-b from-white/15 to-transparent" />
                </div>

                <GlassCard className="relative overflow-hidden p-6 md:p-7">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan/0 via-cyan/70 to-neon/0" />
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan/80">
                        <BriefcaseBusiness size={12} />
                        Role
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white md:text-2xl">
                          {experience.title}
                        </h3>
                        <p className="mt-1 text-sm text-cyan/80 md:text-[0.95rem]">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/65">
                      {experience.period}
                    </div>
                  </div>

                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted md:text-base">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/70 shadow-[0_0_12px_rgba(103,232,249,0.55)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
