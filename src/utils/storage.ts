import { PortfolioData } from "../data/portfolio";

const STORAGE_KEY = "portfolio-content-v1";

export function loadLocalPortfolio<T extends PortfolioData>(fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveLocalPortfolio(data: PortfolioData) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
