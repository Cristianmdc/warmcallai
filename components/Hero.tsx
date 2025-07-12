import ButtonGradient from "./ButtonGradient";
import ButtonCheckout from "./ButtonCheckout";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
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

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
				<div className="text-center">
					{/* Trust Indicators */}
					<div className="flex justify-center items-center space-x-6 mb-8 text-sm text-gray-600">
						<span className="flex items-center">
							<span className="text-yellow-400 mr-1">⭐⭐⭐⭐⭐</span>
							4.9/5 rating
						</span>
						<span>•</span>
						<span>Join 12,000+ sales professionals</span>
						<span>•</span>
						<span>Featured in Sales Hacker, HubSpot Blog</span>
					</div>

					{/* Main Headline */}
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Turn Every{" "}
						<span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
							Cold Call
						</span>{" "}
						Into a{" "}
						<span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
							Warm Conversation
						</span>
					</h1>

					{/* Subheadline */}
					<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
						Stop calling strangers in the dark. Our AI instantly reveals the personal insights you need to connect with prospects like you've known them for years – transforming rejection into relationships and conversations into commissions.
					</p>

					{/* Supporting Copy */}
					<p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
						Imagine walking into every sales call knowing exactly what matters to your prospect. Their recent achievements, shared connections, personal interests, and business challenges – all delivered to you in seconds, not hours of research. That's the power of AI-driven prospect intelligence.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
						<ButtonCheckout className="text-lg px-8 py-4">
							Start Your Free Trial – No Credit Card Required
						</ButtonCheckout>
						<ButtonGradient className="text-lg px-8 py-4">
							Watch 2-Minute Demo
						</ButtonGradient>
					</div>

					{/* Visual Split Screen */}
					<div className="relative max-w-6xl mx-auto mt-16">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							{/* Before - Frustrated Salesperson */}
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">😞</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">Before: Blind Calling</h3>
									<p className="text-gray-600">Generic scripts, immediate rejection, frustrated salesperson</p>
								</div>
								<div className="space-y-3 text-sm text-gray-600">
									<div className="flex items-center">
										<span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
										"Hi, this is [name] from [company]..."
									</div>
									<div className="flex items-center">
										<span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
										Immediate prospect resistance
									</div>
									<div className="flex items-center">
										<span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
										Awkward conversation
									</div>
									<div className="flex items-center">
										<span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
										Quick hang-up
									</div>
								</div>
							</div>

							{/* After - Confident Salesperson */}
							<div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-blue-200">
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">😊</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">After: AI Intelligence</h3>
									<p className="text-gray-600">Personalized insights, engaged prospect, confident salesperson</p>
								</div>
								<div className="space-y-3 text-sm text-gray-600">
									<div className="flex items-center">
										<span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
										"Hi [name], I saw your post about..."
									</div>
									<div className="flex items-center">
										<span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
										Natural conversation flow
									</div>
									<div className="flex items-center">
										<span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
										Engaged prospect asking questions
									</div>
									<div className="flex items-center">
										<span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
										Meeting scheduled
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
