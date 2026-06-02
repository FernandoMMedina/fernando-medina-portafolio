import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { faqs } from "@/components/site/data";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes — Presupuestos, plazos y SEO | Alex Dev" },
      { name: "description", content: "Respuestas a las dudas más frecuentes sobre presupuestos, plazos, SEO, mantenimiento y tecnologías utilizadas." },
      { property: "og:title", content: "FAQ | Alex Dev" },
      { property: "og:description", content: "Resuelve tus dudas antes de contactar." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Section
        eyebrow="FAQ"
        title="Preguntas frecuentes"
        description="Las respuestas a las dudas más habituales antes de empezar un proyecto."
        center
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-muted/40 transition-smooth"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-semibold text-foreground">{f.q}</h3>
                  {isOpen ? <Minus className="h-5 w-5 shrink-0 text-primary" /> : <Plus className="h-5 w-5 shrink-0 text-muted-foreground" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed -mt-1">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
      <CTA />
    </>
  );
}
