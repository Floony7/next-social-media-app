import Link from "next/link";
import { ReactNode } from "react";
import HeaderAuth from "../header-auth";

export default function Header() {
  return (
    <nav className="p-5 mb-3 w-full lg:w-4/6 flex md:justify-between mx-auto">
      <div>
        <span className="p-2 text-white">
          <Link href="/">Logo</Link>
        </span>
      </div>
      <div>
        <ul className="w-auto flex items-center justify-evenly text-white">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/about">News</NavLink>
          <NavLink href="/about">Chat</NavLink>
          <NavLink href="/about">Life</NavLink>
          <li>
            <HeaderAuth />
          </li>
        </ul>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li className="mx-4 pr-7 text-white border-r border-cyan-200">
      <Link href={href}>{children}</Link>
    </li>
  );
}
