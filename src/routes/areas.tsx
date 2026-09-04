import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import mediciones from "@/assets/mediciones.jpg";
import encuestas from "@/assets/encuestas.jpg";
import consultoria from "@/assets/consultoria.jpg";
import software from "@/assets/software.jpg";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Áreas de innovación y estímulo digital | I+D Inteligencia Digital" },
      {
        name: "description",
        content:
          "Medición de empresas y consumo, encuestas de mercado, consultoría IT y desarrollo de software y sistemas.",
      },
      { property: "og:title", content: "Áreas de innovación | I+D Inteligencia Digital" },
      {
        property: "og:description",
        content: "Cuatro áreas de servicio para medios, empresas y organismos.",
      },
    ],
  }),
  component: Page,
});

const areas = [
  {
    to: "/mediciones-consumo" as const,
    img: mediciones,
    t: "Medición de Empresas, Organismos y acciones de Consumo",
    d: "Medimos alcance, impacto y comportamiento de consumo con paneles customizados y tableros de decisión.",
  },
  {
    to: "/encuestas-mercado" as const,
    img: encuestas,
    t: "Medición de encuestas de mercado",
    d: "Herramientas de análisis y estadísticas tecnológicas para organismos públicos y privados.",
  },
  {
    to: "/consultoria-it" as const,
    img: consultoria,
    t: "Consultoría IT",
    d: "Estrategia tecnológica, arquitectura de datos y acompañamiento en la transformación digital.",
  },
  {
    to: "/desarrollo-software" as const,
    img: software,
    t: "Desarrollo de Software y Sistemas",
    d: "Aplicaciones web, móviles y paneles de control a medida, con integración de datos en tiempo real.",
  },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Áreas"
        title="Áreas de innovación y estímulo digital"
        description="Servicios especializados que combinan medición, estadística y desarrollo tecnológico para acelerar el crecimiento de medios, empresas y organismos."
        image={mediciones}
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-2">
        {areas.map((a) => (
          <Link
            key={a.t}
            to={a.to}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
          >
            <img
              src={a.img}
              alt={a.t}
              loading="lazy"
              width={1400}
              height={900}
              className="h-56 w-full object-cover"
            />
            <div className="p-8">
              <h2 className="text-xl font-semibold">{a.t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{a.d}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-primary">
                Ver detalle →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
