"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { OAuthButton } from "../_components/AuthButton";

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
        <OAuthButton
          handleClick={handleGoogleAuth}
          action="Sign up with"
          providerName="Google"
          icon={<FcGoogle className="absolute left-6" />}
        />
        <OAuthButton
          handleClick={handleGithubAuth}
          action="Sign up with"
          providerName="Github"
          icon={<IoLogoGithub className="absolute left-6" />}
        />
      </div>
    </div>
  );
}
