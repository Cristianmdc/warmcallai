'use client';

import Image from "next/image";

export default function Testimonials1() {
	const testimonials = [
		{
			quote: "I went from 2% to 15% conversion rate in my first month. This tool didn't just change my numbers – it changed how I feel about my job. I actually look forward to making calls now.",
			author: "Sarah M.",
			title: "Inside Sales Rep",
			company: "TechFlow Solutions",
			rating: "⭐⭐⭐⭐⭐",
		},
		{
			quote: "Finally got the promotion I'd been chasing for two years. When you can have real conversations instead of reading scripts, everything changes. My manager asked what I was doing differently!",
			author: "Marcus R.",
			title: "Senior Sales Representative",
			company: "MidState Manufacturing",
			rating: "⭐⭐⭐⭐⭐",
		},
		{
			quote: "Used to spend 2 hours researching prospects every morning. Now I get better insights in 30 seconds. I'm booking 3x more meetings and actually enjoying the process.",
			author: "Jennifer K.",
			title: "Business Development",
			company: "LogiCorp",
			rating: "⭐⭐⭐⭐⭐",
		},
		{
			quote: "My wife said I'm like a different person since I started using this. No more coming home defeated and stressed. I'm excited about work again.",
			author: "David L.",
			title: "Account Executive",
			company: "Growth Dynamics",
			rating: "⭐⭐⭐⭐⭐",
		},
		{
			quote: "Went from bottom 25% to top performer in one quarter. The difference is having real information about real people instead of calling blind.",
			author: "Amanda T.",
			title: "Sales Development Rep",
			company: "CloudTech",
			rating: "⭐⭐⭐⭐⭐",
		},
	];

	const stats = [
		{ number: "12,000+", label: "sales professionals trust our platform" },
		{ number: "5x", label: "average increase in call-to-meeting conversion" },
		{ number: "87%", label: "report feeling more confident in sales calls" },
		{ number: "4.9/5", label: "star rating across all reviews" },
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Real Sales Professionals, Real Transformations
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Join thousands of sales professionals who've discovered the secret to meaningful conversations and consistent results.
					</p>
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
								{stat.number}
							</div>
							<div className="text-sm text-gray-600">
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* Marquee Testimonials */}
				<div className="relative overflow-hidden">
					<div className="flex animate-marquee">
						{/* First set of testimonials */}
						<div className="flex space-x-8 min-w-full">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 min-w-[400px] flex-shrink-0"
								>
									<div className="mb-4">
										<div className="text-yellow-400 text-lg mb-4">
											{testimonial.rating}
										</div>
										<blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
											"{testimonial.quote}"
										</blockquote>
									</div>
									<div className="flex items-center">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
											{testimonial.author.split(' ').map(n => n[0]).join('')}
										</div>
										<div className="ml-4">
											<div className="font-semibold text-gray-900">
												{testimonial.author}
											</div>
											<div className="text-sm text-gray-600">
												{testimonial.title}, {testimonial.company}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						{/* Duplicate set for seamless loop */}
						<div className="flex space-x-8 min-w-full">
							{testimonials.map((testimonial, index) => (
								<div
									key={`duplicate-${index}`}
									className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 min-w-[400px] flex-shrink-0"
								>
									<div className="mb-4">
										<div className="text-yellow-400 text-lg mb-4">
											{testimonial.rating}
										</div>
										<blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
											"{testimonial.quote}"
										</blockquote>
									</div>
									<div className="flex items-center">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
											{testimonial.author.split(' ').map(n => n[0]).join('')}
										</div>
										<div className="ml-4">
											<div className="font-semibold text-gray-900">
												{testimonial.author}
											</div>
											<div className="text-sm text-gray-600">
												{testimonial.title}, {testimonial.company}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Additional Social Proof */}
				<div className="mt-16 text-center">
					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
						<h3 className="text-2xl font-semibold text-gray-900 mb-4">
							Featured in Leading Sales Publications
						</h3>
						<div className="flex justify-center items-center space-x-8 text-gray-400">
							<div className="text-lg font-semibold">Sales Hacker</div>
							<div className="text-lg font-semibold">HubSpot Blog</div>
							<div className="text-lg font-semibold">Sales Gravy</div>
							<div className="text-lg font-semibold">Inside Sales</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-marquee {
					animation: marquee 30s linear infinite;
				}
			`}</style>
		</section>
	);
}
