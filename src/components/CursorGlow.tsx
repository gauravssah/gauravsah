import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      glow.style.transform = `translate(${event.clientX - 140}px, ${event.clientY - 140}px)`;
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed left-0 top-0 z-0 h-72 w-72 rounded-full bg-cyan/8 blur-3xl transition-transform duration-75"
    />
  );
}
