import { type ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`mx-auto max-w-6xl container-px py-20 md:py-28 ${className}`}>
      {(eyebrow || title || description) && (
        <div className={`max-w-2xl mb-12 md:mb-16 ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-3">
              {eyebrow}
            </span>
          )}
          {title && <h2 className="text-3xl md:text-5xl font-semibold text-foreground">{title}</h2>}
          {description && <p className="mt-4 text-base md:text-lg text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
