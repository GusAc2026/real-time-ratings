import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <span className="font-display text-xl font-bold">I+D · Inteligencia Digital</span>
          <p className="mt-3 max-w-sm text-sm text-deep-foreground/70">
            Consultora tecnológica de servicios especializada en medición de audiencias de medios de
            comunicación en Argentina, proyectada a mercados globales.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-glow">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-deep-foreground/80">
            <li>
              <Link to="/quienes-somos">Quiénes somos</Link>
            </li>
            <li>
              <Link to="/areas">Áreas de innovación</Link>
            </li>
            <li>
              <Link to="/consultoria-it">Consultoría IT</Link>
            </li>
            <li>
              <Link to="/desarrollo-software">Desarrollo de software</Link>
            </li>
            <li>
              <Link to="/rating-app">Rating App</Link>
            </li>
            <li>
              <Link to="/comunidad-app">Comunidad & App TV Mundial</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-glow">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-deep-foreground/80">
            <li>
              WhatsApp:{" "}
              <a href="https://wa.me/5491150455405" target="_blank" rel="noopener noreferrer">
                +54 9 11 5045-5405
              </a>
            </li>
            <li>
              Web:{" "}
              <a href="https://www.ratingapp.com.ar" target="_blank" rel="noopener noreferrer">
                www.ratingapp.com.ar
              </a>
            </li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-deep-foreground/10 px-5 py-6 text-center text-xs text-deep-foreground/60">
        © {new Date().getFullYear()} I+D Inteligencia Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
}
