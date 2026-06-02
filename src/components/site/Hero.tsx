import { Link } from "@tanstack/react-router";
import avatar from "@/assets/avatar.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="relative mx-auto max-w-6xl container-px pt-20 pb-24 md:pt-32 md:pb-36 grid md:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Desarrollo web con IA · SEO · Automatización
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Webs que <span className="text-gradient">venden</span>, no solo se ven bonitas.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Diseño y desarrollo sitios web modernos para pequeñas empresas que quieren atraer clientes,
            posicionar en Google y automatizar su negocio con IA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div><strong className="text-foreground text-lg">25+</strong><br/>Proyectos entregados</div>
            <div className="h-8 w-px bg-border" />
            <div><strong className="text-foreground text-lg">98%</strong><br/>Clientes satisfechos</div>
            <div className="h-8 w-px bg-border" />
            <div><strong className="text-foreground text-lg">3x</strong><br/>Conversión media</div>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 bg-primary-gradient opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-card">
            <img
              src={avatar}
              alt="Alex Dev, desarrollador web freelance"
              width={768}
              height={768}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card border border-border shadow-card px-4 py-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Disponible para nuevos proyectos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
