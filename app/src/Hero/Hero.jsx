import { ChevronDown, Cpu } from "lucide-react";
import { animate } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import ImageHero from "../assets/zeus_milo_lulu.webp";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const start = window.scrollY;
    const end = el.offsetTop;

    animate(start, end, {
      duration: 1.2,
      ease: "easeInOut",
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
  };

  return (
    <section
      className="
        relative h-[calc(98svh-64px)] w-full overflow-hidden mx-auto
        bg-[var(--color-bg-secondary)] flex items-center justify-center isolation-isolate
      "
    >
      
      {/* BLOQUE IZQUIERDO: Contenido y Propuesta de Valor (50% exacto) */}
      <div className="animated-border">
        <div className="flex flex-col rounded-2xl  dark:bg-neutral-950 justify-center px-6 sm:px-12 lg:px-20 xl:px-28 py-12 z-10 selection:bg-[var(--color-primary)] selection:text-black">
          {/* Título Principal */}
          <h1 className="text-center text-4xl sm:text-5xl xl:text-6xl font-black mb-6 tracking-tight leading-[1.1] text-neutral-900 dark:text-white">
            Soluciones de Ingeniería, <br />
            <span className="text-[var(--color-primary)]">
              Diseñadas con IA
            </span>
          </h1>

          {/* Descripción */}
          <p className="mx-auto text-base sm:text-lg text-neutral-600 dark:text-gray-400 font-normal leading-relaxed max-w-md mb-8 text-center">
            Menos tareas manuales, más productividad. Con la{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              fidelidad y el compromiso de un aliado tecnológico
            </span>
            , automatizamos tus procesos, te acompañamos durante todo tu
            proyecto y te ayudamos a lograr tus objetivos de crecimiento.
          </p>

          {/* Botón */}
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <button
              type="button"
              onClick={() => goTo("products")}
              className="px-6 py-3 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-text)] font-semibold text-sm tracking-wide shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explorar Soluciones
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll inferior central */}
      <div className="absolute bottom-6 z-20 hidden md:block">
        <button
          type="button"
          onClick={() => goTo("products")}
          aria-label="Ir a la sección de productos"
          className="
            flex items-center justify-center
            rounded-full bg-neutral-200/50 dark:bg-white/5 border border-neutral-300 dark:border-white/10 backdrop-blur-md p-3.5
            text-neutral-600 dark:text-gray-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30
            shadow-xl transition-all duration-300 hover:scale-110
            animate-bounce
          "
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
