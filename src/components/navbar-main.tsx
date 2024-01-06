import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as actions from "@/actions";
// import { auth } from '@/auth';

export const NavbarMain = async () => {
  // const session = await auth();
  return (
    <nav
      className="p-5 mb-3 shadow flex md:justify-between w-auto"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div>
        <span className="cursor-pointer p-2 text-white">Logo</span>
      </div>
      <div>
        <ul className="w-9/12 flex items-center justify-evenly">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/about">News</NavLink>
          <NavLink href="/about">Chat</NavLink>
          <NavLink href="/about">Life</NavLink>
          <li>
            <div className="flex gap-3">
              <form action={actions.signIn}>
                <Button
                  className="bg-cyan-500 duration-300 hover:bg-green-700"
                  type="submit"
                  variant="default"
                >
                  Sign In
                </Button>
              </form>
              <form action={actions.signOut}>
                <Button
                  className="bg-cyan-500 duration-300 hover:bg-green-700"
                  type="submit"
                  variant="default"
                >
                  Sign Out
                </Button>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li className="mx-4 pr-7 text-white border-r border-cyan-200">
      <Link href={href}>{children}</Link>
    </li>
  );
}
