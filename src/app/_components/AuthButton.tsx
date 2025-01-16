import Link from "next/link";

export const CreateAccountButton = () => {
    return (
        <Link href="/signup">
            <button className="p-2 bg-transparent text-purple-400 border-2 border-purple-400 rounded-md hover:bg-purple-400 hover:text-white hover:underline transition-colors">
                Create account
            </button>
        </Link>
    );
};


export const SignInButton = () => {
    return (
        <Link href="/signin">
            <button className="p-2 text-black rounded-md hover:bg-blue-300 hover:text-white hover:underline transition-colors">
                Log in
            </button>
        </Link>
    )
}
