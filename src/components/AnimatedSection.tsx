import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({
  id,
  children,
  className,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const initialY = prefersReducedMotion ? 0 : isMobile ? 20 : 34;

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: isMobile ? 0.1 : 0.18,
        margin: "0px 0px -8% 0px",
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0.01 }
          : {
              type: "spring",
              stiffness: isMobile ? 95 : 115,
              damping: isMobile ? 22 : 20,
              mass: 0.9,
            }
      }
    >
      {children}
    </motion.section>
  );
}
