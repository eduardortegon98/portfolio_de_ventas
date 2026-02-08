import React, { useEffect, useState } from "react";
import Logo from "../../public/Soluciones_Tecnologicas_Ortegon.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Info", href: "#info" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onHash = () => setActive(window.location.hash || "#inicio");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-28 bg-gradient-to-r from-cyan-400/15 via-emerald-400/15 to-lime-400/15 blur-3xl" />

      {/* Glass bar */}
      <div className="bg-[#12141a]/70 backdrop-blur-xl border-b border-white/10">
        <div className="h-20 flex items-center justify-between px-4 max-w-7xl mx-auto">
          {/* Brand */}
          <a href="#inicio" className="group flex items-center gap-3">
            {/* Logo (opcional) */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-r from-cyan-400/25 via-emerald-400/25 to-lime-400/25 blur-xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex items-center gap-3 rounded-2xl px-2 py-1">
                <img
                  src={Logo}
                  alt="Soluciones Tecnológicas Ortegón"
                  className="size-24 rounded-xl object-contain  ring-white/10"
                />
                <div className="leading-tight">
                  <p className="text-white font-extrabold tracking-tight text-[15px] sm:text-base">
                    Soluciones Tecnológicas Ortegón
                  </p>
                  <p className="text-white/70 text-xs sm:text-[13px] -mt-0.5">
                    Soporte • Redes • Sistemas
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Nav */}
            <nav className="hidden sm:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={[
                      "group relative px-3 py-2 rounded-xl text-sm font-semibold transition",
                      "hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60",
                      isActive ? "text-white" : "text-white/75 hover:text-white",
                    ].join(" ")}
                  >
                    {/* underline glow */}
                    <span
                      className={[
                        "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px",
                        "bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent transition",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "relative",
                        isActive
                          ? "drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]"
                          : "group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.25)]",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* CTA */}
            <a
              href="#contacto"
              className="
                inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold
                text-black
                bg-[#C0FDB9]/90 backdrop-blur
                shadow-[0_10px_30px_-12px_rgba(16,185,129,0.55)]
                hover:brightness-110 transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70
              "
            >
              Cotizar
              <span className="opacity-90">→</span>
            </a>

            {/* Mobile menu hint (simple) */}
            <a
              href="#info"
              className="sm:hidden inline-flex items-center justify-center rounded-2xl px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition"
              aria-label="Ir a Info"
            >
              ☰
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
