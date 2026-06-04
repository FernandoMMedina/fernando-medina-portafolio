import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="relative mx-auto max-w-3xl container-px pt-20 pb-16 md:pt-28 md:pb-20 text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Desarrollo web
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Webs que <span className="text-gradient">venden</span>, no solo se ven bien.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Diseño y desarrollo sitios web modernos para empresas y organizaciones que quieren atraer clientes,
            posicionar en Google y automatizar su negocio con IA.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90 transition-smooth shadow-elegant"
            >
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-smooth" />
            </Link>
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-muted transition-smooth"
            >
              Ver proyectos
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div><strong className="text-foreground text-lg">5+</strong><br/>Proyectos entregados</div>
            <div className="h-8 w-px bg-border" />
            <div><strong className="text-foreground text-lg">98%</strong><br/>Clientes satisfechos</div>
            <div className="h-8 w-px bg-border" />
            <div><strong className="text-foreground text-lg">3x</strong><br/>Conversión media</div>
          </div>
        </div>
      </div>
    </section>
  );
}

