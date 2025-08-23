"use client";

import { LayoutDashboard, LogOut, Route, UserPlus } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { data: session, status } = useSession();

  const links = [
    { title: "Trails", href: "/trails", icon: Route },

    { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const getUserInitials = (name?: string) =>
    name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "U";

  if (status === "loading") return null;

  return (
    <div className="sticky top-0 inset-x-0 z-50 flex justify-center px-4 py-2">
      <nav
        className={`w-full max-w-4xl rounded-full transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border border-white/10 shadow-md shadow-black/20"
            : "backdrop-blur-md border border-white/5"
        }`}>
        <div className="px-4 sm:px-6 py-2 flex items-center justify-between">
          {/* Left - Brand */}
          <Link href="/" className="group w-fit">
            <span className="text-lg font-semibold text-white transition-opacity group-hover:opacity-80">
              DevTrails
            </span>
          </Link>

          {/* Center - Links */}
          {session && (
            <div className="flex items-center gap-2">
              {links.map(({ href, title, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-full transition-colors">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:block">{title}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Right - Auth */}
          <div className="flex items-center gap-2">
            {session ? (
              <>
                {/* Profile */}
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-full backdrop-blur-sm border border-white/20 transition-all">
                  <div className="h-7 w-7 rounded-full ring-1 ring-white/20 shadow-sm shadow-black/10 overflow-hidden">
                    {session.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user?.name || "User"}
                        width={28}
                        height={28}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-xs text-gray-300">
                        {getUserInitials(session.user?.name)}
                      </div>
                    )}
                  </div>
                  <span className="hidden sm:block max-w-20 truncate">
                    {session.user?.name || "User"}
                  </span>
                </Link>

                {/* Logout */}
                <button
                  onClick={handleSignOut}
                  className="text-red-400 hover:text-red-300 p-2 rounded-full border border-red-400/20 shadow-sm transition-colors"
                  title="Sign out">
                  <LogOut className="h-4 w-4" />
                </button>
              </>
            ) : (
              <Link href="/auth/signup">
                <Button className="h-9 px-5 cursor-pointer flex bg-transparent items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm text-white hover:opacity-80 font-medium">
                  <UserPlus className="w-4 h-4" />
                  <span>Join In</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

