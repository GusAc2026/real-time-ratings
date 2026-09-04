import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import ratingapp from "@/assets/ratingapp.jpg";

export const Route = createFileRoute("/rating-app")({
  head: () => ({
    meta: [
      { title: "Rating App | Audiencia Activa Verificable en tiempo real" },
      {
        name: "description",
        content:
          "Rating App entrega datos reales de rating en tiempo real, con métricas por edad, ubicación y preferencias, y un panel de control avanzado.",
      },
      { property: "og:title", content: "Rating App | Datos reales de rating en tiempo real" },
      {
        property: "og:description",
        content: "Partner de servicios de emisoras de radio, TV y contenido audiovisual.",
      },
    ],
  }),
  component: Page,
});

const beneficios = [
  { t: "Datos reales, no estimaciones", d: "Mientras otros estiman, damos acceso a rating real y en vivo." },
  { t: "Métricas personalizadas", d: "Edad, ubicación, fidelidad y preferencias de cada usuario." },
  { t: "Panel de control avanzado", d: "Reportes detallados, estadísticas minuto a minuto y análisis histórico." },
  { t: "Gráficos interactivos", d: "Interfaz simple con visualizaciones exclusivas para cada medio." },
  { t: "Comunidad ID", d: "Audiencia contenida que representa, sinergiza e interactúa con los medios." },
  { t: "Web & Panel", d: "Ecosistema completo disponible en www.ratingapp.com.ar" },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Servicio · 2020-2026"
        title="Rating App"
        description="Enfocados en el desarrollo de Rating App: el partner de servicios de emisoras radiales, televisivas y de contenido audiovisual, alimentado por Audiencia Activa Verificable (AAV) en tiempo real."
        image={ratingapp}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <img
          src={ratingapp}
          alt="Rating App mostrando el panel de control de audiencia"
          loading="lazy"
          width={1400}
          height={900}
          className="rounded-3xl shadow-glow"
        />
        <div>
          <h2 className="text-3xl font-bold">¿Cómo comenzó?</h2>
          <p className="mt-5 text-muted-foreground">
            Somos un equipo de emprendedores tecnológicos. Identificamos la oportunidad de
            incorporar nuevas tecnologías especializadas en servicios de medición de audiencias en
            los medios de comunicación de Argentina y el mundo, con acceso a mediciones específicas,
            información transparente en tiempo real y usuarios segmentados por zona, localización,
            rango etario y fidelidad.
          </p>
          <p className="mt-4 text-muted-foreground">
            Así nació Rating App, con un exclusivo panel de control interactivo donde impacta la
            Audiencia Activa Verificable (AAV).
          </p>
          <a
            href="https://www.ratingapp.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-sky-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Visitar ratingapp.com.ar
          </a>
        </div>
      </section>

      <section className="bg-soft-gradient py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-bold">Por qué elegir Rating App</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <div key={b.t} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h3 className="text-lg font-semibold">{b.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contacto"
            className="mt-10 inline-block rounded-full bg-sky-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Solicitar acceso al panel
          </Link>
        </div>
      </section>
    </div>
  );
}
