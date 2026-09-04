import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import consultoria from "@/assets/consultoria.jpg";

export const Route = createFileRoute("/consultoria-it")({
  head: () => ({
    meta: [
      { title: "Consultoría IT | I+D Inteligencia Digital" },
      {
        name: "description",
        content:
          "Estrategia tecnológica, arquitectura de datos, ciberseguridad e integración de sistemas para empresas y organismos.",
      },
      { property: "og:title", content: "Consultoría IT | I+D Inteligencia Digital" },
      {
        property: "og:description",
        content: "Acompañamos la transformación digital con foco en negocio y resultados.",
      },
    ],
  }),
  component: Page,
});

const servicios = [
  { t: "Estrategia y roadmap IT", d: "Diagnóstico, priorización de inversiones y plan de adopción tecnológica." },
  { t: "Arquitectura de datos", d: "Modelos, data warehouse, integraciones y calidad de la información." },
  { t: "Business Intelligence", d: "Tableros ejecutivos, KPIs y automatización de reportes." },
  { t: "Ciberseguridad y compliance", d: "Buenas prácticas, resguardo de datos y control de accesos." },
  { t: "Optimización de procesos", d: "Automatización, reducción de costos operativos y eficiencia." },
  { t: "Gestión de proyectos", d: "Equipos dedicados, metodologías ágiles y entregas medibles." },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Servicio"
        title="Consultoría IT"
        description="Acompañamos a empresas, medios y organismos en decisiones tecnológicas de alto impacto: desde el diagnóstico hasta la puesta en producción."
        image={consultoria}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((s) => (
          <div key={s.t} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-lg font-semibold">{s.t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
      <div className="mx-auto max-w-7xl px-5 pb-10">
        <Link
          to="/desarrollo-software"
          className="inline-block rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary"
        >
          Ver desarrollo de software
        </Link>
      </div>
    </div>
  );
}
