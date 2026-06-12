import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "es" | "en";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  pt: {
    "nav.about": "Empresa",
    "nav.tech": "Tecnologia",
    "nav.products": "Produtos",
    "nav.data": "Dados Técnicos",
    "nav.partners": "Parcerias",
    "nav.contact": "Contato",
    "nav.cta": "Falar com especialista",
    "hero.kicker": "Biotecnologia • Economia Circular",
    "hero.title": "Transformando resíduos em proteína sustentável.",
    "hero.sub":
      "Bioconversão de larvas BSF em proteína de alto valor, óleo e fertilizante orgânico — para nutrir o futuro da indústria.",
    "hero.cta1": "Conheça a tecnologia",
    "hero.cta2": "Soluções B2B",
    "about.kicker": "Quem somos",
    "about.title": "A indústria do futuro começa onde a outra termina.",
    "about.body":
      "A Proteins é uma empresa brasileira de biotecnologia sustentável dedicada a fechar o ciclo dos nutrientes. Operamos plantas industriais de bioconversão que utilizam a larva da Black Soldier Fly (Hermetia illucens) para transformar resíduos orgânicos em ingredientes nobres para nutrição animal, energia e agricultura regenerativa.",
    "tech.kicker": "Tecnologia",
    "tech.title": "Um processo. Zero desperdício.",
    "tech.sub":
      "Nosso ciclo industrial reproduz, em escala, um dos mecanismos mais eficientes da natureza.",
    "products.kicker": "Produtos",
    "products.title": "Ingredientes de alto desempenho para a próxima geração.",
    "data.kicker": "Performance",
    "data.title": "Dados que sustentam decisões industriais.",
    "partners.title": "Parceiros que confiam na Proteins",
    "contact.kicker": "Contato",
    "contact.title": "Vamos construir o futuro da nutrição.",
    "contact.sub":
      "Para parcerias industriais, fornecimento B2B e investimentos.",
    "form.name": "Nome",
    "form.company": "Empresa",
    "form.email": "E-mail corporativo",
    "form.message": "Mensagem",
    "form.send": "Enviar mensagem",
    "form.sent": "Recebemos sua mensagem. Em breve entraremos em contato.",
    "footer.tag": "Bioconversão • Proteína sustentável • Economia circular",
  },
  es: {
    "nav.about": "Empresa",
    "nav.tech": "Tecnología",
    "nav.products": "Productos",
    "nav.data": "Datos Técnicos",
    "nav.partners": "Aliados",
    "nav.contact": "Contacto",
    "nav.cta": "Hablar con un experto",
    "hero.kicker": "Biotecnología • Economía Circular",
    "hero.title": "Transformando residuos en proteína sostenible.",
    "hero.sub":
      "Bioconversión de larvas BSF en proteína de alto valor, aceite y fertilizante orgánico — para nutrir el futuro de la industria.",
    "hero.cta1": "Conoce la tecnología",
    "hero.cta2": "Soluciones B2B",
    "about.kicker": "Quiénes somos",
    "about.title": "La industria del futuro empieza donde termina la otra.",
    "about.body":
      "Proteins es una empresa brasileña de biotecnología sostenible dedicada a cerrar el ciclo de los nutrientes. Operamos plantas industriales de bioconversión que usan la larva de la Black Soldier Fly (Hermetia illucens) para transformar residuos orgánicos en ingredientes nobles para nutrición animal, energía y agricultura regenerativa.",
    "tech.kicker": "Tecnología",
    "tech.title": "Un proceso. Cero desperdicio.",
    "tech.sub":
      "Nuestro ciclo industrial reproduce, a escala, uno de los mecanismos más eficientes de la naturaleza.",
    "products.kicker": "Productos",
    "products.title":
      "Ingredientes de alto desempeño para la próxima generación.",
    "data.kicker": "Performance",
    "data.title": "Datos que sostienen decisiones industriales.",
    "partners.title": "Aliados que confían en Proteins",
    "contact.kicker": "Contacto",
    "contact.title": "Construyamos el futuro de la nutrición.",
    "contact.sub": "Para alianzas industriales, suministro B2B e inversiones.",
    "form.name": "Nombre",
    "form.company": "Empresa",
    "form.email": "Correo corporativo",
    "form.message": "Mensaje",
    "form.send": "Enviar mensaje",
    "form.sent": "Hemos recibido tu mensaje. Te contactaremos pronto.",
    "footer.tag": "Bioconversión • Proteína sostenible • Economía circular",
  },
  en: {
    "nav.about": "Company",
    "nav.tech": "Technology",
    "nav.products": "Products",
    "nav.data": "Technical Data",
    "nav.partners": "Partners",
    "nav.contact": "Contact",
    "nav.cta": "Talk to an expert",
    "hero.kicker": "Biotechnology • Circular Economy",
    "hero.title": "Turning waste into sustainable protein.",
    "hero.sub":
      "Bioconversion of BSF larvae into high-value protein, oil and organic fertilizer — fueling the future of industry.",
    "hero.cta1": "Discover the technology",
    "hero.cta2": "B2B Solutions",
    "about.kicker": "About us",
    "about.title": "The industry of the future begins where the old one ends.",
    "about.body":
      "Proteins is a Brazilian sustainable biotech company dedicated to closing the nutrient loop. We operate industrial bioconversion plants using Black Soldier Fly (Hermetia illucens) larvae to transform organic waste into premium ingredients for animal nutrition, energy and regenerative agriculture.",
    "tech.kicker": "Technology",
    "tech.title": "One process. Zero waste.",
    "tech.sub":
      "Our industrial cycle reproduces, at scale, one of nature's most efficient mechanisms.",
    "products.kicker": "Products",
    "products.title": "High-performance ingredients for the next generation.",
    "data.kicker": "Performance",
    "data.title": "Data that supports industrial decisions.",
    "partners.title": "Partners who trust Proteins",
    "contact.kicker": "Contact",
    "contact.title": "Let's build the future of nutrition.",
    "contact.sub": "For industrial partnerships, B2B supply and investments.",
    "form.name": "Name",
    "form.company": "Company",
    "form.email": "Business email",
    "form.message": "Message",
    "form.send": "Send message",
    "form.sent": "We've received your message. We'll get back to you shortly.",
    "footer.tag": "Bioconversion • Sustainable protein • Circular economy",
  },
};

const I18nCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
}>({
  lang: "pt",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      localStorage.getItem("proteins.lang")) as Lang | null;
    if (saved && translations[saved]) setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("proteins.lang", l);
  };
  const t = (k: string) => translations[lang][k] ?? k;
  return (
    <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>
  );
}

export const useI18n = () => useContext(I18nCtx);
