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
    <div className="sticky inset-x-0 top-0 z-50 flex justify-center px-4 py-2">
      <nav
        className={`w-full max-w-4xl rounded-full transition-all duration-300 ${
          scrolled
            ? "border border-white/10 shadow-md shadow-black/20 backdrop-blur-xl"
            : "border border-white/5 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2 sm:px-6">
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
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4" />
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
                  className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all"
                >
                  <div className="h-7 w-7 overflow-hidden rounded-full shadow-sm ring-1 shadow-black/10 ring-white/20">
                    {session.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user?.name || "User"}
                        width={28}
                        height={28}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-gray-300">
                        {getUserInitials(session.user?.name)}
                      </div>
                    )}
                  </div>
                  <span className="hidden max-w-20 truncate sm:block">
                    {session.user?.name || "User"}
                  </span>
                </Link>

                {/* Logout */}
                <button
                  onClick={handleSignOut}
                  className="cursor-pointer rounded-full border border-red-400/20 p-2 text-red-400 shadow-sm transition-colors hover:text-red-300"
                  title="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </>
            ) : (
              <Link href="/auth/signup">
                <Button className="flex h-9 cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 font-medium text-white backdrop-blur-sm hover:opacity-80">
                  <UserPlus className="h-4 w-4" />
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
