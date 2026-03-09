import React, { useEffect, useRef, useState } from "react";

const Background = () => (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-20 left-4 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl sm:-top-24 sm:left-8 sm:h-56 sm:w-56 lg:-top-28 lg:left-10 lg:h-72 lg:w-72" />
    <div className="absolute -bottom-24 right-4 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl sm:-bottom-28 sm:right-8 sm:h-60 sm:w-60 lg:-bottom-32 lg:right-10 lg:h-80 lg:w-80" />
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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
  }, [started]);

  useEffect(() => {
    if (!started || !doneQuote) return;

    let j = 0;
    const interval = setInterval(() => {
      j++;
      setTypedAuthor(author.slice(0, j));
      if (j >= author.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [started, doneQuote]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative flex min-h-[70svh] w-full items-center justify-center overflow-hidden bg-[#474B4E] px-4 py-16 sm:min-h-[80svh] sm:px-6 sm:py-20 lg:min-h-screen lg:px-8"
    >
      <Background />

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="italianno-regular text-[#C0FDB9]">
          <span className="inline leading-[1.2] text-[clamp(1.45rem,4.8vw,3.4rem)] sm:text-[clamp(1.7rem,4.4vw,4rem)]">
            {typedQuote}
          </span>

          {started && (
            <span
              className="ml-1 inline-block align-baseline sm:ml-2"
              style={{
                width: "0.9ch",
                height: "0.05em",
                backgroundColor: "currentColor",
                borderRadius: "2px",
                transform: "translateY(0.18em)",
                animation: "blink 0.9s steps(1, end) infinite",
              }}
            />
          )}

          <span className="mt-4 block text-[clamp(1rem,2.8vw,2rem)] opacity-90 sm:mt-5">
            {typedAuthor}
          </span>
        </div>
      </div>
    </section>
  );
}