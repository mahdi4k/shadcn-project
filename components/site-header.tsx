"use client";

import { Button } from "@/components/ui/button";
import { useDirection } from "@/components/DirectionWrapper";
import { BellDot, Globe, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const { dir, toggleDir } = useDirection(); // ✅ shared state
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    document.documentElement.dir = dir;
    localStorage.setItem("dir", dir);
  }, [dir]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 justify-between lg:gap-2 lg:px-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/60" />
          <Input
            type="text"
            placeholder="Search for something"
            className="pl-12 pr-4 py-2 rounded-full bg-muted text-primary/70 placeholder:text-primary/50 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        {/* ✅ Direction Toggle */}
        <Button
          onClick={toggleDir}
          title={`Switch to ${dir === "rtl" ? "LTR" : "RTL"}`}
          variant="secondary"
          className="flex items-center cursor-pointer gap-2 rounded-full bg-muted px-3 py-1.5 text-primary hover:bg-muted/80"
        >
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">{dir === "rtl" ? "Fa" : "En"}</span>
        </Button>

        {/* ✅ Theme Toggle */}
        {isMounted && (
          <Button
            className="rounded-full cursor-pointer text-primary"
            variant="secondary"
            size="icon"
            onClick={toggleTheme}
            title={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        )}

        <Button
          variant="secondary"
          size={'icon'}
          className="flex items-center cursor-pointer gap-2 rounded-full px-3 py-1.5 text-primary hover:bg-muted/80"
        >
          <BellDot className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
