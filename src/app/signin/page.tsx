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
                <OAuthButton handleClick={handleGoogleAuth} providerName="Google" icon={<FcGoogle className="absolute left-6"/>} />
                <OAuthButton handleClick={handleGithubAuth} providerName="Github" icon={<IoLogoGithub className="absolute left-6"/>} />
            </div>
            <span>OR</span>
            <CredentialsForm />
        </div>
    )
}

function OAuthButton({ handleClick, providerName,  icon}: { handleClick: () => void, providerName: string, icon: React.ReactNode }) {
    return (
        <button onClick={handleClick} className="relative flex justify-center items-center border-gray-200 border-[1px] py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
            {icon}
            Continue with {providerName}
        </button>
    )
}