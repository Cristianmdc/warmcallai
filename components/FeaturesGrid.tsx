/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function FeaturesGrid() {
	const features = [
		{
			icon: "🔍",
			title: "Instant Prospect Intelligence",
			description: "Get personal background, recent activities, shared connections, and business insights delivered in seconds – not hours of manual research.",
			emotionalPayoff: "Feel confident and prepared for every conversation",
			className: "md:col-span-2",
		},
		{
			icon: "🤝",
			title: "Find Common Ground Fast",
			description: "Discover shared experiences, mutual connections, and personal interests that turn cold prospects into warm conversations from the first hello.",
			emotionalPayoff: "Build genuine relationships, not just sales pitches",
		},
		{
			icon: "📈",
			title: "5x Your Connection Rate",
			description: "Transform your 2% cold call success rate into meaningful conversations that prospects actually want to have. Real results, real relationships.",
			emotionalPayoff: "Finally feel proud of your sales approach",
			className: "md:row-span-2",
		},
		{
			icon: "⏰",
			title: "Research in Seconds, Not Hours",
			description: "Stop spending 45 minutes researching each prospect. Get everything you need instantly and spend your time having conversations that matter.",
			emotionalPayoff: "Work smarter, not harder – and get home to your family",
		},
		{
			icon: "😌",
			title: "End the Anxiety of Cold Calling",
			description: "No more staring at the phone, dreading the next rejection. Walk into every call knowing exactly what to say and how to connect.",
			emotionalPayoff: "Love your job again instead of dreading Monday mornings",
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						From Rejection to Connection in 3 Simple Steps
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Our AI-powered platform transforms how you research and connect with prospects, 
						turning every cold call into a warm conversation.
					</p>
				</div>

				{/* Bento Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{features.map((feature, index) => (
						<div
							key={index}
							className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg ${feature.className || ""}`}
						>
							<div className="flex items-start space-x-4">
								<div className="text-4xl">{feature.icon}</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{feature.title}
									</h3>
									<p className="text-gray-600 mb-4 leading-relaxed">
										{feature.description}
									</p>
									<div className="bg-blue-50 rounded-lg p-3">
										<p className="text-sm font-medium text-blue-800">
											💡 {feature.emotionalPayoff}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Process Steps */}
				<div className="mt-20 text-center">
					<h3 className="text-2xl font-semibold text-gray-900 mb-8">
						How It Works
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-blue-600">1</span>
							</div>
							<h4 className="text-lg font-semibold text-gray-900 mb-2">
								Enter Prospect Info
							</h4>
							<p className="text-gray-600">
								Simply input a name or phone number to get started
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-emerald-600">2</span>
							</div>
							<h4 className="text-lg font-semibold text-gray-900 mb-2">
								Get AI Insights
							</h4>
							<p className="text-gray-600">
								Our AI analyzes public data to reveal personal and professional insights
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-purple-600">3</span>
							</div>
							<h4 className="text-lg font-semibold text-gray-900 mb-2">
								Connect with Confidence
							</h4>
							<p className="text-gray-600">
								Use personalized insights to start meaningful conversations
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
