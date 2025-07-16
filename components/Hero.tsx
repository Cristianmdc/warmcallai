"use client";

import Image from "next/image";
import ButtonGradient from "./ButtonGradient";
import ButtonCheckout from "./ButtonCheckout";
import HeroImageSlider from "./HeroImageSlider";
import ButtonSignin from "./ButtonSignin";
import config from "@/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header with Login Button */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image src="/logo.svg" width={120} height={49} alt="WarmCallAI logo" />
            </div>
            <ButtonSignin text="Log In" extraStyle="btn-sm" />
          </div>
        </div>
      </div>

      {/* Aurora Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-emerald-400/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-emerald-600/10"></div>
      {/* Animated Dots Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          {/* Left: Visual (Frustrated to Confident Split) */}
          <div className="flex-1 flex flex-col items-center md:items-start relative w-full">
            {/* Split-screen background */}
            <div className="absolute inset-0 z-0 hidden md:block">
              <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-blue-200 via-blue-100 to-gray-100 opacity-80"></div>
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-emerald-100 via-white to-emerald-50 opacity-80"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 via-emerald-400 to-transparent animate-pulse rounded-full"></div>
            </div>
            <div className="relative z-10 w-full flex flex-col items-center md:items-start">
              {/* You can swap this for a custom illustration or keep the slider for now */}
              <div className="mb-8 flex justify-center md:justify-start">
                <div className="bg-white rounded-xl shadow-lg p-4 inline-block">
                  <Image src="/logo.svg" width={250} height={102} alt="WarmCallAI logo" />
                </div>
              </div>
              <HeroImageSlider />
              {/* Supporting copy below visual */}
              <div className="mt-8 max-w-md text-gray-700 text-base md:text-lg leading-relaxed bg-white/80 rounded-xl shadow p-6">
                Rediscover the joy of connecting with people, not just pitching. Our AI gives you the right information at the right time.
              </div>
              {/* Trust badges */}
              <div className="flex gap-3 mt-8">
                <Image src="https://img.icons8.com/color/48/000000/lock--v1.png" alt="Secure" width={40} height={40} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://img.icons8.com/ios-filled/50/lock--v1.png'; }} />
                <Image src="https://img.icons8.com/color/48/000000/gdpr.png" alt="Compliant" width={40} height={40} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://img.icons8.com/ios-filled/50/privacy-policy.png'; }} />
                <Image src="https://img.icons8.com/color/48/000000/star--v1.png" alt="5-star" width={40} height={40} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://img.icons8.com/ios-filled/50/star--v1.png'; }} />
              </div>
            </div>
          </div>
          {/* Right: Text & CTA */}
          <div className="flex-1 text-center md:text-left relative z-10 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
              Stop Dreading Sales Calls
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
              Our AI gives you instant insights so you can connect, not just pitch. No more cold calls in the dark—just real conversations that convert.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-md mb-8">
              <ButtonCheckout priceId={config.stripe.plans[0].priceId} className="w-full sm:w-auto">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span role="img" aria-label="rocket">🚀</span>
                    <span className="font-bold text-lg whitespace-nowrap">Start Free Trial</span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1 font-normal normal-case tracking-normal whitespace-nowrap">5 Queries Free</p>
                </div>
              </ButtonCheckout>
              <button className="btn btn-lg bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-100 w-full sm:w-auto">
                Watch 2-Min Demo ▶
              </button>
            </div>
            {/* Trust indicators under CTAs */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4 text-base text-gray-700 font-semibold">
              <span className="flex items-center">
                <span className="text-yellow-400 mr-1">⭐⭐⭐⭐⭐</span>
                4.9/5 rating from actual sales reps
              </span>
              <span>•</span>
              <span>Join 12,000+ sales professionals who've transformed their careers</span>
              <span>•</span>
              <span>Featured in Sales Hacker, HubSpot, Revenue.io</span>
              <span>•</span>
              <span>Used by reps at Salesforce, HubSpot, and Gong</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
