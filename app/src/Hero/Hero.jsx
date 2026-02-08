import Hyperspeed from "./Hyperspeed";
import { hyperspeedPresets } from "./hyperspeedPresets";
import { ChevronDown } from "lucide-react";
import Logo from "../../public/Soluciones_Tecnologicas_Ortegon.png";

const Hero = () => {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-black min-h-[calc(100svh-64px)]">
      <Hyperspeed effectOptions={hyperspeedPresets.four} />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80" />

        {/* Glows (más compactos en lg, vuelven a crecer en xl) */}
        <div
          className="
            absolute -top-24 left-1/2 -translate-x-1/2 rounded-full blur-3xl bg-cyan-400/18
            h-[300px] w-[300px]
            sm:h-[380px] sm:w-[380px]
            md:h-[440px] md:w-[440px]
            lg:h-[360px] lg:w-[360px]
            xl:h-[520px] xl:w-[520px]
          "
        />
        <div
          className="
            absolute top-6 right-4 sm:top-10 sm:right-10 rounded-full blur-2xl bg-sky-400/15
            h-20 w-20
            sm:h-28 sm:w-28
            md:h-32 md:w-32
            lg:h-24 lg:w-24
            xl:h-40 xl:w-40
          "
        />
        <div
          className="
            absolute -bottom-24 left-4 sm:left-10 rounded-full blur-3xl bg-blue-500/10
            h-44 w-44
            sm:h-56 sm:w-56
            md:h-64 md:w-64
            lg:h-52 lg:w-52
            xl:h-72 xl:w-72
          "
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl text-center">
          {/* Logo (más pequeño en lg, crece en xl) */}
          <img
            src={Logo}
            alt="Soluciones Tecnológicas Ortegón"
            className="
              mx-auto h-auto object-contain
              w-[min(78vw,320px)]
              sm:w-[min(70vw,380px)]
              md:w-[min(62vw,420px)]
              lg:w-[min(46vw,340px)]
              xl:w-[min(52vw,420px)]
              2xl:w-[min(56vw,520px)]
            "
          />

          {/* Title (lg más pequeño, xl vuelve a crecer) */}
          <h1
            className="
              mt-2 font-extrabold tracking-tight
              leading-tight sm:leading-[1.05]
              text-3xl sm:text-5xl md:text-6xl
              lg:text-5xl xl:text-6xl 2xl:text-7xl
            "
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-gradient-to-r from-cyan-400/35 via-sky-400/30 to-blue-500/25" />
              <span className="text-[#C0FDB9]">Impulsamos tu marca usando</span>
            </span>

            <br />

            <span className="relative inline-block mt-1">
              <span className="absolute left-0 right-0 -bottom-2 sm:-bottom-3 h-[2px] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[0.3px]" />
              <span className="text-white/95">
                Hardware <span className="text-[#C0FDB9]">&</span> Software
              </span>
            </span>
          </h1>

          {/* Subtitle (compacto en lg) */}
          <p className="mx-auto mt-4 sm:mt-6 lg:mt-4 max-w-2xl text-white/75 text-sm sm:text-base md:text-lg lg:text-base px-1">
            Tu negocio merece soluciones tecnológicas innovadoras, atractivas y
            fáciles de usar, en DZE Tech las hacemos realidad.
          </p>

          {/* CTA (compacto en lg) */}
          <div className="mt-6 sm:mt-9 lg:mt-6 flex items-center justify-center gap-3 flex-wrap">
            <button
              className="
                group relative rounded-full px-6 py-2.5 text-sm sm:text-base font-semibold
                text-black bg-[#C0FDB9]/90 hover:brightness-110 transition
              "
              onClick={() => goTo("stack")}
              type="button"
            >
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition shadow-[0_0_35px_rgba(34,211,238,0.35)]" />
              <span className="relative">Conócenos</span>
            </button>

            <button
              className="
                group relative rounded-full px-6 py-2.5 text-sm sm:text-base font-semibold
                text-cyan-100 border border-cyan-300/25 bg-black/30 backdrop-blur
                hover:border-cyan-200/60 transition
              "
              onClick={() => goTo("projects")}
              type="button"
            >
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition shadow-[0_0_30px_rgba(34,211,238,0.25)]" />
              <span className="relative">Proyectos</span>
            </button>
          </div>

          {/* Bottom hint */}
          <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2">
            <button
              aria-label="Scroll down"
              type="button"
              onClick={() => goTo("stack")}
              className="
                group grid place-items-center rounded-full size-10
                border border-cyan-300/25 bg-black/30 backdrop-blur
                hover:border-cyan-200/60 transition shadow-[0_0_22px_rgba(34,211,238,0.12)]
              "
            >
              <ChevronDown className="size-5 text-cyan-100/90 group-hover:text-cyan-100 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
