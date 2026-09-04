import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | I+D Inteligencia Digital" },
      {
        name: "description",
        content:
          "Consultora tecnológica de servicios dedicada a la medición de audiencias en medios de comunicación de Argentina y mercados globales.",
      },
      { property: "og:title", content: "Quiénes somos | I+D Inteligencia Digital" },
      {
        property: "og:description",
        content: "Equipo de emprendedores tecnológicos con misión, visión y valores claros.",
      },
    ],
  }),
  component: Page,
});

const pilares = [
  {
    t: "Misión",
    d: "Brindar información de audiencia transparente, verificable y en tiempo real, que permita a medios, anunciantes y organismos tomar decisiones con evidencia.",
  },
  {
    t: "Visión",
    d: "Ser la referencia regional en medición digital de audiencias, expandiendo nuestro ecosistema tecnológico a mercados globales.",
  },
  {
    t: "Valores",
    d: "Transparencia, innovación permanente, rigor metodológico, confidencialidad de los datos y compromiso con cada cliente.",
  },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Quiénes somos"
        title="Somos I+D, Inteligencia Digital"
        description="Una consultora tecnológica especializada en servicios, dedicada a realizar mediciones de audiencia en los medios de comunicación en Argentina y proyectada a otros mercados globales: televisión, radio, publicidad exterior, streaming, periódicos online, TGI (Target Group Index) y agencias publicitarias. Asistimos asimismo a organismos públicos y privados."
        image={team}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <img
          src={team}
          alt="Equipo de I+D Inteligencia Digital trabajando en oficina"
          loading="lazy"
          width={1400}
          height={900}
          className="rounded-3xl shadow-glow"
        />
        <div>
          <h2 className="text-3xl font-bold">Un equipo de emprendedores tecnológicos</h2>
          <p className="mt-5 text-muted-foreground">
            Identificamos la oportunidad de incorporar nuevas tecnologías especializadas en
            servicios de medición de audiencias, con acceso a mediciones específicas, información
            transparente en tiempo real y usuarios segmentados por zona, localización, rango etario
            y fidelidad.
          </p>
          <p className="mt-4 text-muted-foreground">
            Sobre esa base diseñamos una poderosa herramienta dirigida a empresas y organismos que
            requieren bases de datos customizadas para la toma de decisiones, e incorporamos
            usuarios en Comunidad ID: audiencia contenida que representa, sinergiza e interactúa con
            los medios, aportando métricas claras y detalladas.
          </p>
        </div>
      </section>

      <section className="bg-soft-gradient py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3">
          {pilares.map((p) => (
            <div key={p.t} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-gradient">{p.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
