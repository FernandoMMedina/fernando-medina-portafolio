import { ExternalLink } from "lucide-react";

export function ProjectCard({
  name, description, tech, image, url,
}: { name: string; description: string; tech: string[]; image: string; url: string }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-card transition-smooth">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={`Proyecto ${name}`}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{t}</span>
          ))}
        </div>
        <a
          href={url}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2 transition-smooth"
        >
          Ver proyecto <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
