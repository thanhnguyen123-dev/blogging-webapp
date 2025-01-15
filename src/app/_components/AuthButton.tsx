import Link from "next/link";

export const CreateAccountButton = () => {
    return (
        <Link href="/signup">
            <button className="p-2 bg-transparent text-blue-500 border border-blue-500 rounded-md hover:bg-purple-500 hover:text-white hover:underline">
                Create account
            </button>
        </Link>
    );
};


export const SignInButton = () => {
    return (
        <Link href="/signin">
            <button className="p-2 text-black rounded-md hover:bg-blue-500 hover:underline">
                Log in
            </button>
        </Link>
    )
}
