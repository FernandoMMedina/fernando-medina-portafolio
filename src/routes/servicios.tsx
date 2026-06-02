import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTA } from "@/components/site/CTA";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Desarrollo web, SEO y automatización IA | Alex Dev" },
      { name: "description", content: "Servicios de desarrollo web, landing pages, SEO técnico, optimización de conversión (CRO) y automatización con IA para pymes." },
      { property: "og:title", content: "Servicios | Alex Dev" },
      { property: "og:description", content: "Desarrollo web, SEO técnico y automatización con IA." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <Section
        eyebrow="Servicios"
        title="Soluciones digitales que generan ROI"
        description="Diseño, desarrollo y crecimiento. Todo lo que necesitas para que tu web atraiga clientes y se convierta en tu mejor comercial."
        center
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </Section>
      <CTA />
    </>
  );
}
