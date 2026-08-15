"use client";

import { Button } from "@/app/_components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/auth/sign-in");
  };

  return (
    <Button variant="destructive" onClick={handleSignOut}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
