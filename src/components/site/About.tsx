import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import larvae from "@/assets/larvae.jpg";
import { useI18n } from "@/lib/i18n";

const values = [
  {
    n: "01",
    t: "Missão",
    d: "Acelerar a transição da indústria para sistemas circulares de produção de proteína.",
  },
  {
    n: "02",
    t: "Visão",
    d: "Ser referência global em bioconversão e nutrição sustentável até 2030.",
  },
  {
    n: "03",
    t: "Valores",
    d: "Ciência, transparência, eficiência radical e respeito ao planeta.",
  },
];

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("about.kicker")}
          title={t("about.title")}
          sub={t("about.body")}
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60"
          >
            <img
              src={larvae}
              alt="Larva BSF"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                Hermetia illucens
              </div>
              <div className="mt-2 font-display text-2xl">
                Black Soldier Fly
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                A protagonista silenciosa da nova bioeconomia.
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 p-8 hover:border-neon/40 transition-colors"
              >
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-neon/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <div className="font-mono text-xs text-neon">{v.n}</div>
                    <h3 className="mt-3 font-display text-2xl">{v.t}</h3>
                    <p className="mt-3 max-w-xl text-muted-foreground">{v.d}</p>
                  </div>
                  <div className="text-3xl text-muted-foreground/40 group-hover:text-neon transition-colors">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
