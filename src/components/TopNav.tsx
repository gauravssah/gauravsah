import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PortfolioData } from "../data/portfolio";
import { assetPath } from "../utils/assetPath";

type TopNavProps = {
  portfolio: PortfolioData;
};

export function TopNav({ portfolio }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-white">
          <img
            src={assetPath(portfolio.media.profileImage)}
            alt={portfolio.media.profileAlt}
            className="h-11 w-11 rounded-2xl border border-white/10 object-cover shadow-glow"
          />
          <div>
            <p className="text-sm font-medium">{portfolio.hero.name}</p>
            <p className="text-xs text-white/45">
              {portfolio.navigation.subtitle}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {portfolio.navigation.links.map((link) => (
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
            onClick={() => setMobileOpen((previous) => !previous)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-3 text-white/80 lg:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-bg/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {portfolio.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-cyan/40 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
