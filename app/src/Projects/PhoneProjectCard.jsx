import React, { useMemo, useState } from "react";
import { ExternalLink, Github, BookOpen, Search } from "lucide-react";

/** Mapa de documentación (puedes ampliar) */
const DOCS = {
  React: "https://react.dev/",
  Tailwind: "https://tailwindcss.com/docs",
  Vite: "https://vitejs.dev/guide/",
  "Node.js": "https://nodejs.org/en/docs",
  Node: "https://nodejs.org/en/docs",
  Firebase: "https://firebase.google.com/docs",
  TypeScript: "https://www.typescriptlang.org/docs/",
  JavaScript: "https://developer.mozilla.org/docs/Web/JavaScript",
};

const resolveDocLink = (label) => {
  if (!label) return null;
  if (DOCS[label]) return DOCS[label];

  const normalized = label.trim().toLowerCase();
  const entry = Object.entries(DOCS).find(([k]) => k.toLowerCase() === normalized);
  if (entry) return entry[1];

  return `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(label)}`;
};

const isOfficialDoc = (label) => {
  if (!label) return false;
  if (DOCS[label]) return true;
  const normalized = label.trim().toLowerCase();
  return Object.keys(DOCS).some((k) => k.toLowerCase() === normalized);
};

// Tamaño fijo (ajusta a tu gusto)
const PHONE_W = 340;
const PHONE_H = 660;

// Teclado fijo: 12 teclas (3x4)
const MAX_KEYS = 12;

