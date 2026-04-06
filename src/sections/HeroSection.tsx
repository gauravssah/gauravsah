import { motion } from "framer-motion";
import { ArrowRight, Code2, Download, Mail, Sparkles } from "lucide-react";
import { TypingText } from "../components/TypingText";
import { GlassCard } from "../components/GlassCard";
import { PortfolioData } from "../data/portfolio";
import { HeroSkillsShowcase } from "../components/HeroSkillsShowcase";

type HeroSectionProps = {
  portfolio: PortfolioData;
};

export function HeroSection({ portfolio }: HeroSectionProps) {
  const roleParts = portfolio.hero.role.split("|").map((part) => part.trim());
  const primaryRole = roleParts[0] || "Full-Stack Developer";
  const secondaryRole = roleParts.slice(1).join(" | ");

  const typedLines = [
    "Building scalable web applications.",
    "MERN stack with clean architecture.",
    "Fast UI, robust APIs, strong DSA mindset.",
    "Focused on real product impact.",
  ];

  const movingSkills = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JavaScript",
    "Java",
    "AWS Cloud",
    "DSA",
  ];

  const movingSkillsReverse = [
    "Problem Solving",
    "System Design",
    "UI/UX",
    "Performance",
    "Scalability",
    "GitHub Workflow",
    "Testing",
    "Collaboration",
    "API Integration",
    "Cloud Ready",
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-20 md:pt-28">
      <div className="hero hero-layout mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-9 px-4 pb-10 md:gap-12 md:px-6 md:pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="hero-text hero-stack relative z-10 flex max-w-3xl flex-col">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-cyan/80 md:px-4 md:py-2 md:text-xs md:tracking-[0.3em]"
          >
            <Sparkles size={14} /> Gaurav Kumar Sah portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 break-words text-[1.7rem] font-semibold leading-tight tracking-tight text-white md:mt-6 md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Hi, I&apos;m {portfolio.hero.name}
            <span className="mt-3 block bg-gradient-to-r from-white via-cyan to-neon bg-clip-text text-transparent">
              {primaryRole}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2.5 max-w-2xl text-sm text-white/70 md:mt-3 md:text-base lg:text-lg"
          >
            {secondaryRole}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 max-w-2xl text-sm leading-7 text-muted md:mt-6 md:text-base lg:text-lg"
          >
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-cyan/70 md:text-sm md:tracking-[0.28em]">
              What I build
            </span>
            <TypingText
              texts={typedLines}
              className="inline-block min-h-[3.2rem] md:min-h-[3.8rem] lg:min-h-[3.2rem]"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="hero-actions mt-7 flex flex-col gap-3 md:mt-8 md:flex-row md:flex-wrap md:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-5 py-3 text-sm font-medium text-bg transition hover:-translate-y-0.5 md:w-auto md:px-6 md:text-base"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-cyan/40 hover:bg-white/10 md:w-auto md:px-6 md:text-base"
            >
              Contact Me <Mail size={18} />
            </a>
            <a
              href={portfolio.resumeUrl}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-cyan/40 hover:bg-white/10 md:w-auto md:px-6 md:text-base"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          <div className="hero-banners mt-4 space-y-3">
            <div className="skill-strip overflow-hidden rounded-xl border border-white/10 bg-white/5 py-2">
              <div className="skill-strip-track flex w-max gap-6 px-4 text-sm text-white/75">
                {[...movingSkills, ...movingSkills].map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-strip overflow-hidden rounded-xl border border-white/10 bg-white/5 py-2">
              <div className="skill-strip-track-reverse flex w-max gap-6 px-4 text-sm text-white/70">
                {[...movingSkillsReverse, ...movingSkillsReverse].map(
                  (skill, index) => (
                    <span
                      key={`${skill}-rev-${index}`}
                      className="inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="hero-chips mt-7 grid gap-3 text-sm text-white/75 md:mt-8 md:grid-cols-2"
          >
            {portfolio.hero.highlights.map((item) => (
              <GlassCard
                key={item}
                className="flex items-start gap-3 px-4 py-3"
              >
                <Code2 size={16} className="mt-1 shrink-0 text-cyan" />
                <span>{item}</span>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        <div className="hero-3d-card hero-visual relative mt-6 flex min-h-[20.5rem] items-center justify-center pt-1 md:mt-8 md:min-h-[24rem] lg:mt-0 lg:min-h-[42rem] lg:items-start lg:pt-2 lg:-translate-y-8">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon/14 via-cyan/8 to-transparent blur-3xl" />
          <HeroSkillsShowcase
            name={portfolio.hero.name}
            role={portfolio.hero.role}
          />
        </div>
      </div>
    </section>
  );
}
