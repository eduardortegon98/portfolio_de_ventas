import { Bot, Mic, Trash, TrashIcon } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const CONTACTS = {
  whatsappNumber: "57XXXXXXXXXX", // sin +
  facebookPage: "TU_PAGE_ID_O_USERNAME", // m.me/USERNAME recomendado
  instagramUsername: "tu_usuario",
};

const CHANNELS = [
  { id: "whatsapp", Icon: FaWhatsapp, title: "WhatsApp" },
  { id: "facebook", Icon: FaFacebookF, title: "Facebook" },
  { id: "instagram", Icon: FaInstagram, title: "Instagram" },
];

const cx = (...arr) => arr.filter(Boolean).join(" ");

const Walkie = () => {
  const [open, setOpen] = useState(false);
  const [channel, setChannel] = useState("whatsapp");
  const [message, setMessage] = useState("");

  const links = useMemo(() => {
    const text = encodeURIComponent(message || "Hola, quiero más información 😊");
    return {
      whatsapp: `https://wa.me/${CONTACTS.whatsappNumber}?text=${text}`,
      facebook: `https://m.me/${CONTACTS.facebookPage}`,
      instagram: `https://ig.me/m/${CONTACTS.instagramUsername}`,
      instagramFallback: `https://instagram.com/${CONTACTS.instagramUsername}`,
    };
  }, [message]);

  const openChat = () => setOpen(true);
  const closeChat = () => setOpen(false);

  const send = () => {
    if (!message.trim() && channel === "whatsapp") {
      // si quieres, quita esta guardia; solo evita abrir WA vacío
      window.open(links.whatsapp, "_blank", "noopener,noreferrer");
      return;
    }

    if (channel === "instagram") {
      const dm = window.open(links.instagram, "_blank", "noopener,noreferrer");
      if (!dm) window.open(links.instagramFallback, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(links[channel], "_blank", "noopener,noreferrer");
  };

  const clear = () => setMessage("");

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && closeChat();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const ChannelPill = ({ id, Icon, title }) => {
    const active = channel === id;
    return (
      <button
        onClick={() => setChannel(id)}
        type="button"
        aria-label={title}
        title={title}
        className={cx(
          "group relative overflow-hidden",
          "inline-flex items-center justify-center gap-2",
          "h-11 w-14 rounded-2xl ring-1 transition",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0FDB9]/60",
          active
            ? "bg-[#C0FDB9]/90 text-black ring-white/10"
            : "bg-white/5 text-white/80 hover:text-white hover:bg-white/10 ring-white/10"
        )}
      >
        <span
          className={cx(
            "pointer-events-none absolute -inset-10 blur-2xl transition",
            active ? "bg-[#C0FDB9]/22 opacity-100" : "bg-[#C0FDB9]/16 opacity-0 group-hover:opacity-100"
          )}
        />
        <Icon className="relative text-[18px]" />
      </button>
    );
  };

  const IconAction = ({ onClick, title, children }) => (
    <button
      onClick={onClick}
      type="button"
      aria-label={title}
      title={title}
      className="
        inline-flex items-center justify-center
        h-12 w-12 rounded-2xl
        bg-white/5 hover:bg-white/10
        text-white/80 hover:text-white
        ring-1 ring-white/10 hover:ring-[#C0FDB9]/25
        transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0FDB9]/60
      "
    >
      {children}
    </button>
  );

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={openChat}
        className="
          fixed bottom-6 right-6 z-50
          group inline-flex items-center gap-3
          rounded-full px-5 py-4
          bg-[#C0FDB9]/90 text-black font-extrabold
          hover:bg-[#C0FDB9] transition
          shadow-[0_22px_70px_-35px_rgba(192,253,185,0.95)]
          ring-1 ring-white/10
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
        "
        aria-label="Abrir chat"
        title="Abrir chat"
        type="button"
      >
        <span className="relative flex items-center justify-center h-10 w-10 rounded-full bg-black/10">
          <span className="absolute -inset-2 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition" />
          <span className="text-xl"><Bot></Bot></span>
        </span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* overlay */}
          <button
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeChat}
            aria-label="Cerrar modal"
            type="button"
          />

          {/* caja */}
          <div className="absolute bottom-6 right-6 w-[92vw] max-w-md">
            <div className="relative overflow-hidden rounded-3xl bg-[#0b0d12]/95 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_40px_120px_-70px_rgba(192,253,185,0.95)]">
              {/* glow */}
              <div className="pointer-events-none absolute -top-10 left-0 right-0 h-24 bg-[#C0FDB9]/20 blur-3xl" />

              {/* header (más compacto) */}
              <div className="relative px-5 py-4 border-b border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-white font-extrabold tracking-tight">Enviar mensaje</p>
                    <p className="text-white/55 text-sm truncate">
                      Selecciona el canal y escribe abajo
                    </p>
                  </div>

                  <button
                    onClick={closeChat}
                    className="h-10 w-10 rounded-2xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-white/80 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C0FDB9]/60"
                    aria-label="Cerrar"
                    title="Cerrar"
                    type="button"
                  >
                    ✕
                  </button>
                </div>

                {/* canales en “pills” debajo del título */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {CHANNELS.map((c) => (
                      <ChannelPill key={c.id} {...c} />
                    ))}
                  </div>

                  {/* hint corto */}
                  {channel === "instagram" && (
                    <span className="text-[11px] text-white/40 text-right leading-tight">
                      IG no siempre
                      <br />
                      prellena texto
                    </span>
                  )}
                </div>
              </div>

              {/* body (nuevo layout: textarea + acciones laterales) */}
              <div className="relative px-5 py-4">
                <div className="flex gap-3 items-stretch">
                  {/* textarea */}
                  <div className="flex-1">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Hola, quiero información sobre..."
                      className="
                        w-full h-full rounded-2xl px-4 py-3
                        bg-white/5 text-white placeholder:text-white/35
                        ring-1 ring-white/10
                        focus:outline-none focus:ring-2 focus:ring-[#C0FDB9]/60
                        resize-none
                      "
                    />
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-xs text-white/40">
                        WhatsApp prellena el texto.
                      </p>
                      <p className="text-xs text-white/35">
                        {Math.min(message.length, 500)}/500
                      </p>
                    </div>
                  </div>

                  {/* acciones verticales (más pro y ordenado) */}
                  <div className="flex flex-col gap-2">
                    {/* enviar */}
                    <button
                      onClick={send}
                      type="button"
                      aria-label="Enviar"
                      title="Enviar"
                      className="
                        group relative overflow-hidden
                        h-12 w-12 rounded-2xl
                        bg-[#C0FDB9]/90 hover:bg-[#C0FDB9]
                        text-black
                        ring-1 ring-white/10
                        transition
                        shadow-[0_18px_55px_-35px_rgba(192,253,185,0.95)]
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                      "
                    >
                      <span className="pointer-events-none absolute -inset-10 bg-[#C0FDB9]/25 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent opacity-55 group-hover:opacity-75 transition" />
                      <FaPaperPlane className="relative mx-auto text-[18px] -translate-y-[1px]" />
                    </button>

                    {/* limpiar */}
                    <IconAction onClick={clear} title="Limpiar">
                      <Mic className="text-[18px]" />
                    </IconAction>

                    {/* cerrar (opcional rápido) */}
                    <IconAction onClick={clear} title="Cerrar">
                      <TrashIcon className="text-[18px]" />
                    </IconAction>
                  </div>
                </div>
              </div>

              {/* footer line suave */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C0FDB9]/10 to-transparent" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Walkie;
