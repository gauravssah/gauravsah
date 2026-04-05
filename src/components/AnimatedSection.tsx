import { motion } from "framer-motion";
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
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
