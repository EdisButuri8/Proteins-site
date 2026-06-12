import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-105 motion-safe:animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-32 right-[-10%] h-[60vh] w-[60vh] rounded-full bg-neon/15 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-tech/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-neon/90 font-mono"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_12px_var(--color-neon)]" />
          {t("hero.kicker")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          <span className="text-gradient">{t("hero.title")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#tech"
            className="group inline-flex items-center gap-3 rounded-full bg-neon px-7 py-4 text-xs uppercase tracking-[0.18em] font-semibold text-background hover:bg-neon-soft transition-colors"
          >
            {t("hero.cta1")}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-surface/40 backdrop-blur px-7 py-4 text-xs uppercase tracking-[0.18em] text-foreground hover:bg-surface transition-colors"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4"
        >
          {[
            { v: "70%", l: "Menos água que pecuária tradicional" },
            { v: "1.500x", l: "Mais eficiência por m²" },
            { v: "0", l: "Resíduo enviado a aterros" },
            { v: "100%", l: "Origem orgânica rastreável" },
          ].map((s) => (
            <div key={s.v} className="bg-background/80 backdrop-blur p-6">
              <div className="font-display text-3xl md:text-4xl text-neon">
                {s.v}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 z-10 hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-neon to-transparent" />
      </div>
    </section>
  );
}
