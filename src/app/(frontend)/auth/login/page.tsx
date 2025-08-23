"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (formData: FormData) => {
    setIsSubmitting(true);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setIsSubmitting(false);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-6">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Welcome Back
            </h1>
            <p className="text-base text-gray-300 sm:text-lg">
              Sign in to{" "}
              <span className="font-semibold text-purple-400">DevTrails</span>
            </p>
          </div>

          <form action={handleLogin} className="space-y-5">
            {error && (
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300 backdrop-blur-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-semibold text-gray-200"
              >
                <Mail className="h-4 w-4" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="flex items-center gap-2 text-sm font-semibold text-gray-200"
              >
                <Lock className="h-4 w-4" />
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:border-green-400/50 focus:ring-2 focus:ring-green-500/50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-black font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Login"}
              {!isSubmitting && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-white/20"></div>
            <span className="px-4 text-sm text-gray-400">or</span>
            <div className="flex-grow border-t border-white/20"></div>
          </div>

          <Button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white/10 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-white/20 hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
            Login with GitHub
          </Button>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-300">
              Don&apos;t have an account?{" "}
            </span>
            <Link href="/auth/signup" className="inline-block">
              <Button
                variant="ghost"
                className="h-auto p-0 text-sm font-semibold text-purple-400 underline underline-offset-4 transition-all duration-200 hover:bg-purple-500/10 hover:text-purple-300 hover:no-underline"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
