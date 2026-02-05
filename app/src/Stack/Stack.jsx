import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Code2, BrainCircuit, Bot, Layers3, Orbit, Globe, Cpu, Atom, Wind, Terminal, Plug } from "lucide-react";

const STACK = [
  {
    key: "intelligence",
    title: "DESARROLLO",
    items: [
      { label: "Web", Icon: Globe },
  { label: "IA", Icon: BrainCircuit },
  { label: "Dispositivos Electrónicos", Icon: Cpu },
    ],
  },
  {
    key: "technologies",
    title: "TECNOLOGÍAS",
    items: [
       { label: "React", Icon: Atom },
  { label: "Tailwind CSS", Icon: Wind },
  { label: "Python", Icon: Terminal },
    ],
  },
  {
    key: "predict",
    title: "PREDICCIÓN",
    items: [
      { label: "Modelos", Icon: BrainCircuit },
      { label: "Análisis de Datos", Icon: Layers3 },
      { label: "Simulaciones", Icon: Orbit }
    ],
  },
  {
    key: "automation",
    title: "AUTOMATIZACIÓN IA",
    items: [
      { label: "Integraciones", Icon: Plug },
      { label: "Agentes", Icon: Bot },

    ],
  },
];

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

const StackCard = React.forwardRef(function StackCard(
  { title, items, side = "left" },
  ref,
) {
  // side: "left" | "right" -> para colocar el puerto del lado interno
  const isLeft = side === "left";

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md
                 px-6 py-5 shadow-[0_0_60px_rgba(0,0,0,0.35)]
                 transition will-change-transform hover:-translate-y-0.5 hover:border-cyan-200/25"
    >
      {/* top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />

      {/* internal port (dot) */}
      <div
        className={[
          "pointer-events-none absolute top-1/2 -translate-y-1/2",
          isLeft ? "-right-2" : "-left-2",
        ].join(" ")}
      >
        <div className="relative size-4">
          <div className="absolute inset-0 rounded-full bg-cyan-200/70 blur-[6px] opacity-0 group-hover:opacity-100 transition" />
          <div className="absolute inset-0 rounded-full bg-cyan-200/40 blur-[10px] opacity-60" />
          <div className="absolute inset-[3px] rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold tracking-[0.24em] text-white/60">
          {title}
        </div>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      </div>

      <div className="mt-4 space-y-3">
        {items.map(({ label, Icon }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-xl border border-cyan-300/10 bg-black/30 px-4 py-3
                       transition group-hover:border-cyan-200/15"
          >
            <div
              className="grid place-items-center size-10 rounded-xl bg-cyan-400/10 border border-cyan-300/15 text-cyan-100
                            shadow-[0_0_18px_rgba(34,211,238,0.10)]"
            >
              <Icon className="size-6" />
            </div>
            <div className="text-white/90 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

function useMeasurePorts(wrapperRef, refs) {
  const [data, setData] = useState(null);

  const measure = () => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const wr = wrap.getBoundingClientRect();

    const centerOf = (el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left - wr.left + r.width / 2,
        y: r.top - wr.top + r.height / 2,
        w: r.width,
        h: r.height,
      };
    };

    const chip = refs.chip.current;
    const L1 = refs.intelligence.current;
    const L2 = refs.predict.current;
    const R1 = refs.product.current;
    const R2 = refs.automation.current;

    if (!chip || !L1 || !L2 || !R1 || !R2) return;

    const chipC = centerOf(chip);
    const a = centerOf(L1);
    const b = centerOf(L2);
    const c = centerOf(R1);
    const d = centerOf(R2);

    const portLeft = (card) => ({ x: card.x + card.w / 2 - 8, y: card.y }); // right edge
    const portRight = (card) => ({ x: card.x - card.w / 2 + 8, y: card.y }); // left edge
    // target del chip: un poco hacia el lado para que se sienta natural
    const chipLeft = { x: chipC.x - chipC.w * 0.18, y: chipC.y };
    const chipRight = { x: chipC.x + chipC.w * 0.18, y: chipC.y };

    setData({
      w: wr.width,
      h: wr.height,
      chip: chipC,
      targets: { chipLeft, chipRight },
      ports: {
        intelligence: { from: portLeft(a), to: chipLeft },
        predict: {
          from: portLeft(b),
          to: { x: chipLeft.x, y: chipLeft.y + chipC.h * 0.18 },
        },
        product: { from: portRight(c), to: chipRight },
        automation: {
          from: portRight(d),
          to: { x: chipRight.x, y: chipRight.y + chipC.h * 0.18 },
        },
      },
    });
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(() => measure());
    if (wrapperRef.current) ro.observe(wrapperRef.current);

    const t = setTimeout(measure, 80);
    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}

function curvedPath(from, to) {
  // Curva suave tipo “cable”
  const dx = clamp(Math.abs(to.x - from.x) * 0.35, 80, 220);
  const dir = to.x > from.x ? 1 : -1;
  const c1 = { x: from.x + dx * dir, y: from.y };
  const c2 = { x: to.x - dx * dir, y: to.y };
  return `M ${from.x} ${from.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${to.x} ${to.y}`;
}

const ChipCenter = React.forwardRef(function ChipCenter(_, ref) {
  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[520px]">
      {/* aura */}
      <div className="pointer-events-none absolute -inset-16 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -inset-16 translate-x-10 rounded-full bg-blue-500/10 blur-3xl" />

      {/* chip image from /public */}
      <img
        src="/img_stack.png"
        alt="Chip"
        className="relative w-full h-auto drop-shadow-[0_0_50px_rgba(34,211,238,0.20)]"
        draggable="false"
      />

      {/* target rings */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="h-[96%] w-[96%] rounded-full border border-cyan-300/10" />
        <div className="absolute h-[78%] w-[78%] rounded-full border border-cyan-300/10" />
        <div className="absolute h-[60%] w-[60%] rounded-full border border-cyan-300/10" />
      </div>
    </div>
  );
});

const Stack = () => {
  const wrapRef = useRef(null);

  const refs = {
    chip: useRef(null),
    intelligence: useRef(null),
    product: useRef(null),
    predict: useRef(null),
    automation: useRef(null),
  };

  const m = useMeasurePorts(wrapRef, refs);

  return (
    <section className="relative h-screen w-full bg-[#ffffff] flex items-center justify-center overflow-hidden" id="stack">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[#474B4E]" />
      </div>

      <div className="relative w-full max-w-6xl px-6 py-16">
        <div className="text-center">
          <div className="text-white/90 text-sm font-semibold tracking-widest mt-12">
            TECNOLOGÍAS
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#C0FDB9]">
            Todo está conectado
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/65">
            En DZE usamos tecnología de última generación para llevar tu negocio al siguiente nivel.
          </p>
        </div>

        <div ref={wrapRef} className="relative mt-12">
          {/* SVG Connections */}
          {m && (
            <svg
              className="pointer-events-none absolute inset-0"
              width={m.w}
              height={m.h}
              viewBox={`0 0 ${m.w} ${m.h}`}
            >
              <defs>
                <linearGradient id="wire" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="rgba(34,211,238,0.08)" />
                  <stop offset="0.5" stopColor="rgba(34,211,238,0.85)" />
                  <stop offset="1" stopColor="rgba(34,211,238,0.08)" />
                </linearGradient>

                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feColorMatrix
                    in="b"
                    type="matrix"
                    values="
                      1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1.8 0"
                    result="g"
                  />
                  <feMerge>
                    <feMergeNode in="g" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {Object.entries(m.ports).map(([key, seg]) => {
                const d = curvedPath(seg.from, seg.to);

                return (
                  <g key={key} filter="url(#softGlow)" opacity={0.95}>
                    {/* halo */}
                    <path
                      d={d}
                      fill="none"
                      stroke="rgba(34,211,238,0.14)"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                    {/* main */}
                    <path
                      d={d}
                      fill="none"
                      stroke="url(#wire)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* endpoint nodes */}
                    <circle
                      cx={seg.from.x}
                      cy={seg.from.y}
                      r="3.2"
                      fill="rgba(34,211,238,0.9)"
                    />
                    <circle
                      cx={seg.to.x}
                      cy={seg.to.y}
                      r="3.2"
                      fill="rgba(34,211,238,0.9)"
                    />
                  </g>
                );
              })}
            </svg>
          )}

          {/* layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <StackCard
                ref={refs.intelligence}
                title={STACK[0].title}
                items={STACK[0].items}
                side="left"
              />
              <StackCard
                ref={refs.predict}
                title={STACK[2].title}
                items={STACK[2].items}
                side="left"
              />
            </div>

            <div className="flex justify-center">
              <ChipCenter ref={refs.chip} />
            </div>

            <div className="space-y-6">
              <StackCard
                ref={refs.product}
                title={STACK[1].title}
                items={STACK[1].items}
                side="right"
              />
              <StackCard
                ref={refs.automation}
                title={STACK[3].title}
                items={STACK[3].items}
                side="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
