"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col items-center">
        <Image src="/logo.svg" width={300} height={122} alt="WarmCallAI logo" className="mb-4 mx-auto" />
        <h1 className="text-2xl font-bold mb-6 text-center">Signout</h1>
        <p className="mb-6 text-center">Are you sure you want to sign out?</p>
        <button
          className="w-full bg-blue-700 text-white rounded-lg py-2 font-semibold hover:bg-blue-800 transition"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign out
        </button>
      </div>
    </div>
  );
} 