import Features from "@/components/features";
import TestimonialsAndFAQ from "@/components/TestimonialsAndFAQ";
import { auth } from "@/lib/auth";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const isLoggedIn = !!session;
  const mainCTAUrl = isLoggedIn ? "/dashboard" : "/auth/signup";
  const mainCTAText = isLoggedIn ? "Go to Dashboard" : "Start Your Journey";

  return (
    <main className="relative">
      <div className="relative z-10">
        <section className="pt-8 text-center md:pt-10">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm md:text-sm">
            <Sparkles className="mr-2 h-3 w-3 text-purple-300" />
            Master Development Skills Step by Step
          </div>
          <h1 className="mb-4 text-3xl leading-snug font-bold sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              DevTrails
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
            Follow curated learning roadmaps for Full Stack Development, DevOps,
            and Computer Science fundamentals. Master each checkpoint with
            hands-on tests before advancing to the next level.
          </p>
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={mainCTAUrl}>
              <button className="group relative rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 md:text-base">
                <span className="relative z-10 flex items-center">
                  {mainCTAText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 blur-md transition-opacity group-hover:opacity-100"></div>
              </button>
            </Link>
            <Link href={"/trails"}>
              <button className="group flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 md:text-base">
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Explore Roadmaps
              </button>
            </Link>
          </div>
        </section>
        <Features />
        <TestimonialsAndFAQ />
      </div>
    </main>
  );
}
