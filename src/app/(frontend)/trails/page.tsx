import { auth } from "@/lib/auth";
import { Cloud, Code, Cpu, Database, GitBranch, Zap } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type IconName = "Code" | "Cloud" | "Zap" | "Database" | "Cpu" | "GitBranch";

const icons: Record<IconName, ReactNode> = {
  Code: <Code className="h-8 w-8" />,
  Cloud: <Cloud className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
  Database: <Database className="h-8 w-8" />,
  Cpu: <Cpu className="h-8 w-8" />,
  GitBranch: <GitBranch className="h-8 w-8" />,
};

const getIcon = (iconName: IconName) => icons[iconName];

interface Course {
  icon: IconName;
  title: string;
  description: string;
  topics: string[];
  difficulty: string;
  duration: string;
}

const Page = async () => {
  const session = await auth();
  const isLoggedIn = !!session;

  const courseCTAUrl = isLoggedIn ? "/roadmaps" : "/auth/signup";
  const courseCTAText = isLoggedIn ? "View Roadmap" : "Start Learning";

  const courses: Course[] = [
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

  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        {/* Learning Paths Section */}
        <section className="py-16 md:py-20">
          <div id="cards" className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Learning Path
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-white/70">
              Start with any path that matches your goals and skill level
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((path, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 transition-transform group-hover:scale-110">
                    {getIcon(path.icon)}
                  </div>
                  <div className="text-right text-xs text-white/60">
                    <div>{path.difficulty}</div>
                    <div>{path.duration}</div>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {path.title}
                </h3>
                <p className="mb-4 text-sm text-white/70">{path.description}</p>
                <div className="mb-4 flex flex-wrap gap-1">
                  {path.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <Link href={courseCTAUrl}>
                  <button className="w-full rounded-lg border border-purple-300/30 py-2 text-sm font-medium text-purple-300 transition-all duration-300 hover:bg-purple-300/10">
                    {courseCTAText}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
