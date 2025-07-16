'use client';
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    headline: "Always Be Prepared",
    benefit: "Instant prospect insights—know what matters before you call.",
    payoff: "Feel confident, not anxious.",
  },
  {
    icon: "📈",
    headline: "Boost Your Success",
    benefit: "5x your connection rate with smarter outreach.",
    payoff: "Win more, stress less.",
  },
  {
    icon: "🤝",
    headline: "Build Real Rapport",
    benefit: "Connect over shared interests, not scripts.",
    payoff: "Conversations, not rejections.",
  },
  {
    icon: "🏆",
    headline: "Stand Out Fast",
    benefit: "Go from overlooked to top performer in weeks.",
    payoff: "Get noticed, get promoted.",
  },
  {
    icon: "⚡",
    headline: "Save Hours Daily",
    benefit: "AI research in 30 seconds, not 2 hours.",
    payoff: "More meetings, less grind.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Abstract AI SVG Pattern */}
      <svg className="absolute top-0 left-0 w-96 h-96 opacity-10" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="180" stroke="#6366F1" strokeWidth="8" />
        <circle cx="200" cy="200" r="120" stroke="#06B6D4" strokeWidth="4" />
        <circle cx="200" cy="200" r="60" stroke="#F59E42" strokeWidth="2" />
      </svg>
      {/* Section Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From 80 Calls of Rejection to Conversations People Actually Want to Have
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              Stop grinding it out with generic scripts. Start connecting like the relationship-builder you know you can be.
            </p>
          </div>
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.7, type: "spring" }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col gap-4 items-start min-h-[260px]"
              >
                <span className="text-5xl md:text-6xl drop-shadow-sm mb-2">{feature.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
                  {feature.headline}
                </h3>
                <p className="text-lg text-gray-700 mb-2 leading-relaxed">
                  {feature.benefit}
                </p>
                <span className="inline-block bg-blue-100 text-blue-700 font-semibold rounded-full px-4 py-2 text-sm shadow-sm mt-auto">
                  💡 {feature.payoff}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
