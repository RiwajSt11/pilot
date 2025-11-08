"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="flex flex-row bg-gray-800 justify-between p-4 font-bold text-lg text-zinc-50">
      <div>
        <Link href={"/"}>
          <span className={pathName === "/" ? "text-amber-600" : "text-white"}>
            Home
          </span>
        </Link>
      </div>
      <div className="space-x-2">
        <Link
          href={"/about"}
          className={pathName === "/about" ? "text-amber-600" : "text-white"}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className={pathName === "/contact" ? "text-amber-600" : "text-white"}
        >
          Contact
        </Link>
        <Link
          href={"/users"}
          className={pathName === "/users" ? "text-amber-600" : "text-white"}
        >
          Users
        </Link>
      </div>
    </nav>
  );
}
