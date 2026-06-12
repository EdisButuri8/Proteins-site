import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  kicker,
  title,
  sub,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-neon/90 font-mono ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-neon/60" />
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-base text-muted-foreground md:text-lg"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
