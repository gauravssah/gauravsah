import { motion } from "framer-motion";
import { BrainCircuit, Code2, Server, Sparkles, Wrench } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PortfolioData } from "../data/portfolio";

type SkillsSectionProps = {
  portfolio: PortfolioData;
};

export function SkillsSection({ portfolio }: SkillsSectionProps) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedSection
      id="skills"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Skills"
        title="Technical stack and delivery strengths"
        description="A clear view of the stack I use, the systems I build, and the way I work with teams."
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {portfolio.skills.map((skill) => {
          const Icon =
            skill.title === "Frontend"
              ? Code2
              : skill.title === "Backend"
                ? Server
                : skill.title === "AI/ML"
                  ? BrainCircuit
                  : Wrench;

          return (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <GlassCard className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/30">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan transition group-hover:scale-105">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.title}
                    </h3>
                  </div>
                  <span className="text-xs text-cyan/80">
                    {skill.progress}%
                  </span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-neon to-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 1.05,
                      ease: "easeOut",
                      delay: 0.15,
                    }}
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 transition group-hover:border-cyan/30 group-hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6"
      >
        {[
          "Problem Solving",
          "Team Collaboration",
          "Communication Skills",
          "Time Management",
          "Adaptability",
          "Continuous Learning",
        ].map((item, index) => (
          <GlassCard
            key={item}
            className="group px-5 py-4 text-sm text-white/80 transition duration-300 hover:-translate-y-1 hover:border-cyan/25"
          >
            <span className="flex items-center gap-2">
              <Sparkles
                size={14}
                className="text-cyan transition group-hover:scale-110"
              />
              {item}
            </span>
          </GlassCard>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
