import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, BarChart3, Code2, Globe2, LineChart, Radio, Tv, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import ratingapp from "@/assets/ratingapp.jpg";
import tvmundial from "@/assets/tvmundial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I+D Inteligencia Digital | Medición de audiencias en tiempo real" },
      {
        name: "description",
        content:
          "Datos reales de rating minuto a minuto para TV, radio, streaming, vía pública y diarios online. Consultoría IT y desarrollo de software a medida.",
      },
      { property: "og:title", content: "I+D Inteligencia Digital | Audiencia Activa Verificable" },
      {
        property: "og:description",
        content:
          "Mediciones de audiencia con métricas segmentadas por edad, ubicación y preferencias, sobre un panel de control avanzado.",
      },
    ],
  }),
  component: Index,
});

const metrics = [
  { value: "AAV", label: "Audiencia Activa Verificable" },
  { value: "24/7", label: "Datos en tiempo real" },
  { value: "2020-2026", label: "Trayectoria del desarrollo" },
  { value: "100%", label: "Gratis para la Comunidad ID" },
];

const areas = [
  {
    icon: BarChart3,
    title: "Medición de Empresas, Organismos y Consumo",
    text: "Medimos comportamiento, alcance y acciones de consumo con bases de datos customizadas para la toma de decisiones.",
    to: "/mediciones-consumo" as const,
  },
  {
    icon: LineChart,
    title: "Encuestas de Mercado y Estadística",
    text: "Herramientas de análisis y estadística tecnológica para organismos públicos y privados.",
    to: "/encuestas-mercado" as const,
  },
  {
    icon: Code2,
    title: "Consultoría IT, Software y Sistemas",
    text: "Arquitectura, integración de datos y desarrollo de plataformas críticas de alto rendimiento.",
    to: "/consultoria-it" as const,
  },
];

const medios = [
  { icon: Tv, label: "Televisión" },
  { icon: Radio, label: "Radio" },
  { icon: Activity, label: "Streaming" },
  { icon: Globe2, label: "Diarios online" },
  { icon: Users, label: "TGI · Target Group Index" },
  { icon: BarChart3, label: "Publicidad exterior" },
];

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero-gradient text-deep-foreground">
        <img
          src={hero}
          alt="Centro de control de datos de audiencia de I+D Inteligencia Digital"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-cyan-glow/40 bg-deep/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-glow">
              Inteligencia de audiencias
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
              Mientras otros estiman, nosotros medimos en tiempo real
            </h1>
            <p className="mt-6 max-w-xl text-lg text-deep-foreground/85">
              Somos I+D, Inteligencia Digital: consultora tecnológica de servicios dedicada a la
              medición de audiencias en los medios de comunicación de Argentina y proyectada a
              mercados globales.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="rounded-full bg-sky-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Solicitar una demo
              </Link>
              <Link
                to="/rating-app"
                className="rounded-full border border-deep-foreground/30 px-7 py-3 text-sm font-semibold transition-colors hover:bg-deep-foreground/10"
              >
                Conocer Rating App
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-deep-foreground/15 bg-deep/50 p-6 backdrop-blur-md"
              >
                <p className="font-display text-3xl font-bold text-cyan-glow">{m.value}</p>
                <p className="mt-2 text-sm text-deep-foreground/75">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Medimos <span className="text-gradient">todo el ecosistema de medios</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Asistimos a emisoras, agencias publicitarias, anunciantes y organismos públicos y privados
          con información transparente, segmentada y verificable.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {medios.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-gradient text-primary-foreground">
                <m.icon className="h-5 w-5" />
              </span>
              <span className="font-display font-semibold">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft-gradient py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-bold md:text-4xl">Áreas de innovación y estímulo digital</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {areas.map((a) => (
              <Link
                key={a.title}
                to={a.to}
                className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-gradient text-primary-foreground shadow-glow">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.text}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-primary">
                  Ver área →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <img
          src={ratingapp}
          alt="Panel de Rating App mostrando métricas de audiencia en vivo"
          loading="lazy"
          width={1400}
          height={900}
          className="rounded-3xl shadow-glow"
        />
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Servicio insignia
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Rating App</h2>
          <p className="mt-5 text-muted-foreground">
            Partner de servicios de emisoras radiales, televisivas y de contenido audiovisual, a
            partir de la información brindada por usuarios y Audiencia Activa Verificable en tiempo
            real. Métricas personalizadas por edad, ubicación y preferencias, con un panel de
            control avanzado de gráficos interactivos.
          </p>
          <Link
            to="/rating-app"
            className="mt-8 inline-block rounded-full bg-sky-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Explorar Rating App
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Comunidad ID
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">APP TV Mundial</h2>
          <p className="mt-5 text-muted-foreground">
            Acceso 100% gratuito para usuarios, con una oferta customizada de canales de TV, radios,
            streaming y diarios online. Disponible para descarga en Play Store y Android TV.
          </p>
          <Link
            to="/comunidad-app"
            className="mt-8 inline-block rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary"
          >
            Conocer la Comunidad
          </Link>
        </div>
        <img
          src={tvmundial}
          alt="App TV Mundial funcionando en un televisor con grilla de canales"
          loading="lazy"
          width={1400}
          height={900}
          className="order-1 rounded-3xl shadow-glow lg:order-2"
        />
      </section>

      <section className="mx-auto max-w-7xl px-5">
        <div className="rounded-3xl bg-hero-gradient px-8 py-14 text-center text-deep-foreground shadow-glow">
          <h2 className="text-3xl font-bold md:text-4xl">
            Convertí datos reales en decisiones rentables
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-deep-foreground/85">
            Diseñamos bases de datos customizadas y tableros a medida para empresas, medios y
            organismos.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-block rounded-full bg-background px-8 py-3 text-sm font-semibold text-foreground"
          >
            Dejanos tu consulta
          </Link>
        </div>
      </section>
    </div>
  );
}
