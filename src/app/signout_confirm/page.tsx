"use client";

import Navbar from "../_components/NavBar";
import { signOut } from "next-auth/react";

const SigOutPage = () => {
  return (
    <div className="bg-grey flex flex-col w-full max-w-10xl">
      <Navbar />
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <p className="font-bold text-2xl">Are you sure you want to sign out?</p>
        <button
          className="font-bold text-md bg-blue-700 hover:bg-blue-800 transition-colors text-white rounded-lg p-4"
          onClick={() => signOut()}
        >
          Yes, sign out
        </button>
      </div>
    </div>
  );
};

export default SigOutPage;
