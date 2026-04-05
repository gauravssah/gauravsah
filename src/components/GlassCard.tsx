import { ReactNode } from "react";
import { cn } from "../utils/cn";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-surface/90 backdrop-blur-xl shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
