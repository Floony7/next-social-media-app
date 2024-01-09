"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import * as actions from "@/actions";
import { Input, Avatar, AvatarFallback, AvatarImage, Button } from "./ui/index";
import { auth } from "@/auth";
import { ReactNode } from "react";
import { getInitials } from "@/utils/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      // <span className="flex gap-3 align-middle">
      <Popover>
        <PopoverTrigger>
          <UserAvatar src={session.data.user.image} />
        </PopoverTrigger>
        <PopoverContent>
          <SignOut />
          <div className="flex justify-center align-middle mt-2">
            Logged in as&nbsp;
            <span className="font-semibold">{session.data?.user.name}</span>
          </div>
        </PopoverContent>
      </Popover>

      // </span>
    );
  } else {
    authContent = <SignIn />;
  }

  return authContent;
}

function UserAvatar(props: {
  username?: string;
  src: string | null | undefined;
}) {
  const initials = getInitials(props.username);
  return (
    <Avatar>
      {props.src ? <AvatarImage src={props.src} /> : null}
      <AvatarFallback>{props.username ? initials : "CN"}</AvatarFallback>
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
    <form className="flex justify-center" action={actions.signOut}>
      <Button
        className="bg-amber-700 duration-700 hover:bg-fuchsia-900 text-white rounded text-sm"
        type="submit"
      >
        Sign Out
      </Button>
    </form>
  );
}
