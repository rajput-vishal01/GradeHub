"use client";

import { registerUser, type SignupState } from "@/app/actions/action";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";

const initialState: SignupState = {
  error: null,
  success: false,
};

const Signup = () => {
  const router = useRouter();
  const [state, formAction] = useFormState<SignupState, FormData>(
    registerUser,
    initialState,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (state.success) {
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)
      ?.value;

    signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        router.push("/");
      } else {
        console.error("Auto login failed", res);
      }
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-6">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Create Account
            </h1>
            <p className="text-base text-gray-300 sm:text-lg">
              Join{" "}
              <span className="font-semibold text-purple-400">DevTrails</span>
            </p>
          </div>

          <form
            action={async (formData) => {
              setIsSubmitting(true);
              await formAction(formData);
              setIsSubmitting(false);
            }}
            className="space-y-5"
          >
            {state.error && (
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300 backdrop-blur-sm">
                {state.error}
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-semibold text-gray-200"
              >
                <User className="h-4 w-4" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/50 focus:outline-none"
              />
            </div>

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
              {isSubmitting ? "Submitting..." : "Create Account"}
              {!isSubmitting && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-300">
              Already have an account?{" "}
            </span>
            <Link href="/auth/login" className="inline-block">
              <Button
                variant="ghost"
                className="h-auto p-0 text-sm font-semibold text-purple-400 underline underline-offset-4 transition-all duration-200 hover:bg-purple-500/10 hover:text-purple-300 hover:no-underline"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
