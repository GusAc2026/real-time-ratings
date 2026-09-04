import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import software from "@/assets/software.jpg";

export const Route = createFileRoute("/desarrollo-software")({
  head: () => ({
    meta: [
      { title: "Desarrollo de software y sistemas | I+D Inteligencia Digital" },
      {
        name: "description",
        content:
          "Desarrollamos apps móviles, plataformas web y paneles de control a medida con datos en tiempo real.",
      },
      { property: "og:title", content: "Desarrollo de software y sistemas" },
      {
        property: "og:description",
        content: "Apps, plataformas web y paneles de control interactivos a medida.",
      },
    ],
  }),
  component: Page,
});

const stack = [
  { t: "Apps móviles", d: "Android, Android TV e iOS, con analítica de uso integrada." },
  { t: "Plataformas web", d: "Aplicaciones escalables, seguras y de alto rendimiento." },
  { t: "Paneles de control", d: "Dashboards interactivos con métricas en vivo e histórico." },
  { t: "APIs e integraciones", d: "Conexión con sistemas de terceros, CRM y herramientas de pauta." },
  { t: "Data & automatización", d: "Pipelines de datos, alertas y reportes automáticos." },
  { t: "Soporte y evolución", d: "Mantenimiento evolutivo con acuerdos de nivel de servicio." },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Servicio"
        title="Desarrollo de Software y Sistemas"
        description="Construimos productos digitales robustos: del prototipo al sistema en producción, con foco en performance, datos y experiencia de usuario."
        image={software}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((s) => (
          <div key={s.t} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-lg font-semibold">{s.t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
      <div className="mx-auto max-w-7xl px-5 pb-10">
        <Link
          to="/contacto"
          className="inline-block rounded-full bg-sky-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Contanos tu proyecto
        </Link>
      </div>
    </div>
  );
}
