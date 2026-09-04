import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import mediciones from "@/assets/mediciones.jpg";

export const Route = createFileRoute("/mediciones-consumo")({
  head: () => ({
    meta: [
      { title: "Medición de empresas, organismos y consumo | I+D Inteligencia Digital" },
      {
        name: "description",
        content:
          "Medimos acciones de consumo, alcance e impacto de marcas, medios y organismos con bases de datos customizadas.",
      },
      { property: "og:title", content: "Medición de empresas, organismos y consumo" },
      {
        property: "og:description",
        content: "Bases de datos customizadas y tableros de decisión para medir consumo real.",
      },
    ],
  }),
  component: Page,
});

const items = [
  {
    t: "Audiencia Activa Verificable (AAV)",
    d: "Datos aportados por usuarios reales de la Comunidad ID, verificables y auditables, no estimaciones.",
  },
  {
    t: "Segmentación profunda",
    d: "Zona, localización, rango etario, hábitos, fidelidad y preferencias de consumo.",
  },
  {
    t: "Publicidad exterior y vía pública",
    d: "Medición de exposición e impacto de campañas en circuitos urbanos y digital out of home.",
  },
  {
    t: "Bases de datos customizadas",
    d: "Modelos de datos diseñados según los indicadores que cada empresa u organismo necesita decidir.",
  },
  {
    t: "Reportes ejecutivos",
    d: "Informes minuto a minuto, comparativos históricos y alertas de desempeño.",
  },
  {
    t: "Integración con agencias",
    d: "Métricas listas para planificación de medios, pauta y evaluación de retorno.",
  },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Área"
        title="Medición de Empresas, Organismos y acciones de Consumo"
        description="Transformamos el comportamiento real de las audiencias y consumidores en indicadores accionables para la toma de decisiones estratégicas."
        image={mediciones}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.t} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-lg font-semibold">{i.t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </section>
      <div className="mx-auto max-w-7xl px-5 pb-10">
        <Link
          to="/contacto"
          className="inline-block rounded-full bg-sky-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Quiero medir mi negocio
        </Link>
      </div>
    </div>
  );
}
