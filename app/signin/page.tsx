"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signIn("email", { email, callbackUrl: "/dashboard" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col items-center">
        <Image src="/logo.svg" width={460} height={185} alt="WarmCallAI logo" className="mx-auto -mb-5" />
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
        <button
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mb-4 hover:bg-gray-50 transition"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="w-6 h-6" />
          <span>Sign in with Google</span>
        </button>
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-gray-200" />
          <span className="mx-2 text-gray-400 text-xs">or</span>
          <hr className="flex-grow border-gray-200" />
        </div>
        <form onSubmit={handleEmailSignIn} className="w-full">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="email@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white rounded-lg py-2 font-semibold hover:bg-blue-800 transition"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in with Email"}
          </button>
        </form>
      </div>
    </div>
  );
} 