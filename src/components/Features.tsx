import CircleDeco from "@/components/CircleDeco";
import { BookOpen, CheckCircle2, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Curated Roadmaps",
      description:
        "Expert-designed learning paths for Full Stack, DevOps, DSA, and CS fundamentals",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Checkpoint Testing",
      description:
        "Validate your knowledge with practical tests before advancing to the next level",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Progress Tracking",
      description:
        "Visual progress indicators and achievement system to keep you motivated",
    },
  ];

  return (
    <main>
      {/* Features Section */}
      <section className="relative py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="opacity-30">
            <CircleDeco />
          </div>
        </div>
        <div className="relative z-10">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                DevTrails
              </span>
              ?
            </h2>
            <p className="mx-auto max-w-xl text-white/70">
              Structured learning paths designed by industry experts with
              built-in progress tracking and skill validation.
            </p>
          </div>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 transition-transform group-hover:scale-110">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;
