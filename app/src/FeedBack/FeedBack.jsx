import FeedbackList from "./FeedbackList";
import FeedbackForm from "./FeedbackForm";

const FeedBack = () => {
  return (
    <section className="w-full bg-[#3f4448] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#c8ffb0] uppercase tracking-[0.3em] text-sm mb-4">
            Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#c8ffb0] mb-4">
            Lo que opinan nuestros clientes
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Nos encanta escuchar a quienes confían en nuestros servicios.
            Comparte tu experiencia y ayúdanos a seguir mejorando.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <FeedbackList />
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
};

export default FeedBack;