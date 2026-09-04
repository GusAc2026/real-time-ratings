import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import encuestas from "@/assets/encuestas.jpg";

export const Route = createFileRoute("/encuestas-mercado")({
  head: () => ({
    meta: [
      { title: "Encuestas de mercado y estadística | I+D Inteligencia Digital" },
      {
        name: "description",
        content:
          "Herramientas de análisis y estadísticas tecnológicas para organismos públicos y privados: diseño muestral, relevamiento y tableros.",
      },
      { property: "og:title", content: "Encuestas de mercado y estadística tecnológica" },
      {
        property: "og:description",
        content: "Relevamientos digitales, paneles y análisis estadístico avanzado.",
      },
    ],
  }),
  component: Page,
});

const pasos = [
  { n: "01", t: "Diseño muestral", d: "Definición de universo, cuotas y representatividad." },
  { n: "02", t: "Relevamiento digital", d: "Encuestas en app, web y panel de Comunidad ID." },
  { n: "03", t: "Procesamiento", d: "Depuración, ponderación y control de calidad del dato." },
  { n: "04", t: "Análisis y tablero", d: "Visualización interactiva y conclusiones accionables." },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Área"
        title="Medición de encuestas de mercado"
        description="Herramientas de análisis y estadísticas tecnológicas para organismos públicos y privados, con metodología rigurosa y resultados en tiempo récord."
        image={encuestas}
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <img
          src={encuestas}
          alt="Analista revisando resultados estadísticos de encuestas de mercado"
          loading="lazy"
          width={1400}
          height={900}
          className="rounded-3xl shadow-glow"
        />
        <div className="space-y-6">
          {pasos.map((p) => (
            <div key={p.n} className="flex gap-5">
              <span className="font-display text-2xl font-bold text-gradient">{p.n}</span>
              <div>
                <h2 className="font-semibold">{p.t}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </div>
          ))}
          <Link
            to="/contacto"
            className="inline-block rounded-full bg-sky-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Pedir propuesta
          </Link>
        </div>
      </section>
    </div>
  );
}
