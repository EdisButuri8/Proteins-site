import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import protein from "@/assets/protein.jpg";
import oil from "@/assets/oil.jpg";
import frass from "@/assets/frass.jpg";
import { useI18n } from "@/lib/i18n";

const products = [
  {
    img: protein,
    code: "PRT-01",
    name: "Proteína BSF",
    tag: "Nutrição animal",
    desc: "Farinha proteica de alta digestibilidade com perfil completo de aminoácidos para aquicultura, pets e aves.",
    bullets: [
      "≥ 60% proteína bruta",
      "Rico em lauric acid",
      "Substituto direto de farinha de peixe",
    ],
  },
  {
    img: oil,
    code: "OIL-02",
    name: "Óleo Lipídico",
    tag: "Energia & Saúde",
    desc: "Óleo funcional rico em ácido láurico, com ação antimicrobiana natural para rações e bioenergia.",
    bullets: [
      "≥ 35% ácido láurico",
      "Aplicação em ração e biofuel",
      "Padrão industrial premium",
    ],
  },
  {
    img: frass,
    code: "FRS-03",
    name: "Frass — Fertilizante",
    tag: "Agricultura regenerativa",
    desc: "Fertilizante orgânico rico em nutrientes e quitina, ativador biológico do solo para agricultura de precisão.",
    bullets: [
      "NPK balanceado",
      "Estimulador microbiano",
      "100% orgânico certificado",
    ],
  },
];

export function Products() {
  const { t } = useI18n();
  return (
    <section
      id="products"
      className="relative py-32 md:py-44 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("products.kicker")}
          title={t("products.title")}
        />

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 hover:border-neon/40 transition-colors"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                  {p.code}
                </div>
                <div className="absolute top-5 right-5 rounded-full border border-border/60 bg-background/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {p.tag}
                </div>
              </div>
              <div className="relative p-7 -mt-8">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-foreground/90"
                    >
                      <span className="mt-2 h-px w-3 bg-neon" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>Ficha técnica</span>
                  <span className="text-neon">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
