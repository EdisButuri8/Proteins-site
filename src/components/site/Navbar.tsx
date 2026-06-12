import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n, type Lang } from "@/lib/i18n";

const links = [
  { href: "#about", key: "nav.about" },
  { href: "#tech", key: "nav.tech" },
  { href: "#products", key: "nav.products" },
  { href: "#data", key: "nav.data" },
  { href: "#partners", key: "nav.partners" },
  { href: "#contact", key: "nav.contact" },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-neon/20 blur-md animate-pulse-glow" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_18px_var(--color-neon)]" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Proteins<span className="text-neon">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-surface/40 p-0.5 text-[11px] uppercase tracking-wider">
            {(["pt", "es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === l ? "bg-neon text-background font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-foreground hover:bg-neon hover:text-background transition-all"
          >
            {t("nav.cta")}
            <span aria-hidden>→</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60"
            aria-label="Menu"
          >
            <span className="block h-px w-5 bg-foreground relative before:absolute before:-top-1.5 before:left-0 before:h-px before:w-5 before:bg-foreground after:absolute after:top-1.5 after:left-0 after:h-px after:w-5 after:bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
              >
                {t(l.key)}
              </a>
            ))}
            <div className="flex items-center gap-1 rounded-full border border-border/60 bg-surface/40 p-0.5 text-[11px] uppercase tracking-wider w-fit">
              {(["pt", "es", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full transition-colors ${
                    lang === l ? "bg-neon text-background font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
