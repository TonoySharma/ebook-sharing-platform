"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive
          ? "border-b-2 border-b-purple-500 text-purple-600"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;