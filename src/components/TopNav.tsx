import { motion, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import { assetPath } from "../utils/assetPath";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function TopNav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
      <motion.div
        style={{ scaleX }}
        className="h-[2px] origin-left bg-gradient-to-r from-cyan via-neon to-accent"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-white">
          <img
            src={assetPath("/images/profile-portrait.jpg")}
            alt="Gaurav Kumar Sah"
            className="h-11 w-11 rounded-2xl border border-white/10 object-cover shadow-glow"
          />
          <div>
            <p className="text-sm font-medium">Gaurav Kumar Sah</p>
            <p className="text-xs text-white/45">MERN Stack Developer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/65 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-3 text-white/80 lg:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
