import React from "react";
import Link from "next/link";
import NavBar from "./_components/NavBar";
import LeftSideBar from "./_components/LeftSideBar";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <div className="flex flex-row">
        <LeftSideBar />
        <div></div>
      </div>
    </div>
  );
}


