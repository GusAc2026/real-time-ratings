import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import tvmundial from "@/assets/tvmundial.jpg";

export const Route = createFileRoute("/comunidad-app")({
  head: () => ({
    meta: [
      { title: "Comunidad & App TV Mundial | I+D Inteligencia Digital" },
      {
        name: "description",
        content:
          "App TV Mundial: acceso 100% gratuito a canales de TV, radios, streaming y diarios online. Disponible en Play Store y Android TV.",
      },
      { property: "og:title", content: "Comunidad ID & App TV Mundial" },
      {
        property: "og:description",
        content: "Ecosistema gratuito de TV, radios, streaming y diarios para nuestra comunidad.",
      },
    ],
  }),
  component: Page,
});

const features = [
  { t: "TV en vivo", d: "Grilla customizada de canales nacionales e internacionales." },
  { t: "Radios", d: "Emisoras AM, FM y online organizadas por género y región." },
  { t: "Streaming", d: "Contenidos audiovisuales y señales digitales emergentes." },
  { t: "Diarios online", d: "Buscador de medios digitales y portales de noticias." },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Comunidad & App"
        title="APP TV Mundial"
        description="Para los usuarios de nuestra Comunidad desarrollamos APP TV Mundial: servicio audiovisual, facilitador de contenidos y buscador de medios digitales, interconectado al ecosistema IT, TV, radios, streaming y diarios. 100% gratis."
        image={tvmundial}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Acceso 100% gratuito</h2>
          <p className="mt-5 text-muted-foreground">
            Los usuarios disfrutan de una oferta customizada de canales de TV, radios, streaming y
            diarios online, y al mismo tiempo forman la Comunidad ID: la audiencia que aporta las
            métricas claras y detalladas que hacen posible la Audiencia Activa Verificable.
          </p>
          <p className="mt-4 font-semibold">Disponible para la descarga en Play Store y Android TV.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sky-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Descargar en Play Store
            </a>
            <Link
              to="/contacto"
              className="rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary"
            >
              Sumar mi medio
            </Link>
          </div>
        </div>
        <img
          src={tvmundial}
          alt="App TV Mundial en un televisor con grilla de canales"
          loading="lazy"
          width={1400}
          height={900}
          className="rounded-3xl shadow-glow"
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.t} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-lg font-semibold">{f.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
