import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTA } from "@/components/site/CTA";
import { services, projects, testimonials } from "@/components/site/data";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Dev — Desarrollo web con IA, SEO y automatización" },
      { name: "description", content: "Webs modernas que venden. Desarrollo web freelance, SEO técnico y automatización con IA para pequeñas empresas y negocios locales." },
      { property: "og:title", content: "Alex Dev — Webs que venden" },
      { property: "og:description", content: "Desarrollo web freelance con IA, SEO y automatización." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Sobre mí"
        title="Desarrollador web obsesionado con resultados"
        description="Soy Alex, desarrollador freelance especializado en crear webs modernas, rápidas y optimizadas. Combino diseño, código limpio, SEO técnico e IA para que tu negocio crezca online."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Experiencia", d: "+3 años creando webs para pymes, startups y negocios locales." },
            { t: "Especialidades", d: "React, Next.js, SEO técnico, CRO, automatización con IA." },
            { t: "Stack", d: "TypeScript, Tailwind, Supabase, OpenAI, Vercel y más." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-semibold mb-2">{b.t}</h3>
              <p className="text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="bg-surface/60">
        <Section
          eyebrow="Servicios"
          title="Todo lo que tu negocio necesita online"
          description="Desde la idea hasta el lanzamiento y la optimización continua."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
          <div className="mt-10">
            <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-smooth">
              Ver todos los servicios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </div>

      <Section
        eyebrow="Proyectos"
        title="Trabajos que generan resultados"
        description="Una selección de proyectos recientes diseñados, desarrollados y optimizados."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((p) => <ProjectCard key={p.name} {...p} />)}
        </div>
        <div className="mt-10">
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-smooth">
            Ver todos los proyectos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <div className="bg-surface/60">
        <Section
          eyebrow="Testimonios"
          title="Lo que dicen mis clientes"
          center
        >
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                <Quote className="h-6 w-6 text-primary mb-4" />
                <blockquote className="text-base md:text-lg text-foreground leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>

      <CTA />
    </>
  );
}
