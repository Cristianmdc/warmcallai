"use client";

import React from "react";

export default function ProductShowcase() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-emerald-700 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See WarmCallAI in Action</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Watch how 30 seconds of AI turns cold calls into warm leads.
          </p>
        </div>
        {/* Split-screen video/image demo */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
            alt="Before and After Demo"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
          <div className="flex flex-col gap-4 max-w-md">
            <div className="bg-white/10 rounded-lg p-4">
              <span className="font-bold text-emerald-300">Before:</span> Cold, awkward calls
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <span className="font-bold text-emerald-300">After:</span> Confident, real conversations
            </div>
            <ul className="list-disc list-inside text-lg mt-4">
              <li>Instant research</li>
              <li>Personalized openers</li>
              <li>3x more meetings</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 