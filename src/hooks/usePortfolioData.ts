import { useEffect, useState } from "react";
import { defaultPortfolio, PortfolioData } from "../data/portfolio";
import { loadLocalPortfolio, saveLocalPortfolio } from "../utils/storage";

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(defaultPortfolio);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(loadLocalPortfolio(defaultPortfolio));
    setLoading(false);
  }, []);

  const saveData = (nextData: PortfolioData) => {
    setData(nextData);
    saveLocalPortfolio(nextData);
  };

  return { data, loading, saveData };
}
