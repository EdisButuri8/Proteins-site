import { useI18n } from "@/lib/i18n";

const names = [
  "AGROCORP",
  "BIOFEED",
  "NUTRIMAX",
  "TERRAFORMA",
  "AQUAVERDE",
  "GREENLAB",
  "CARGILON",
  "OCEANIC",
  "SOLARIS",
  "ECOLOGY+",
];

export function Partners() {
  const { t } = useI18n();
  return (
    <section
      id="partners"
      className="relative py-28 border-t border-border/60 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {t("partners.title")}
        </div>
      </div>
      <div className="mt-12 relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max marquee gap-16 px-8">
          {[...names, ...names].map((n, i) => (
            <div
              key={i}
              className="font-display text-3xl md:text-4xl tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
