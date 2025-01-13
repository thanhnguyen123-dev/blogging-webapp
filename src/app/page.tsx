"use client";
import { useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import NavBar from "./_components/NavBar";
import LeftSideBar from "./_components/LeftSideBar";
import AuthButton from "./_components/AuthButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <AuthButton />
      {/* <LeftSideBar /> */}
    </>
  );
}


