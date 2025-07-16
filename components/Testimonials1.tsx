"use client";
import Image from "next/image";

const testimonials = [
  {
    quote: "I used to dread cold calls. Now, I look forward to them. The AI tells me what to say, and prospects open up.",
    author: "Sarah M.",
    title: "Account Executive",
    company: "TechFlow Solutions",
    badge: "+400% Conversion Rate",
    headshot: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80",
    before: "2% Conversion",
    after: "15% Conversion",
  },
  {
    quote:
      "I went from bottom 10% to top performer in one quarter. My manager thought I was cheating! The difference is having real info about real people, not just a name and number.",
    author: "Marcus R.",
    title: "Senior Sales Rep",
    company: "MidState Manufacturing",
    badge: "Top Performer",
    headshot: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    before: "Bottom 10%",
    after: "Top Performer",
  },
  {
    quote:
      "I used to spend hours researching. Now, I get better insights in 30 seconds. I book 3x more meetings and actually enjoy the process.",
    author: "Jennifer K.",
    title: "Business Development",
    company: "LogiCorp",
    badge: "3x More Meetings",
    headshot: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    before: "2 Meetings/Week",
    after: "6 Meetings/Week",
  },
  {
    quote:
      "My wife says I'm like a different person. No more coming home defeated. I'm excited about work again.",
    author: "David L.",
    title: "Account Executive",
    company: "Growth Dynamics",
    badge: "Happier at Work",
    headshot: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    before: "Stressed & Defeated",
    after: "Energized & Confident",
  },
  {
    quote:
      "I finally got the promotion I'd been chasing for two years. When you can have real conversations, everything changes.",
    author: "Amanda T.",
    title: "Sales Development Rep",
    company: "CloudTech",
    badge: "Promoted",
    headshot: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3376&q=80",
    before: "Stuck in SDR Role",
    after: "Promoted to AE",
  },
  // Optionally add more testimonials for the new images:
  {
    quote: "The AI-powered insights helped me close deals faster than ever before.",
    author: "Priya S.",
    title: "Sales Manager",
    company: "BizTech",
    badge: "Closed Deals Faster",
    headshot: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=3376&q=80",
    before: "Slow Pipeline",
    after: "Fast Closings",
  },
  {
    quote: "I feel more confident and prepared for every call.",
    author: "Jamal W.",
    title: "Account Manager",
    company: "SalesForceX",
    badge: "More Confidence",
    headshot: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=774&q=80",
    before: "Unprepared",
    after: "Prepared",
  },
];

const stats = [
  { number: "12,000+", label: "Sales pros trust us" },
  { number: "5x", label: "More meetings" },
  { number: "87%", label: "Feel confident" },
  { number: "4.9/5", label: "Avg. rating" },
];

const statIcons = [
  "👥", // users
  "📈", // conversion
  "💪", // confidence
  "⭐", // rating
];

export default function Testimonials1() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Salespeople. Real Results.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how WarmCallAI transforms careers, confidence, and commissions for sales professionals just like you.
          </p>
        </div>

        {/* Big Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="text-5xl mb-2">{statIcons[index]}</div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marquee Testimonials */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-marquee space-x-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl px-8 py-10 shadow-2xl border-2 border-blue-100 min-w-[380px] flex-shrink-0 flex flex-col items-center relative"
              >
                {/* Headshot or initials */}
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-blue-300 bg-gradient-to-br from-blue-200 to-emerald-200 flex items-center justify-center">
                  {t.headshot ? (
                    <img
                      src={t.headshot}
                      alt={t.author}
                      className="w-full h-full object-cover"
                      onError={e => (e.currentTarget.src = "https://img.icons8.com/ios-filled/50/user-male-circle.png")}
                    />
                  ) : (
                    <span className="text-3xl text-blue-700 font-bold">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                {/* Result badge */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {t.badge}
                </div>
                {/* Before/After stats */}
                <div className="flex gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">{t.before}</span>
                  <span className="text-gray-400 text-xs">→</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-bold">{t.after}</span>
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                  “{t.quote}”
                </blockquote>
                <div className="font-semibold text-gray-900 mb-1">{t.author}</div>
                <div className="text-sm text-gray-600 mb-2">
                  {t.title}, {t.company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges & Company Logos */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Trusted by Industry Leaders
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-lg font-semibold">
              <span className="flex items-center gap-2"><img src="https://img.icons8.com/color/48/000000/lock--v1.png" alt="Secure" className="w-8 h-8" /> SOC 2</span>
              <span className="flex items-center gap-2"><img src="https://img.icons8.com/color/48/000000/gdpr.png" alt="Compliant" className="w-8 h-8" /> GDPR</span>
              <span className="flex items-center gap-2"><img src="https://img.icons8.com/color/48/000000/star--v1.png" alt="5-star" className="w-8 h-8" /> 5-Star</span>
              <span>Sales Hacker</span>
              <span>HubSpot Blog</span>
              <span>Sales Gravy</span>
              <span>Inside Sales</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
