import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import consultoria from "@/assets/consultoria.jpg";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | I+D Inteligencia Digital" },
      {
        name: "description",
        content:
          "Dejanos tu consulta y coordinamos una reunión. Escribinos por WhatsApp al +54 9 11 5045-5405.",
      },
      { property: "og:title", content: "Contacto | I+D Inteligencia Digital" },
      {
        property: "og:description",
        content: "Formulario de consulta directo a nuestro WhatsApp comercial.",
      },
    ],
  }),
  component: Page,
});

const WHATSAPP = "5491150455405";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre y apellido").max(100),
  telefono: z.string().trim().min(6, "Ingresá un teléfono válido").max(30),
  email: z.string().trim().email("Ingresá un e-mail válido").max(255),
  web: z.string().trim().max(255).optional(),
  mensaje: z.string().trim().min(5, "Contanos en qué podemos ayudarte").max(1000),
});

const fields = [
  { name: "nombre", label: "Nombre y Apellido", type: "text", required: true },
  { name: "telefono", label: "Tel / Cel", type: "tel", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "web", label: "Web", type: "text", required: false },
] as const;

function Page() {
  const [values, setValues] = useState({
    nombre: "",
    telefono: "",
    email: "",
    web: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const d = result.data;
    const text = [
      "Consulta desde la web de I+D Inteligencia Digital",
      `Nombre y Apellido: ${d.nombre}`,
      `Tel/Cel: ${d.telefono}`,
      `E-mail: ${d.email}`,
      `Web: ${d.web || "-"}`,
      `Consulta: ${d.mensaje}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div>
      <PageHero
        eyebrow="Contacto"
        title="Déjanos tu consulta"
        description="Completá el formulario y tu mensaje llega directo a nuestro WhatsApp comercial. Respondemos a la brevedad."
        image={consultoria}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-soft"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((f) => (
              <label key={f.name} className="block text-sm font-medium">
                {f.label}
                {f.required && <span className="text-primary"> *</span>}
                <input
                  type={f.type}
                  value={values[f.name]}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  maxLength={255}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
                {errors[f.name] && (
                  <span className="mt-1 block text-xs text-destructive">{errors[f.name]}</span>
                )}
              </label>
            ))}
          </div>

          <label className="mt-5 block text-sm font-medium">
            ¿En qué podemos ayudarte?<span className="text-primary"> *</span>
            <textarea
              rows={5}
              maxLength={1000}
              value={values.mensaje}
              onChange={(e) => setValues((v) => ({ ...v, mensaje: e.target.value }))}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
            {errors["mensaje"] && (
              <span className="mt-1 block text-xs text-destructive">{errors["mensaje"]}</span>
            )}
          </label>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-sky-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Enviar por WhatsApp
          </button>
        </form>

        <aside className="rounded-3xl bg-hero-gradient p-8 text-deep-foreground shadow-glow">
          <h2 className="text-2xl font-bold">Hablemos de tu proyecto</h2>
          <p className="mt-4 text-sm text-deep-foreground/85">
            Medición de audiencias, encuestas de mercado, consultoría IT y desarrollo de software y
            sistemas para empresas, medios y organismos públicos y privados.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <p>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-glow"
              >
                +54 9 11 5045-5405
              </a>
            </p>
            <p>
              Web:{" "}
              <a
                href="https://www.ratingapp.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-glow"
              >
                www.ratingapp.com.ar
              </a>
            </p>
            <p>Buenos Aires, Argentina</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
