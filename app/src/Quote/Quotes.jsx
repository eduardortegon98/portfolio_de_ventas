import React, { useEffect, useRef, useState } from "react";

const Background = () => (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-28 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute inset-0 bg-[#474B4E]" />
  </div>
);

export default function Quotes() {
  const quote =
    "La IA es una herramienta, no un destino: el juicio, la ética y la creatividad siguen siendo tuyos.";
  const author = "— Anónimo";

  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  const [typedQuote, setTypedQuote] = useState("");
  const [typedAuthor, setTypedAuthor] = useState("");
  const [doneQuote, setDoneQuote] = useState(false);

  // 1) Arranca cuando la sección entra al viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // solo una vez
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2) Typewriter del quote
  useEffect(() => {
    if (!started) return;

    setTypedQuote("");
    setTypedAuthor("");
    setDoneQuote(false);

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedQuote(quote.slice(0, i));
      if (i >= quote.length) {
        clearInterval(interval);
        setDoneQuote(true);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [started, quote]);

  // 3) Typewriter del autor
  useEffect(() => {
    if (!started || !doneQuote) return;

    let j = 0;
    const interval = setInterval(() => {
      j++;
      setTypedAuthor(author.slice(0, j));
      if (j >= author.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [started, doneQuote, author]);

  return (
    <section
      ref={sectionRef} // ✅ OJO: NO uses sectionRef.current aquí
      id="projects"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#474B4E]"
    >
      <Background />

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>

      <div className="text-[#C0FDB9] text-center text-4xl lg:text-7xl w-[60%] italianno-regular z-10">
        <span>{typedQuote}</span>

        {started && (
          <span
            className="inline-block ml-2 align-baseline"
            style={{
              width: "1.1ch",
              height: "0.05em",
              backgroundColor: "currentColor",
              borderRadius: "2px",
              transform: "translateY(0.18em)",
              animation: "blink 0.9s steps(1, end) infinite",
            }}
          />
        )}

        <span className="block mt-6 text-2xl lg:text-5xl opacity-90">
          {typedAuthor}
        </span>
      </div>
    </section>
  );
}
