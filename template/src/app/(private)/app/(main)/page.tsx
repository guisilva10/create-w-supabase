import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "./_components/sign-out-button";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6">
      <div>Hello {session.user.name}</div>
      <SignOutButton />
    </main>
  );
}
