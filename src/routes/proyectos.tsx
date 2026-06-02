import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTA } from "@/components/site/CTA";
import { projects } from "@/components/site/data";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Portfolio de desarrollo web | Alex Dev" },
      { name: "description", content: "Portfolio de proyectos web: SaaS, e-commerce, landing pages, portales inmobiliarios y soluciones con IA." },
      { property: "og:title", content: "Proyectos | Alex Dev" },
      { property: "og:description", content: "Portfolio de desarrollos web modernos." },
      { property: "og:url", content: "/proyectos" },
    ],
    links: [{ rel: "canonical", href: "/proyectos" }],
  }),
  component: Proyectos,
});

function Proyectos() {
  return (
    <>
      <Section
        eyebrow="Portfolio"
        title="Proyectos seleccionados"
        description="Una muestra del trabajo realizado para clientes en distintos sectores."
        center
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => <ProjectCard key={p.name} {...p} />)}
        </div>
      </Section>
      <CTA />
    </>
  );
}
