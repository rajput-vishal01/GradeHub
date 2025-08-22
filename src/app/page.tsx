import Container from "@/components/Container";
import Footer from "@/components/Footer ";
import Navbar from "@/components/Navbar";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />

        {/* Hero Section */}
        <section className="text-center pt-8 md:pt-10">
          {/* Tagline */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs md:text-sm mb-6">
            <Sparkles className="w-3 h-3 mr-2 text-purple-300" />
            Welcome to the Future of Education
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              GradeHub
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            The ultimate online exam platform that empowers educators and
            students with seamless assessment management and real-time
            analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group relative rounded-full px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm md:text-base hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg">
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"></div>
            </button>

            <button className="group flex rounded-full items-center px-5 py-2.5 backdrop-blur-md bg-white/10 text-white font-medium text-sm md:text-base border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>
        </section>
      </Container>
      <Footer />
    </main>
  );
}
