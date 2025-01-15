"use client";

import { useState } from 'react';



export default function CredentialsForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <form className="flex flex-col gap-6 w-full max-w-md">
            <div className="flex flex-col ">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border rounded-md"
                    required
                />
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded-md"
                    required
                />
            </div>

            <button 
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-colors"
            >
                Submit
            </button>
        </form>
    );
}