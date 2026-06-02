import { Code, LayoutTemplate, Search, TrendingUp, Sparkles, Wrench, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Code, LayoutTemplate, Search, TrendingUp, Sparkles, Wrench,
};

export function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  const Icon = icons[icon] ?? Code;
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 md:p-8 hover:shadow-card hover:-translate-y-1 transition-smooth">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground mb-5 group-hover:bg-primary-gradient group-hover:text-primary-foreground transition-smooth">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