const PhoneProjectCard = ({ p }) => {
  const [selected, setSelected] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedOfficial, setSelectedOfficial] = useState(false);

  const keys = useMemo(() => {
    const base = (p.tags || []).slice(0, MAX_KEYS);

    // Relleno “neutral” y claramente disabled (para mantener grid igual)
    const filled = [...base];
    while (filled.length < MAX_KEYS) filled.push("—");

    return filled.map((label, idx) => {
      const isReal = idx < base.length && label !== "—";
      const link = isReal ? resolveDocLink(label) : null;
      const official = isReal ? isOfficialDoc(label) : false;
      return { label, isReal, link, official };
    });
  }, [p.tags]);

  const selectTech = (label, link) => {
    setSelected(label);
    setSelectedLink(link);
    setSelectedOfficial(isOfficialDoc(label));
  };

  const openSelected = () => {
    if (!selectedLink) return;
    window.open(selectedLink, "_blank", "noreferrer");
  };

  return (
    <div className="group relative [perspective:1400px]">
      <div
        className="relative mx-auto select-none"
        style={{
          width: PHONE_W,
          height: PHONE_H,
          transformStyle: "preserve-3d",
          transform: "translateY(-2px)",
        }}
      >
        {/* sombra “flotando” */}
        <div
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-black/50 blur-3xl opacity-50"
          style={{ transform: "translateZ(-40px)" }}
        />

        {/* cuerpo del celular (carcasa) */}
        <div
          className="
            relative h-full w-full rounded-[2.8rem] p-[12px]
            bg-gradient-to-br from-[#d7dde0] via-[#7b858a] to-[#2e3438]
            border border-white/10
            shadow-[0_40px_120px_rgba(0,0,0,0.55)]
          "
        >
          <div className="absolute inset-[10px] rounded-[2.3rem] border border-black/30 pointer-events-none" />
          <div className="pointer-events-none absolute -left-1 top-24 h-16 w-2 rounded-full bg-black/30" />
          <div className="pointer-events-none absolute -left-1 top-44 h-10 w-2 rounded-full bg-black/30" />
          <div className="pointer-events-none absolute -right-1 top-32 h-20 w-2 rounded-full bg-black/30" />
          <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-70" />

          {/* pantalla + teclado */}
          <div className="relative h-full overflow-hidden rounded-[2.2rem] bg-[#101214] border border-white/10 flex flex-col">
            {/* top speaker */}
            <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 z-10">
              <div className="h-2 w-24 rounded-full bg-black/55 border border-white/10" />
            </div>

            {/* PANTALLA */}
            <div className="relative flex-1 px-5 pt-10 pb-4 overflow-hidden">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-extrabold tracking-tight truncate">
                        {p.title}
                      </h3>
                      {p.status ? (
                        <span className="shrink-0 rounded-full border border-cyan-200/20 bg-[#C0FDB9] px-2 py-0.5 text-[10px] font-black tracking-widest text-black">
                          {p.status.toUpperCase()}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-2 text-sm text-white/75 font-medium leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {p.github ? (
                      <a
                        href={p.github}
                        className="grid place-items-center size-9 rounded-xl border border-white/10 bg-white/5 text-white/85
                                   hover:bg-white/10 hover:border-cyan-200/25 transition"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="size-4" />
                      </a>
                    ) : null}

                    {p.href ? (
                      <a
                        href={p.href}
                        className="grid place-items-center size-9 rounded-xl border border-white/10 bg-white/5 text-white/85
                                   hover:bg-white/10 hover:border-cyan-200/25 transition"
                        aria-label="Open project"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Panel UX: seleccionado + CTA */}
                <div className="mt-3">
                  {selected ? (
                    <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-black tracking-widest text-white/70">
                            SELECTED
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-black tracking-widest ${
                              selectedOfficial
                                ? "bg-[#C0FDB9] text-black"
                                : "bg-white/10 text-white/80 border border-white/10"
                            }`}
                          >
                            {selectedOfficial ? (
                              <>
                                <BookOpen className="size-3" /> OFFICIAL
                              </>
                            ) : (
                              <>
                                <Search className="size-3" /> SEARCH
                              </>
                            )}
                          </span>
                        </div>

                        <div className="mt-1 truncate text-[13px] font-extrabold text-white">
                          {selected}
                        </div>
                        <div className="mt-1 text-[11px] text-white/55 truncate">
                          {selectedLink}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={openSelected}
                        disabled={!selectedLink}
                        className="
                          shrink-0 rounded-xl border border-cyan-200/25 bg-cyan-400/10
                          px-3 py-2 text-[11px] font-black text-white
                          hover:bg-cyan-400/15 transition
                          disabled:opacity-40 disabled:cursor-not-allowed
                        "
                        aria-label="Open selected documentation"
                      >
                        Open docs →
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[11px] text-white/70 font-black tracking-widest">
                        TIP
                      </div>
                      <div className="mt-1 text-[12px] text-white/60">
                        Toca una tecla (tech) abajo para abrir su documentación.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* TECLADO */}
            <div className="relative shrink-0 p-5 pt-4 bg-gradient-to-b from-[#2c3135] via-[#202427] to-[#16191b] border-t border-white/10">
              <div className="grid grid-cols-3 gap-3">
                {keys.map(({ label, isReal, link, official }, i) => {
                  const isSelected = selected === label && isReal;

                  const baseClass = `
                    group/key relative rounded-2xl
                    border ${isSelected ? "border-cyan-200/40" : "border-white/10"}
                    bg-gradient-to-b from-white/10 to-black/30
                    px-3 py-4
                    text-[11px] font-extrabold tracking-wide
                    shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                    transition
                    active:translate-y-[1px]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60
                  `;

                  const face = (
                    <>
                      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-70" />
                      {isSelected ? (
                        <span className="pointer-events-none absolute -inset-3 rounded-3xl bg-cyan-400/10 blur-2xl" />
                      ) : null}

                      <span className="relative block text-center leading-tight text-white/85">
                        {label}
                      </span>

                      <span className="relative mt-2 block text-center text-[9px] font-black tracking-widest text-white/45">
                        {!isReal ? "—" : official ? "OFFICIAL" : "SEARCH"}
                      </span>
                    </>
                  );

                  if (!isReal) {
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled
                        className={`${baseClass} opacity-30 cursor-not-allowed text-white/40`}
                        aria-label="Empty key"
                        title="Empty"
                      >
                        {face}
                      </button>
                    );
                  }

                  return (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => selectTech(label, link)}
                      className={`${baseClass} hover:bg-white/10 hover:border-cyan-200/25`}
                      title={`Abrir ${official ? "docs oficiales" : "búsqueda"} de ${label}`}
                      aria-label={`Abrir documentación de ${label}`}
                    >
                      {face}
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 flex justify-center">
                <div className="h-1.5 w-20 rounded-full bg-black/45 border border-white/10" />
              </div>
            </div>
          </div>
        </div>

        {/* profundidad fake */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[2.8rem]"
          style={{ transform: "translateZ(-22px)" }}
        />
      </div>
    </div>
  );
};

export default PhoneProjectCard;
