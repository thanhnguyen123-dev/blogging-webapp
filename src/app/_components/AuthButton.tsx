import { signIn } from "next-auth/react";
import Link from "next/link";

export default function GoogleSignInButton() {
    const handleClick = async () => {
        await signIn("google");
    }

    return (
        <button onClick={handleClick} className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Sign in with Google
        </button>
    )
}