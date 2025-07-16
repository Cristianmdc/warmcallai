"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
];

export default function HeroImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => clearInterval(interval);
  }, [length]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + length) % length);
  const next = () => setCurrent((current + 1) % length);

  return (
    <div className="relative w-full h-80 flex items-center justify-center bg-white rounded-3xl shadow-xl overflow-hidden">
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-10"
      >
        <span className="text-2xl">&#8592;</span>
      </button>
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="object-contain w-full h-full transition-all duration-500"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://placehold.co/600x400?text=Upload+Your+Image";
        }}
      />
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-10"
      >
        <span className="text-2xl">&#8594;</span>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border border-blue-400 ${
              idx === current ? "bg-blue-500" : "bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 