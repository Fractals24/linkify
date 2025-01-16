"use client"; // Mark this as a Client Component
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {

  return (
    <button
      onClick ={()=>signIn('google')}
      className="w-full flex items-center justify-center bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <FaGoogle className="mr-3" />
      <span>Sign in with Google</span>
    </button>
  );
}
