import * as actions from "@/actions";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import Profile from "@/components/ui/profile";
import Header from "@/components/ui/header";
export default async function Home() {
  const session = await auth();

  return (
    <div className="w-4/6 mx-auto">
      <form action={actions.signIn}>
        <Button type="submit" variant="default">
          Sign In
        </Button>
      </form>
      <form className="mt-2" action={actions.signOut}>
        <Button type="submit" variant="default">
          Sign Out
        </Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}

      <Profile />
    </div>
  );
}
