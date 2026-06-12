import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const rows = [
  ["Proteína bruta", "≥ 60%", "62.4%", "Padrão FAO"],
  ["Lipídios totais", "≤ 12%", "10.8%", "ISO 6492"],
  ["Ácido láurico (C12)", "≥ 35%", "38.2%", "GC-FID"],
  ["Cinzas", "≤ 8%", "6.1%", "AOAC 942.05"],
  ["Umidade", "≤ 8%", "5.4%", "AOAC 930.15"],
  ["Quitina", "5–9%", "7.2%", "HPLC"],
];

const kpis = [
  { v: "−85%", l: "Emissões de CO₂" },
  { v: "−98%", l: "Uso de água" },
  { v: "1.500×", l: "Eficiência por m²" },
  { v: "100%", l: "Resíduos reaproveitados" },
];

export function TechData() {
  const { t } = useI18n();
  return (
    <section
      id="data"
      className="relative py-32 md:py-44 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker={t("data.kicker")} title={t("data.title")} />

        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 overflow-hidden rounded-2xl border border-border/60 bg-surface/40"
          >
            <div className="flex items-center justify-between border-b border-border/60 bg-surface/60 px-6 py-4">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-neon">
                PRT-01 · Composição nutricional
              </div>
              <div className="font-mono text-[10px] text-muted-foreground">
                Lote ref. 2025/Q1
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <tr className="border-b border-border/60">
                    <th className="px-6 py-4 font-medium">Parâmetro</th>
                    <th className="px-6 py-4 font-medium">Especificação</th>
                    <th className="px-6 py-4 font-medium">Resultado</th>
                    <th className="px-6 py-4 font-medium">Método</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={r[0]}
                      className={`border-b border-border/40 ${i % 2 ? "bg-surface/30" : ""}`}
                    >
                      <td className="px-6 py-4 text-foreground/90">{r[0]}</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {r[1]}
                      </td>
                      <td className="px-6 py-4 text-neon font-mono">{r[2]}</td>
                      <td className="px-6 py-4 text-muted-foreground font-mono text-xs">
                        {r[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* KPIs */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {kpis.map((k, i) => (
              <motion.div
                key={k.l}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-surface/60 to-card p-6"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-neon/10 blur-2xl" />
                <div className="font-display text-3xl text-gradient">{k.v}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {k.l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
