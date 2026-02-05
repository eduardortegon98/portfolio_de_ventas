import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/solucionestecnologicasortegon", Icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/solucionestecnologicasortegon/", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/soluciones-tecnol%C3%B3gicas-orteg%C3%B3n/", Icon: FaLinkedinIn },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0b0d12] border-t border-white/10 overflow-hidden">
      {/* glow suave abajo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[#C0FDB9]/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-white font-extrabold tracking-tight">
              Soluciones Tecnológicas <span className="text-white/85">Ortegón</span>
            </p>
            <p className="text-white/60 text-sm">© {year}</p>
          </div>

          {/* Neon “pill” */}
          <div className="flex items-center justify-center gap-3 rounded-full bg-[#C0FDB9]/12 ring-1 ring-[#C0FDB9]/25 px-4 py-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="
                  group inline-flex items-center justify-center
                  h-10 w-10 rounded-full
                  bg-black/30 hover:bg-black/45
                  ring-1 ring-white/10
                  transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0FDB9]/60
                "
              >
                <Icon className="text-white/80 group-hover:text-white transition text-[18px]" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="
                ml-1 inline-flex items-center gap-2 rounded-full
                px-4 py-2 text-sm font-extrabold
                bg-[#C0FDB9]/90 text-black hover:bg-[#C0FDB9]
                transition
                shadow-[0_16px_50px_-30px_rgba(192,253,185,0.95)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
              "
            >
              Arriba <span className="-mt-px">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
