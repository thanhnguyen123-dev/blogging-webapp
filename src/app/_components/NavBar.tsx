"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { CreateAccountButton, SignInButton } from "./AuthButton";
import { Sign } from "crypto";

export default function Navbar() {
  const { data: session} = useSession();
  console.log(session);

  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-white border-2 sticky top-0">
      <div className="flex items-center justify-between gap-4">
        <Link href="/">
          <Image src="/dev.png" alt="This is a Dev logo" width={50} height={50}></Image>
        </Link>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border-2 px-4 py-2 w-96 rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        {
          session ? (
            <div className="flex items-center gap-4">
              <button>Create post</button>
              <button className="p-8 rounded border-black" onClick={() => signOut()}>Signout</button>
            </div>
          ) : (
            <>
              <SignInButton />
              <CreateAccountButton />
            </>
          )
        }
      </div>

    </nav>
  );
}