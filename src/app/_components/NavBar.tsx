"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { CreateAccountButton, SignInButton } from "./AuthButton";
import { FaDev } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  const router = useRouter();

  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="flex items-center justify-between w-full px-24 py-2 bg-white border-2 sticky top-0">
      <div className="flex items-center justify-between gap-4">
        <Link href="/">
          <FaDev className="text-5xl" />
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
        {session ? (
          <div className="flex items-center gap-4">
            <button
              className="p-2 bg-transparent text-purple-400 border-2 border-purple-400 rounded-md hover:bg-purple-400 
              hover:text-white hover:underline transition-colors"
              onClick={() => router.push("/new_post")}
            >
              Create Post
            </button>
            <Image
              src={session?.user?.image ?? "/dev.png"}
              alt="profile-image"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
              onClick={toggleDropDown}
            />

            {/** Drop down */}
            {isDropDownOpen && (
              <div className="absolute right-24 top-14 w-48 bg-white border-2 rounded-lg shadow-md z-10">
                <div className="px-4 py-2">
                  <p className="font-bold">{session.user?.name}</p>
                  <p className="text-sm text-gray-500">
                    @{session.user?.email?.split("@")[0]}
                  </p>
                </div>
                <hr />
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Dashboard
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => router.push("/new_post")}
                  >
                    Create Post
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Reading List
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <hr />
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                    onClick={() => router.push("/signout_confirm")}
                  >
                    Sign Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <SignInButton />
            <CreateAccountButton />
          </>
        )}
      </div>
    </nav>
  );
}
