import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { assetPath } from "../utils/assetPath";

const floatingSkills = [
  { icon: Code2, label: "React + Next.js", x: "-18%", y: "16%", delay: 0 },
  { icon: Server, label: "Node + Express", x: "80%", y: "20%", delay: 0.35 },
  { icon: Database, label: "MongoDB + APIs", x: "-12%", y: "70%", delay: 0.55 },
  { icon: BrainCircuit, label: "AI Workflows", x: "78%", y: "74%", delay: 0.2 },
  { icon: Workflow, label: "System Design", x: "44%", y: "-6%", delay: 0.7 },
  {
    icon: ShieldCheck,
    label: "Clean Architecture",
    x: "42%",
    y: "90%",
    delay: 0.45,
  },
];

type HeroSkillsShowcaseProps = {
  name: string;
  role: string;
  profileImage: string;
  profileAlt: string;
  focusLine: string;
  floatingLabels: string[];
};

export function HeroSkillsShowcase({
  name,
  role,
  profileImage,
  profileAlt,
  focusLine,
  floatingLabels,
}: HeroSkillsShowcaseProps) {
  const skillsToRender = floatingSkills.map((item, index) => ({
    ...item,
    label: floatingLabels[index] || item.label,
  }));

  return (
    <div className="hero-card-shell relative mx-auto h-[20.5rem] w-full max-w-[20rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#07122b]/95 p-3 shadow-glow md:h-[23rem] md:max-w-[26rem] md:p-6 lg:h-[37rem] lg:max-w-none">
      <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-cyan/10" />
      <div className="absolute inset-x-8 top-4 h-24 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20 animate-[spin_28s_linear_infinite]" />
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/20 animate-[spin_18s_linear_infinite_reverse]" />

      <div className="relative z-10 flex h-full items-center justify-center [perspective:1200px] lg:items-start lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          whileHover={{ rotateY: 7, rotateX: -5, y: -5 }}
          className="w-[min(94%,340px)] rounded-3xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-md md:p-5"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={assetPath(profileImage)}
            alt={profileAlt || name}
            className="h-40 w-full rounded-2xl object-cover md:h-48"
          />
          <h3 className="mt-3 text-base font-semibold text-white md:mt-4 md:text-xl">
            {name}
          </h3>
          <p className="mt-1 text-[11px] text-cyan/80 md:text-sm">{role}</p>
          <p className="mt-2.5 text-[10px] uppercase tracking-[0.12em] text-white/55 md:mt-3 md:text-xs md:tracking-[0.22em]">
            {focusLine}
          </p>
        </motion.div>
      </div>

      {skillsToRender.map((item) => (
        <motion.div
          key={item.label}
          className="hero-floating-tag absolute z-20 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/85 backdrop-blur-md"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <span className="inline-flex items-center gap-2">
            <item.icon size={13} className="text-cyan" />
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
