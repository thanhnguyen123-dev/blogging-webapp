"use client";
import React from "react";
import CredentialsForm from "../_components/CredentialsForm";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";


export default function SignInPage() {
    async function handleGoogleAuth() {
        await signIn("google");
    }

    async function handleGithubAuth() {
        await signIn("github");
    }


    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <div className="flex flex-col gap-4 w-full max-w-md">
                <button onClick={handleGoogleAuth} className="relative flex justify-center items-center border-gray-200 border-[1px] py-2 px-4 rounded-md">
                    <FcGoogle className="absolute left-6" />
                        Continue with Google
                </button>
                <button onClick={handleGithubAuth} className="relative flex justify-center items-center border-gray-200 border-[1px] py-2 px-4 rounded-md">
                    <IoLogoGithub className="absolute left-6" />
                        Continue with Github
                </button>
            </div>
            <span>OR</span>
            <CredentialsForm />
        </div>
    )
}