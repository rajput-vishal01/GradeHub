import logo from "@/../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 w-full px-4">
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 px-6 py-6 shadow-2xl shadow-black/30 backdrop-blur-md transition-all duration-300 sm:px-8 lg:px-12">
        <div className="mb-4 flex justify-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="DevTrails Logo"
              width={120}
              height={40}
              className="h-auto w-auto"
              priority
            />
          </Link>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-center text-sm text-white/60">
            © 2025. All Rights Reserved By{" "}
            <Link
              href="https://propeersinfo.com"
              className="text-purple-400 transition-all duration-200 hover:text-purple-300"
            >
              PropeersInfo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
