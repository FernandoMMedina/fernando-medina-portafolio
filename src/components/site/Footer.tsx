import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 mt-24">
      <div className="mx-auto max-w-6xl container-px py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-gradient text-primary-foreground text-sm font-bold">F</span>
            Fer Dev
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Desarrollo web con IA, SEO y automatización para empresas y organizaciones que quieren crecer online.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/servicios" className="hover:text-foreground transition-smooth">Servicios</Link></li>
            <li><Link to="/proyectos" className="hover:text-foreground transition-smooth">Proyectos</Link></li>
            <li><Link to="/proceso" className="hover:text-foreground transition-smooth">Proceso</Link></li>
            <li><Link to="/faq" className="hover:text-foreground transition-smooth">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>fernandomartinmedina@gmail.com</li>
            <li>Disponible para nuevos proyectos</li>
            <li><Link to="/contacto" className="text-foreground font-medium hover:underline">Solicitar presupuesto →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl container-px py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Fer Dev. Todos los derechos reservados.</p>
          <p>
</p>
        </div>
      </div>
    </footer>
  );
}
