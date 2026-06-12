import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Technology } from "@/components/site/Technology";
import { Products } from "@/components/site/Products";
import { TechData } from "@/components/site/TechData";
import { Partners } from "@/components/site/Partners";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proteins — Biotecnologia Sustentável | Proteína BSF" },
      {
        name: "description",
        content:
          "Proteins transforma resíduos orgânicos em proteína sustentável, óleo e fertilizante através da bioconversão de larvas BSF. Indústria circular de alto desempenho.",
      },
      { property: "og:title", content: "Proteins — Biotecnologia Sustentável" },
      {
        property: "og:description",
        content:
          "Bioconversão BSF para proteína, óleo e fertilizante. Indústria circular do futuro.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technology />
          <Products />
          <TechData />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
