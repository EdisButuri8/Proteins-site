import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import facility from "@/assets/facility.jpg";
import { useI18n } from "@/lib/i18n";

const steps = [
  {
    n: "01",
    t: "Captação de resíduos",
    d: "Resíduos orgânicos pré-consumo são coletados de cadeias industriais parceiras.",
  },
  {
    n: "02",
    t: "Bioconversão BSF",
    d: "Larvas transformam o substrato em biomassa rica em proteína em 12 dias.",
  },
  {
    n: "03",
    t: "Separação industrial",
    d: "Processo automatizado separa larva, frass e biomassa residual.",
  },
  {
    n: "04",
    t: "Refino & Produtos",
    d: "Proteína, óleo e fertilizante são refinados, padronizados e certificados.",
  },
  {
    n: "05",
    t: "Ciclo fechado",
    d: "Subprodutos voltam à terra, fechando o loop da economia circular.",
  },
];

export function Technology() {
  const { t } = useI18n();
  return (
    <section
      id="tech"
      className="relative py-32 md:py-44 border-t border-border/60"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={facility}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("tech.kicker")}
          title={t("tech.title")}
          sub={t("tech.sub")}
        />

        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-10 hidden lg:block divider-line" />
          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="hidden lg:block absolute top-9 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-neon shadow-[0_0_18px_var(--color-neon)]" />
                <div className="rounded-2xl border border-border/60 bg-surface/60 backdrop-blur p-6 lg:mt-20 hover:border-neon/40 transition-colors h-full">
                  <div className="font-mono text-xs text-neon">STEP {s.n}</div>
                  <h3 className="mt-4 font-display text-xl">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-24 grid gap-6 md:grid-cols-3"
        >
          {[
            { k: "12 dias", v: "Ciclo completo da larva ao produto refinado." },
            { k: "−85% CO₂", v: "Comparado a fontes proteicas tradicionais." },
            { k: "200kg/m²", v: "Densidade de biomassa em sistema vertical." },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-8"
            >
              <div className="font-display text-4xl text-gradient">{m.k}</div>
              <div className="mt-3 text-sm text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
