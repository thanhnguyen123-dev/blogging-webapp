import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-white border-2 border-black sticky top-0">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold border-2 border-black px-4 py-2 hover:bg-gray-100">
          DEV
        </Link>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border-2 border-black px-4 py-2 w-96 rounded-md"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {status === "loading" ? (
          <div>Loading...</div>
        ) : session ? (
          <div className="flex items-center gap-4">
            <button 
              onClick={() => signOut()}
              className="text-sm hover:text-blue-600"
            >
              Sign out
            </button>
            <div className="relative group">
              {session.user?.image ? (
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer border-2 border-black"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black"/>
              )}
              <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-black rounded-md shadow-lg hidden group-hover:block">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium">{session.user?.name}</p>
                  <p className="text-sm text-gray-500">{session.user?.email}</p>
                </div>
                <Link 
                  href="/profile" 
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link 
                  href="/settings" 
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <button 
              onClick={() => signIn("google")}
              className="px-4 py-2 border-2 border-black hover:bg-gray-100"
            >
              Log in
            </button>
            <button 
              onClick={() => alert("hello")}
              className="px-4 py-2 border-2 border-black bg-black text-white hover:bg-gray-800"
            >
              Create account
            </button>
          </>
        )}
      </div>
    </nav>
  );
}