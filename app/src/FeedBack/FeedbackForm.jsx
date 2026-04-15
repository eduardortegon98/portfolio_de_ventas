import { useState } from "react";
import { Send, Star } from "lucide-react";
import { supabase } from "../lib/supabase";

const initialState = {
  name: "",
  email: "",
  message: "",
  rating: 5,
};

const FeedbackForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleRatingClick = (value) => {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      rating: formData.rating,
    };

    const { error } = await supabase.from("FeedBack").insert([payload]);

    if (error) {
      console.error("Error saving feedback:", error);
      setErrorMessage("No se pudo enviar tu comentario. Inténtalo otra vez.");
      setLoading(false);
      return;
    }

    setSuccessMessage(
      "¡Gracias! Tu comentario fue enviado correctamente y quedará pendiente de aprobación."
    );
    setFormData(initialState);
    setLoading(false);
  };

  return (
    <div className="relative">
      <div className="relative bg-[#2e3337]/95 border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Déjanos tu opinión
        </h3>
        <p className="text-gray-300 mb-8">
          Tu feedback es muy importante para nosotros.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="w-full rounded-2xl bg-[#3a4045] border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-[#8df0c8] focus:ring-2 focus:ring-[#8df0c8]/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              className="w-full rounded-2xl bg-[#3a4045] border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-[#8df0c8] focus:ring-2 focus:ring-[#8df0c8]/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Calificación
            </label>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleRatingClick(value)}
                  className="transition-transform hover:scale-110"
                  aria-label={`Calificar con ${value} estrellas`}
                >
                  <Star
                    size={24}
                    className="text-[#c8ffb0]"
                    fill={value <= formData.rating ? "currentColor" : "none"}
                    strokeWidth={1.8}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Tu experiencia
            </label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos qué te pareció nuestro servicio..."
              required
              className="w-full rounded-2xl bg-[#3a4045] border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none resize-none focus:border-[#8df0c8] focus:ring-2 focus:ring-[#8df0c8]/20 transition"
            />
          </div>

          {successMessage && (
            <p className="text-green-400 text-sm">{successMessage}</p>
          )}

          {errorMessage && (
            <p className="text-red-400 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-[#c8ffb0] text-[#1f2529] font-semibold px-6 py-3 rounded-full hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Enviar feedback"}
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;