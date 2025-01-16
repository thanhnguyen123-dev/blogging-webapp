import React from "react";
import Link from "next/link";
import NavBar from "./_components/NavBar";
import LeftSideBar from "./_components/LeftSideBar";
import Feed from "./_components/Feed";
import RightSideBar from "./_components/RightSideBar";

export default function Home() {
  return (
    <div className="bg-grey flex flex-col w-full max-w-10xl">
      <NavBar />
      <div className="flex flex-row px-24 py-4 w-full">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
        <div></div>
      </div>
    </div>
  );
}


