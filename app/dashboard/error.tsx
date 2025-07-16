"use client";

import Link from "next/link";
import ButtonSupport from "@/components/ButtonSupport";

// A simple error boundary to show a nice error page if something goes wrong (Error Boundary)
// Users can contanct support, go to the main page or try to reset/refresh to fix the error
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center text-center gap-6 p-6">
        <div className="p-6 bg-white rounded-xl">
          <h2 className="text-xl font-bold text-red-500">Something went wrong!</h2>
          <p className="text-gray-600 mt-2">An error occurred on the dashboard.</p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              className="btn btn-primary"
              onClick={() => reset()}
            >
              Try again
            </button>
            <Link href="/" className="btn btn-ghost">
              Go to main page
            </Link>
          </div>

          <div className="mt-8">
            <ButtonSupport />
          </div>
        </div>
      </div>
    </>
  );
}
