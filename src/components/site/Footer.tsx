import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative border-t border-border/60 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_18px_var(--color-neon)]" />
              <span className="font-display text-xl font-semibold">
                Proteins<span className="text-neon">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {t("footer.tag")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-neon">
                Empresa
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#tech" className="hover:text-foreground">
                    Tecnologia
                  </a>
                </li>
                <li>
                  <a href="#data" className="hover:text-foreground">
                    Dados
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-neon">
                Produtos
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <a href="#products" className="hover:text-foreground">
                    Proteína
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-foreground">
                    Óleo
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-foreground">
                    Frass
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-neon">
                Contato
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>comercial@proteins.bio</li>
                <li>+55 44 94040-0000</li>
                <li>Toledo · BR</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Proteins Biotech. Todos os direitos
            reservados.
          </div>
          <div className="font-mono">v1.0 · Made with circular intent</div>
        </div>
      </div>
    </footer>
  );
}
