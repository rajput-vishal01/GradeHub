import CircleDeco from "@/components/CircleDeco";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  Play,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/auth";


const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Curated Roadmaps",
    description:
      "Expert-designed learning paths for Full Stack, DevOps, DSA, and CS fundamentals",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Checkpoint Testing",
    description:
      "Validate your knowledge with practical tests before advancing to the next level",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Progress Tracking",
    description:
      "Visual progress indicators and achievement system to keep you motivated",
  },
];

const courses = [
  {
    icon: "Code",
    title: "Full Stack Development",
    description: "Master frontend and backend technologies",
    topics: ["React/Next.js", "Node.js", "Databases", "APIs"],
    difficulty: "Beginner to Advanced",
    duration: "12-16 weeks",
  },
  {
    icon: "Cloud",
    title: "DevOps Engineering",
    description: "Learn deployment and infrastructure management",
    topics: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    difficulty: "Intermediate",
    duration: "10-12 weeks",
  },
  {
    icon: "Zap",
    title: "Data Structures & Algorithms",
    description: "Master problem-solving and coding interviews",
    topics: ["Arrays", "Trees", "Graphs", "Dynamic Programming"],
    difficulty: "Beginner to Expert",
    duration: "8-12 weeks",
  },
  {
    icon: "Database",
    title: "Database Management",
    description: "Design and optimize database systems",
    topics: ["SQL", "NoSQL", "Design", "Performance"],
    difficulty: "Intermediate",
    duration: "6-8 weeks",
  },
  {
    icon: "Cpu",
    title: "Operating Systems",
    description: "Understand system-level programming concepts",
    topics: ["Processes", "Memory", "File Systems", "Concurrency"],
    difficulty: "Intermediate",
    duration: "8-10 weeks",
  },
  {
    icon: "GitBranch",
    title: "Computer Networks",
    description: "Master networking protocols and architecture",
    topics: ["TCP/IP", "HTTP", "Security", "Performance"],
    difficulty: "Intermediate",
    duration: "6-8 weeks",
  },
];

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

const getIcon = (iconName) => {
  const icons = {
    Code: <Code className="w-8 h-8" />,
    Cloud: <Cloud className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    Database: <Database className="w-8 h-8" />,
    Cpu: <Cpu className="w-8 h-8" />,
    GitBranch: <GitBranch className="w-8 h-8" />,
  };
  return icons[iconName];
};

export default async function Home() {

  const session = await auth();
  const isLoggedIn = !!session;
  
  const mainCTAUrl = isLoggedIn ? "/dashboard" : "/auth/signup";
  const courseCTAUrl = isLoggedIn ? "/roadmaps" : "/auth/signup";
  const mainCTAText = isLoggedIn ? "Go to Dashboard" : "Start Your Journey";
  const courseCTAText = isLoggedIn ? "View Roadmaps" : "Start Learning";
  const finalCTAText = isLoggedIn ? "Go to Dashboard" : "Get Started Today";

  return (
    <main className="relative">
      <Container>
        <div className="relative z-10">
          <Navbar />
          {/* Hero Section */}
          <section className="text-center pt-8 md:pt-10">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs md:text-sm mb-6">
              <Sparkles className="w-3 h-3 mr-2 text-purple-300" />
              Master Development Skills Step by Step
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                DevTrails
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Follow curated learning roadmaps for Full Stack Development,
              DevOps, and Computer Science fundamentals. Master each checkpoint
              with hands-on tests before advancing to the next level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
           <Link href={mainCTAUrl}>
              <button className="group relative rounded-full px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm md:text-base hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg">
                <span className="relative z-10 flex items-center">
                  {mainCTAText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"></div>
              </button>
           </Link>
             <Link href={'#cards'}>
              <button className="group flex rounded-full items-center px-5 py-2.5 backdrop-blur-md bg-white/10 text-white font-medium text-sm md:text-base border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Explore Roadmaps
              </button></Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 md:py-20 relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="opacity-30">
                <CircleDeco />
              </div>
            </div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    DevTrails
                  </span>
                  ?
                </h2>
                <p className="text-white/70 max-w-xl mx-auto">
                  Structured learning paths designed by industry experts with
                  built-in progress tracking and skill validation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Learning Paths Section */}
          <section className="py-16 md:py-20">
            <div id="cards"  className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Learning Path
                </span>
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Start with any path that matches your goals and skill level
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((path, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                      {getIcon(path.icon)}
                    </div>
                    <div className="text-xs text-white/60 text-right">
                      <div>{path.difficulty}</div>
                      <div>{path.duration}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {path.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {path.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {path.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Link href={courseCTAUrl}>
                    <button className="w-full py-2 text-sm font-medium text-purple-300 border border-purple-300/30 rounded-lg hover:bg-purple-300/10 transition-all duration-300">
                      {courseCTAText}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
  
          {/* Testimonials Section */}
          <section className="py-16 md:py-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What Developers Say
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Hear from learners who have grown their careers with DevTrails.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <p className="text-white/80 mb-4">"{t.text}"</p>
                  <span className="text-sm font-medium text-purple-300">
                    — {t.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Quick answers to the most common questions about DevTrails.
              </p>
            </div>
            <div className="space-y-6 max-w-2xl mx-auto">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-white/70 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </Container>
    </main>
  );
}