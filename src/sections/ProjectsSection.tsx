import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PortfolioData } from "../data/portfolio";
import { assetPath } from "../utils/assetPath";
import { summarizeTechStack } from "../utils/ai";

type ProjectsSectionProps = {
  portfolio: PortfolioData;
};

export function ProjectsSection({ portfolio }: ProjectsSectionProps) {
  const getScreenshotPath = (projectTitle: string) => {
    if (projectTitle === "GoalTrackr") {
      return assetPath("/images/projects-ss/GoalTracker-Project-ss.png");
    }

    if (projectTitle === "TicketFlix") {
      return assetPath("/images/projects-ss/TicketFlix-Project-ss.png");
    }

    return assetPath("/images/projects-ss/AnimalsLover-Project-ss.png");
  };

  return (
    <AnimatedSection
      id="projects"
      className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Projects I built while learning"
        description="A compact look at the personal and production projects that shaped my full-stack journey."
      />
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
          >
            <GlassCard className="group h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-cyan/30">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                <div className="absolute inset-x-4 top-4 z-20 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-bg/60 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan/80 backdrop-blur-md">
                    Learning project
                  </span>
                  <span className="rounded-full border border-white/15 bg-bg/60 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">
                    {index + 1} / {portfolio.projects.length}
                  </span>
                </div>

                <div className="relative h-52 w-full bg-[#050b1f] sm:h-56 md:h-52 xl:h-56">
                  <img
                    src={getScreenshotPath(project.title)}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-contain object-center p-2 transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 z-10 rounded-t-3xl border-b border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
              </div>

              <div className="flex flex-col gap-5 p-6">
                <div>
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan/70">
                    <Rocket size={12} /> Featured build
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-muted md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 transition group-hover:border-cyan/30 group-hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white/60">
                  Tech stack: {summarizeTechStack(project)}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-cyan/40 hover:text-white"
                  >
                    GitHub <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
