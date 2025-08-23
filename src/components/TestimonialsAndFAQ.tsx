const testimonials = [
  {
    name: "Arjun",
    text: "DevTrails gave me structure and confidence for my first dev job.",
  },
  {
    name: "Priya",
    text: "Checkpoint testing really kept me accountable and motivated.",
  },
  {
    name: "Karan",
    text: "The curated paths saved me months of confusion and random tutorials.",
  },
];

const faqs = [
  {
    q: "Is DevTrails free to use?",
    a: "Yes, core roadmaps are free. Premium tracks may come later.",
  },
  {
    q: "Do I need prior coding experience?",
    a: "No, beginner-friendly paths are included with guided steps.",
  },
  {
    q: "How long does it take to finish?",
    a: "Most paths can be completed in 2–4 months with consistent effort.",
  },
];

const TestimonialsAndFAQ = () => {
  return (
    <main>
      {/* Testimonials Section */}
      <section className="py-16 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            What Developers Say
          </h2>
          <p className="mx-auto max-w-xl text-white/70">
            Hear from learners who have grown their careers with DevTrails.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <p className="mb-4 text-white/80">"{t.text}"</p>
              <span className="text-sm font-medium text-purple-300">
                — {t.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-xl text-white/70">
            Quick answers to the most common questions about DevTrails.
          </p>
        </div>
        <div className="mx-auto max-w-2xl space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <h3 className="mb-2 font-semibold text-white">{item.q}</h3>
              <p className="text-sm text-white/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TestimonialsAndFAQ;
