"use client";

import ButtonCheckout from "./ButtonCheckout";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-emerald-600 overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bold text-4xl md:text-6xl tracking-tight mb-8 text-white">
          Ready to Transform?
        </h2>
        
        <div className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          <p className="mb-4">Start having better sales calls—no more cold scripts, just real results.</p>
          <p className="mb-4">Join 12,000+ sales pros who made the switch.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            What happens in your first 14 days:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold">Get your first 5 AI insights free</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="font-semibold">See your conversion rate improve</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-semibold">Feel confident before every call</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 w-full max-w-md mx-auto">
          <ButtonCheckout className="flex-1 text-xl px-8 py-5 bg-white text-blue-700 font-bold shadow-2xl border-2 border-blue-200 hover:bg-blue-50 hover:scale-105 transition-transform duration-200">
            🚀 Get 5 Insights Free
          </ButtonCheckout>
          <button className="flex-1 py-2 px-4 rounded-md font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white border-2 border-blue-600 hover:bg-blue-100 text-blue-600">
            Watch Sarah's Story
          </button>
        </div>
        
        {/* Trust badges row */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <span className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-blue-700 font-semibold text-sm">
            <img src="https://img.icons8.com/color/48/000000/lock--v1.png" alt="Secure" className="w-6 h-6" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://img.icons8.com/ios-filled/50/lock--v1.png'; }} /> SOC 2 Secure
          </span>
          <span className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-green-700 font-semibold text-sm">
            <img src="https://img.icons8.com/color/48/000000/gdpr.png" alt="Compliant" className="w-6 h-6" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://img.icons8.com/ios-filled/50/privacy-policy.png'; }} /> GDPR Compliant
          </span>
          <span className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-yellow-700 font-semibold text-sm">
            <img src="https://img.icons8.com/color/48/000000/star--v1.png" alt="5-star" className="w-6 h-6" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://img.icons8.com/ios-filled/50/star--v1.png'; }} /> 5-Star Rated
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100 text-sm">
          <span>14-day free trial</span>
          <span>•</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Join 12,000+ successful sales professionals</span>
          <span>•</span>
          <span>⭐⭐⭐⭐⭐ 4.9/5 rating</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
