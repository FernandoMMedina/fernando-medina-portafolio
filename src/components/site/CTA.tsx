import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl container-px py-20">
      <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-16 text-center shadow-elegant">
        <div className="absolute inset-0 bg-primary-gradient opacity-30" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            ¿Listo para llevar tu web al siguiente nivel?
          </h2>
          <p className="mt-4 text-base md:text-lg text-background/80 max-w-xl mx-auto">
            Cuéntame tu proyecto y recibe una propuesta personalizada en menos de 48 horas.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground hover:opacity-90 transition-smooth"
          >
            Solicitar presupuesto <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
