"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

const  Landing= ()=> {
  return (
    <main className="flex items-center justify-center flex-col bg-zinc-50 w-screen h-screen">
    <div className="py-40 mx-auto text-center flex flex-col items-center max-w-3xl m-15">
      <div className="mb-4 text-sm md:text-md font-sans font-semibold flex items-center border shadow-md py-2.5 px-4 md:px-5 bg-zinc-50 text-zinc-700 rounded-full uppercase">
        The Final Project
      </div>
      <h1 className="text-zinc-800 font-bold text-6xl tracking-tight sm:text-6xl">
        StackTrack.
      </h1>
      <p className="mt-6 text-gray-500 max-w-prose font-semibold text-mutates-foreground text-2xl">
        Collaborate effortlessly with your team, receive expert guidance from
        dedicated mentors, and track your progress seamlessly on the path to
        success.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            className="mt-6 rounded-full hover:shadow-sm"
            size={"lg"}
            asChild
          >
            <Link href="/sign-up">
              <p className="text-white">Get Started</p>
            </Link>
          </Button>
        </div>
    </div>
  </main>
  )
}
export default Landing;