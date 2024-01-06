import Link from "next/link";
import * as actions from "@/actions";
import { Input, Avatar, AvatarFallback, AvatarImage, Button } from "./index";
import { auth } from "@/auth";
import { ReactNode } from "react";

export default async function Header() {
  const session = await auth();

  let authContent: ReactNode;
  if (session?.user) {
    authContent = (
      <span className="flex gap-3 align-middle">
        <UserAvatar src={session.user.image} />
        <SignOut />
      </span>
    );
  } else {
    authContent = <SignIn />;
  }

  return (
    <nav
      className="p-5 mb-3 shadow flex md:justify-between w-8/12 mx-auto"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div>
        <span className="cursor-pointer p-2 text-white">Logo</span>
      </div>
      <div>
        <ul className="w-auto flex items-center justify-evenly text-white">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/about">News</NavLink>
          <NavLink href="/about">Chat</NavLink>
          <NavLink href="/about">Life</NavLink>
          <li>
            <div className="flex gap-3">{authContent}</div>
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

function UserAvatar(props: { src: string | null | undefined }) {
  return (
    <Avatar>
      {props.src ? <AvatarImage src={props.src} /> : null}
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

function SignIn() {
  return (
    <>
      <form action={actions.signIn}>
        <Button
          className="bg-cyan-500 duration-300 hover:bg-green-700"
          type="submit"
          variant="default"
        >
          Sign In
        </Button>
      </form>
    </>
  );
}

function SignOut() {
  return (
    <form className="mt-1" action={actions.signOut}>
      <button
        className="bg-amber-700 duration-300 hover:bg-green-700 rounded text-sm px-1"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}
