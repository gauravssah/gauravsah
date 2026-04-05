import { useEffect, useState } from "react";

type TypingTextProps = {
  text?: string;
  texts?: string[];
  speed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
};

export function TypingText({
  text,
  texts,
  speed = 46,
  deletingSpeed = 26,
  pauseMs = 1300,
  className,
}: TypingTextProps) {
  const lines = texts?.length ? texts : text ? [text] : [];
  const [visibleText, setVisibleText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!lines.length) {
      return;
    }

    const currentLine = lines[lineIndex % lines.length];
    let timer = 0;

    if (!deleting) {
      if (visibleText.length < currentLine.length) {
        timer = window.setTimeout(() => {
          setVisibleText(currentLine.slice(0, visibleText.length + 1));
        }, speed);
      } else {
        timer = window.setTimeout(() => {
          setDeleting(true);
        }, pauseMs);
      }
    } else if (visibleText.length > 0) {
      timer = window.setTimeout(() => {
        setVisibleText(currentLine.slice(0, visibleText.length - 1));
      }, deletingSpeed);
    } else {
      setDeleting(false);
      setLineIndex((value) => (value + 1) % lines.length);
    }

    return () => window.clearTimeout(timer);
  }, [deleting, deletingSpeed, lineIndex, lines, pauseMs, speed, visibleText]);

  if (!lines.length) {
    return null;
  }

  return (
    <span className={className}>
      {visibleText}
      <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan align-middle" />
    </span>
  );
}
