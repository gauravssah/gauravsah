import {
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { PortfolioData } from "../data/portfolio";
import { AnimatedSection } from "../components/AnimatedSection";
import { SectionHeading } from "../components/SectionHeading";
import { GlassCard } from "../components/GlassCard";

type AboutSectionProps = {
  portfolio: PortfolioData;
};

export function AboutSection({ portfolio }: AboutSectionProps) {
  return (
    <AnimatedSection
      id="about"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="About"
        title="Who I am and what I build"
        description="My background, engineering mindset, and what I bring to product-focused teams."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <GlassCard className="relative overflow-hidden p-6 md:p-7">
          <div className="absolute inset-0 bg-gradient-to-br from-neon/18 via-transparent to-cyan/12" />
          <div className="relative mx-auto flex max-w-md flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/profile-portrait.jpg"
                alt="Gaurav Kumar profile"
                className="h-24 w-24 rounded-2xl border border-white/10 object-cover shadow-glow"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Gaurav Kumar Sah
                </h3>
                <p className="mt-1 text-sm text-cyan/80">
                  Full-Stack Developer | Software Engineer Aspirant
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/45">
                  India
                </p>
              </div>
            </div>

            <img
              src="/images/profile-portrait.jpg"
              alt="Profile portrait"
              className="h-72 w-full rounded-[2rem] border border-white/10 object-cover shadow-glow transition duration-300 hover:rotate-[-1deg] hover:scale-[1.01]"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: BriefcaseBusiness,
                  text: "Full-stack internship delivery",
                },
                { icon: GraduationCap, text: "B.Tech CSE (AI) + Diploma CSE" },
                { icon: BadgeCheck, text: "MERN + REST API architecture" },
                { icon: Sparkles, text: "Scalable UI + clean UX execution" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/80"
                >
                  <item.icon size={16} className="mt-0.5 shrink-0 text-cyan" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 md:p-8">
          <div className="space-y-5 text-sm leading-7 text-muted md:text-base">
            {portfolio.about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}
