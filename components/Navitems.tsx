"use client";

import React from "react";
import { NAVITEMS } from "@/lib/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navitems = () => {
  const pathname: string = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAVITEMS.map(({ title, href }) => (
        <li key={href}>
          <Link
            key={href}
            href={href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href) ? "text-gray-100" : ""
            }`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navitems;
