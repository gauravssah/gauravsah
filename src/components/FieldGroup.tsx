import { ReactNode } from "react";

type FieldGroupProps = {
  label: string;
  children: ReactNode;
};

export function FieldGroup({ label, children }: FieldGroupProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/50">
        {label}
      </span>
      {children}
    </label>
  );
}
