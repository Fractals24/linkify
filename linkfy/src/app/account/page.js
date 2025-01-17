"use server"; 

import {getServerSession} from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import grabusername from "@/actions/grabusername";

export default async function AccountPage({searchParams}) {
    const session = getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;

    if(!session){
        redirect('/');
    }
    return (
        <div>
            <form action={grabusername}>
                <h1 className="font-bold text-center text-4xl mb-3 p-2 mt-2">
                    Grab your Username
                </h1>
                <p className="text-gray-800 text-center">
                    Choose your Username
                </p>
                <div className="max-w-xs mx-auto">
                    <input
                       name="username"
                       className="mx-auto text-center border w-full p-2 mt-2"
                       defaultValue={desiredUsername}
                       type="text"
                       placeholder="username" />
                    <button 
                        className="bg-blue-600 text-white p-2 mx-auto w-full mt-2"
                        type="submit">
                            Claim your username
                        </button>
                </div>
            </form>
        </div>
    )
}