"use client";

import { ReactNode, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLoader } from "./loader-context";

export default function AppHydrationLoader({ children }: { children: ReactNode }) {
  const { loading } = useLoader();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHydrated(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (!hydrated || loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background transition-colors duration-500 z-[9999] fixed inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="flex flex-col items-center justify-center gap-6 rounded-2xl px-12 py-10 shadow-xl">
            <motion.div
              className="h-12 w-12 rounded-full border-4 border-muted animate-spin border-t-primary"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            />
          </Card>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
