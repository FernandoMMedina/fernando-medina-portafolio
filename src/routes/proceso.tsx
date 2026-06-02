import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { process } from "@/components/site/data";

export const Route = createFileRoute("/proceso")({
  head: () => ({
    meta: [
      { title: "Proceso de trabajo — Cómo desarrollo tu web | Alex Dev" },
      { name: "description", content: "Conoce mi proceso en 4 pasos: descubrimiento, diseño, desarrollo y lanzamiento. Transparente y orientado a resultados." },
      { property: "og:title", content: "Proceso de trabajo | Alex Dev" },
      { property: "og:description", content: "Cómo desarrollo tu web en 4 pasos." },
      { property: "og:url", content: "/proceso" },
    ],
    links: [{ rel: "canonical", href: "/proceso" }],
  }),
  component: Proceso,
});

function Proceso() {
  return (
    <>
      <Section
        eyebrow="Proceso"
        title="Un método claro, sin sorpresas"
        description="Cada proyecto sigue 4 fases para garantizar calidad, plazos y resultados medibles."
        center
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={p.step} className="relative rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-card transition-smooth">
              <div className="text-5xl font-bold text-gradient mb-4">{p.step}</div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 h-px w-6 bg-border" />
              )}
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
