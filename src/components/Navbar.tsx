import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text">Gradehub</span>
        </div>
        <div className="bg-gray-100 rounded-4xl px-14 py-1.5">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="px-4 text-black">
              {link.title}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/auth/signup">
            <Button>Join In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
