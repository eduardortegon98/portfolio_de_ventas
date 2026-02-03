import Hyperspeed from "./Hyperspeed";
import { hyperspeedPresets } from "./hyperspeedPresets";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-black h-[calc(100vh-64px)] w-full overflow-hidden">
      <Hyperspeed effectOptions={hyperspeedPresets.four} />

      {/* Overlay profesional (contraste + glow azul) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/18 blur-3xl" />
        <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-sky-400/15 blur-2xl" />
        <div className="absolute bottom-[-120px] left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="w-full max-w-5xl text-center">
          {/* Title */}
          <h1 className="mt-6 font-extrabold tracking-tight leading-[1.02] text-4xl sm:text-6xl md:text-7xl">
            <span className="relative inline-block">
              {/* glow */}
              <span className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-gradient-to-r from-cyan-400/35 via-sky-400/30 to-blue-500/25" />
              {/* text */}
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-sky-200 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(34,211,238,0.25)]">
                Building the bridge between
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              {/* subtle highlight line */}
              <span className="absolute left-0 right-0 -bottom-3 h-[2px] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[0.3px]" />
              <span className="text-white/95">
                Hardware <span className="text-cyan-200">&</span> Software
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-white/75 text-base sm:text-lg">
            High-performance experiences with a clean, modern edge — powered by
            fluent interfaces and reliable engineering.
          </p>

          {/* CTA */}
          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
            <button className="group relative rounded-full px-6 py-2.5 text-sm sm:text-base font-semibold text-black bg-gradient-to-r from-cyan-300 to-sky-200 hover:brightness-110 transition">
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition shadow-[0_0_35px_rgba(34,211,238,0.35)]" />
              <span className="relative">Get started</span>
            </button>

            <button className="group relative rounded-full px-6 py-2.5 text-sm sm:text-base font-semibold text-cyan-100 border border-cyan-300/25 bg-black/30 backdrop-blur hover:border-cyan-200/60 transition">
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition shadow-[0_0_30px_rgba(34,211,238,0.25)]" />
              <span className="relative">See projects</span>
            </button>
          </div>

          {/* Bottom hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <button
              aria-label="Scroll down"
              className="group grid place-items-center rounded-full size-10 border border-cyan-300/25 bg-black/30 backdrop-blur hover:border-cyan-200/60 transition shadow-[0_0_22px_rgba(34,211,238,0.12)]"
            >
              <ChevronDown className="size-5 text-cyan-100/90 group-hover:text-cyan-100 " onClick={() => {
                const stackSection = document.getElementById('stack');
                if (stackSection) {
                  stackSection.scrollIntoView({ behavior: 'smooth' });
                }
              }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
