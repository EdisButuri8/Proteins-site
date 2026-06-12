import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";
import ProteinsMap from "../ProteinsMap";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 border-t border-border/60"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-80 w-80 rounded-full bg-neon/10 blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("contact.kicker")}
          title={<span className="text-gradient">{t("contact.title")}</span>}
          sub={t("contact.sub")}
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            {[
              { l: "Comercial B2B", v: "contato@proteins.bio.br", k: "EMAIL" },
              { l: "Instagram", v: "@proteins_oficial", k: "SOCIAL" },
              {
                l: "Telefone / WhatsApp",
                v: "+55 (45) 99916-3550",
                k: "PHONE",
              },
              { l: "Sede", v: "Biopark · Toledo PR", k: "HQ" },
            ].map((c) => (
              <div key={c.l} className="border-b border-border/60 pb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  {c.k}
                </div>
                <div className="mt-2 font-display text-xl">{c.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.l}</div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-border/60 bg-surface/40">
              <ProteinsMap />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl border border-border/60 bg-card/60 backdrop-blur p-8 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label={t("form.name")} name="name" />
              <Field label={t("form.company")} name="company" />

              <div className="md:col-span-2">
                <Field label={t("form.email")} name="email" type="email" />
              </div>

              <div className="md:col-span-2">
                <Field label={t("form.message")} name="message" textarea />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                {sent ? (
                  <span className="text-neon">{t("form.sent")}</span>
                ) : (
                  "Resposta em até 24h úteis."
                )}
              </p>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-neon px-7 py-4 text-xs uppercase tracking-[0.18em] font-semibold text-background hover:bg-neon-soft transition-colors"
              >
                {t("form.send")}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full bg-transparent border-b border-border/60 pt-6 pb-2 text-sm text-foreground placeholder-transparent focus:border-neon focus:outline-none transition-colors";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={label}
          rows={4}
          className={base}
          required
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          className={base}
          required
        />
      )}

      <label
        htmlFor={name}
        className="absolute left-0 top-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-1 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-neon transition-all"
      >
        {label}
      </label>
    </div>
  );
}
