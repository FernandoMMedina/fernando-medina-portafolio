import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { useState } from "react";
import { Mail, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Introduce tu nombre").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Cuéntame un poco más (mín. 10 caracteres)").max(2000),
});

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Solicita tu presupuesto web | Alex Dev" },
      { name: "description", content: "Cuéntame tu proyecto y recibe una propuesta personalizada en menos de 48 horas. Presupuesto sin compromiso." },
      { property: "og:title", content: "Contacto | Alex Dev" },
      { property: "og:description", content: "Solicita presupuesto para tu web." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      message: fd.get("message"),
    });
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <Section eyebrow="Contacto" title="Hablemos de tu proyecto" description="Rellena el formulario y te responderé en menos de 48 horas con una propuesta inicial.">
      <div className="grid lg:grid-cols-[1fr,1.3fr] gap-10">
        <div className="space-y-6">
          {[
            { icon: Mail, t: "Email", d: "hola@alexdev.com" },
            { icon: MessageSquare, t: "Respuesta rápida", d: "Te contesto en menos de 48 horas." },
            { icon: Clock, t: "Disponibilidad", d: "Aceptando proyectos para los próximos meses." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-card space-y-5" noValidate>
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">¡Mensaje enviado!</h3>
              <p className="mt-2 text-muted-foreground">Te responderé pronto. Gracias por confiar.</p>
            </div>
          ) : (
            <>
              <Field label="Nombre" name="name" placeholder="Tu nombre" error={errors.name} required />
              <Field label="Email" name="email" type="email" placeholder="tu@email.com" error={errors.email} required />
              <Field label="Empresa" name="company" placeholder="Tu empresa (opcional)" error={errors.company} />
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Mensaje <span className="text-destructive">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={2000}
                  placeholder="Cuéntame sobre tu proyecto…"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-foreground py-3.5 text-sm font-medium text-background hover:opacity-90 transition-smooth shadow-elegant"
              >
                Solicitar presupuesto
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Al enviar aceptas que use tus datos para responderte. No spam, nunca.
              </p>
            </>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, error, required }: {
  label: string; name: string; type?: string; placeholder?: string; error?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
