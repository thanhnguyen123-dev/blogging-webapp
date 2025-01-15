"use client";
import React from "react";
import CredentialsForm from "../_components/CredentialsForm";
import { signIn } from "next-auth/react";
import Link from "next/link";


export default function SignInPage() {
    async function handleGoogleAuth() {
        await signIn("google");
    }

    async function handleGithubAuth() {
        await signIn("github");
    }


    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <div className="flex flex-col gap-4">
            <button onClick={handleGoogleAuth} className="flex justify-center items-center w-48 h-12 bg-blue-500 text-white rounded-md">
                    Continue with Google
                </button>
            </div>
            <span>OR</span>
            <CredentialsForm />
        </div>
    )
}