"use client";
import { useSession } from "next-auth/react";
import { SignInButton, CreateAccountButton } from "./AuthButton";
import Link from "next/link";
import { FcHome, FcAbout, FcContacts } from "react-icons/fc";
import { FaPodcast, FaVideo, FaTags, FaThumbsUp} from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

export default function LeftSideBar() {
    const {data: session} = useSession();


    return (
        <div className="basis-1/6 flex flex-col items-center gap-4">
            {
                !session && (
                    <div className="cell">
                        <h2 className="font-bold text-lg">DEV Community is a community of 2,688,165 amazing developers</h2>
                        <p>We&apos;re a place where coders share, stay up-to-date and grow their careers.</p>
                        <div className="flex flex-col items-center gap-4">
                            <CreateAccountButton/>
                            <SignInButton />
                        </div>
                    </div>
                )
            }
            <ul id="left-side-bar" className="flex flex-col justify-start w-full gap-2">
                <Link href="/">
                    <li>
                        <FcHome />
                        Home
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <FaPodcast color="green" />
                        Podcasts
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <FaVideo />
                        Videos
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <FaTags color="orange"/>
                        Tags
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <FcAbout />
                        About
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <FcContacts />
                        Contact
                    </li>
                </Link>

            </ul>
        </div>
    );

}