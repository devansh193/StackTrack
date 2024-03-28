"use client";
import Link from "next/link";

import { Button } from "./ui/button";
import router, { useRouter } from "next/router";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
const Navbar = () => {

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  if (!isLoaded || !userId){
    return (
      <>
        <nav className="fixed z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/80 backdrop-blur-md flex items-center gap-2">
          <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
              <Link href='/'>
              <div>
                  <h1 className="text-zinc-800 font-bold text-2xl">StackTrack</h1>
              </div>
              </Link>
              <div className="flex items-center justify-between md:w-auto md:block space-x-2 md:space-x-4">
              <Link href='/sign-in'>
                <Button>Login</Button>
              </Link>
              <Link href='/sign-up'>
                <Button variant="outline">Join now</Button>
              </Link>
            </div>
            </div>
        </nav>
      </>
    );
  }
  return (
    <>
      <nav className="fixed z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/80 backdrop-blur-md flex items-center gap-2">
        <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
            <Link href='/'>
            <div>
                <h1 className="text-zinc-800 font-bold text-2xl">StackTrack</h1>
            </div>
            </Link>
            <div className="flex items-center justify-between md:w-auto md:block space-x-2 md:space-x-4">
            <UserButton/>
          </div>
          </div>
      </nav>
    </>
  );
  };

export default Navbar;
