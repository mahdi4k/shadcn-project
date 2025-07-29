"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";

type Direction = "ltr" | "rtl";

interface DirectionContextType {
  dir: Direction;
  toggleDir: () => void;
  setDirection: (dir: Direction) => void; // Add this
}

const DirectionContext = createContext<DirectionContextType>({
  dir: "rtl",
  toggleDir: () => {},
  setDirection: () => {},
});

export const useDirection = () => useContext(DirectionContext);

export default function DirectionWrapper({ children  }: { children: ReactNode; }) {
  const [dir, setDir] = useState<Direction>(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("dir") as Direction) ?? (process.env.NEXT_PUBLIC_DEFAULT_DIRECTION as Direction) ?? "rtl"
      );
    }
    return "rtl";
  });

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    document.documentElement.setAttribute("dir", dir);
    localStorage.setItem("dir", dir);
  }, [dir, isInitialized]);

  const toggleDir = () => {
    setDir((prev) => (prev === "ltr" ? "rtl" : "ltr"));
  };

  const setDirection = (newDir: Direction) => {
    setDir(newDir);
  };

  return (
    <DirectionContext.Provider
      value={{ dir, toggleDir, setDirection }} // Include setDirection
    >
      <DirectionProvider dir={dir}>{children}</DirectionProvider>
    </DirectionContext.Provider>
  );
}
