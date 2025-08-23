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
    initialState
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
    <div className="min-h-screen flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Join{" "}
              <span className="text-purple-400 font-semibold">DevTrails</span>
            </p>
          </div>

          <form
            action={async (formData) => {
              setIsSubmitting(true);
              await formAction(formData);
              setIsSubmitting(false);
            }}
            className="space-y-5">
            {state.error && (
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-red-300 text-sm backdrop-blur-sm">
                {state.error}
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full h-11 px-4 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 transition-all duration-300 hover:bg-white/15"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full h-11 px-4 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/15"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full h-11 px-4 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 bg-white/10 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-400/50 transition-all duration-300 hover:bg-white/15"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 rounded-xl bg-black text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Submitting..." : "Create Account"}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-300 text-sm">
              Already have an account?{" "}
            </span>
            <Link href="/auth/login" className="inline-block">
              <Button
                variant="ghost"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 font-semibold p-0 h-auto underline underline-offset-4 hover:no-underline transition-all duration-200 text-sm">
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
