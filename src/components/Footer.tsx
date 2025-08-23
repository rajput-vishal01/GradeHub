import logo from "@/../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full mt-16 px-4">
      <div
        className="w-full max-w-6xl mx-auto rounded-2xl backdrop-blur-md border border-white/10 
                   shadow-2xl shadow-black/30 px-6 py-6 sm:px-8 lg:px-12 
                   transition-all duration-300 bg-white/5">
        <div className="flex justify-center mb-4">
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

        <div className="pt-4 border-t border-white/10">
          <p className="text-center text-white/60 text-sm">
            © 2025. All Rights Reserved By{" "}
            <Link
              href="https://propeersinfo.com"
              className="text-purple-400 hover:text-purple-300 transition-all duration-200">
              PropeersInfo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
