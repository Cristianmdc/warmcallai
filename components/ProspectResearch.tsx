"use client";

import { useState } from "react";
import { Search, Phone, User, Building, Calendar, MapPin, Award, Users } from "lucide-react";

interface ProspectData {
	name: string;
	company: string;
	title: string;
	phone?: string;
	email?: string;
	location?: string;
	recentActivity?: string[];
	personalInterests?: string[];
	businessContext?: string[];
	connectionPoints?: string[];
	conversationStarters?: string[];
}

export default function ProspectResearch() {
	const [searchInput, setSearchInput] = useState("");
	const [searchType, setSearchType] = useState<"name" | "phone">("name");
	const [isLoading, setIsLoading] = useState(false);
	const [prospectData, setProspectData] = useState<ProspectData | null>(null);
	const [error, setError] = useState("");

	const handleSearch = async () => {
		if (!searchInput.trim()) {
			setError("Please enter a name or phone number");
			return;
		}

		setIsLoading(true);
		setError("");
		setProspectData(null);

		try {
			const response = await fetch("/api/prospect-research", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					searchInput: searchInput.trim(),
					searchType
				}),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Failed to get prospect insights");
			}

			setProspectData(result.data);
		} catch (err) {
			setError("Failed to get prospect insights. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
			{/* Search Section */}
			<div className="mb-8">
				<h2 className="text-2xl font-bold text-gray-900 mb-4">
					Get Instant Prospect Intelligence
				</h2>
				<p className="text-gray-600 mb-6">
					Enter a name or phone number to get personal insights, business context, and conversation starters in seconds.
				</p>

				{/* Search Input */}
				<div className="flex flex-col sm:flex-row gap-4 mb-6">
					<div className="flex-1">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
							<input
								type="text"
								placeholder={searchType === "name" ? "Enter prospect name..." : "Enter phone number..."}
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
								className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
					</div>
					<div className="flex gap-2">
						<button
							onClick={() => setSearchType("name")}
							className={`px-4 py-2 rounded-lg border ${
								searchType === "name"
									? "bg-blue-600 text-white border-blue-600"
									: "bg-white text-gray-600 border-gray-300 hover:border-blue-300"
							}`}
						>
							<User className="w-4 h-4 inline mr-2" />
							Name
						</button>
						<button
							onClick={() => setSearchType("phone")}
							className={`px-4 py-2 rounded-lg border ${
								searchType === "phone"
									? "bg-blue-600 text-white border-blue-600"
									: "bg-white text-gray-600 border-gray-300 hover:border-blue-300"
							}`}
						>
							<Phone className="w-4 h-4 inline mr-2" />
							Phone
						</button>
					</div>
					<button
						onClick={handleSearch}
						disabled={isLoading}
						className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? "Researching..." : "Get Insights"}
					</button>
				</div>

				{error && (
					<div className="text-red-600 bg-red-50 p-3 rounded-lg mb-4">
						{error}
					</div>
				)}
			</div>

			{/* Results Section */}
			{prospectData && (
				<div className="space-y-6">
					{/* Basic Info */}
					<div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6">
						<div className="flex items-center gap-4 mb-4">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
								{prospectData.name.split(' ').map(n => n[0]).join('')}
							</div>
							<div>
								<h3 className="text-xl font-bold text-gray-900">{prospectData.name}</h3>
								<p className="text-gray-600">{prospectData.title}</p>
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<Building className="w-4 h-4" />
									{prospectData.company}
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
							{prospectData.phone && (
								<div className="flex items-center gap-2">
									<Phone className="w-4 h-4 text-gray-400" />
									<span>{prospectData.phone}</span>
								</div>
							)}
							{prospectData.location && (
								<div className="flex items-center gap-2">
									<MapPin className="w-4 h-4 text-gray-400" />
									<span>{prospectData.location}</span>
								</div>
							)}
							{prospectData.email && (
								<div className="flex items-center gap-2">
									<User className="w-4 h-4 text-gray-400" />
									<span>{prospectData.email}</span>
								</div>
							)}
						</div>
					</div>

					{/* Insights Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{/* Recent Activity */}
						<div className="bg-white border border-gray-200 rounded-xl p-6">
							<h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
								<Calendar className="w-5 h-5 text-blue-600" />
								Recent Activity
							</h4>
							<ul className="space-y-2">
								{prospectData.recentActivity?.map((activity, index) => (
									<li key={index} className="text-sm text-gray-600 flex items-start gap-2">
										<span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
										{activity}
									</li>
								))}
							</ul>
						</div>

						{/* Personal Interests */}
						<div className="bg-white border border-gray-200 rounded-xl p-6">
							<h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
								<Award className="w-5 h-5 text-emerald-600" />
								Personal Interests
							</h4>
							<div className="flex flex-wrap gap-2">
								{prospectData.personalInterests?.map((interest, index) => (
									<span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
										{interest}
									</span>
								))}
							</div>
						</div>

						{/* Business Context */}
						<div className="bg-white border border-gray-200 rounded-xl p-6">
							<h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
								<Building className="w-5 h-5 text-purple-600" />
								Business Context
							</h4>
							<ul className="space-y-2">
								{prospectData.businessContext?.map((context, index) => (
									<li key={index} className="text-sm text-gray-600 flex items-start gap-2">
										<span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
										{context}
									</li>
								))}
							</ul>
						</div>

						{/* Connection Points */}
						<div className="bg-white border border-gray-200 rounded-xl p-6">
							<h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
								<Users className="w-5 h-5 text-orange-600" />
								Connection Points
							</h4>
							<ul className="space-y-2">
								{prospectData.connectionPoints?.map((connection, index) => (
									<li key={index} className="text-sm text-gray-600 flex items-start gap-2">
										<span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
										{connection}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Conversation Starters */}
					<div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6">
						<h4 className="text-lg font-semibold text-gray-900 mb-4">
							💡 Conversation Starters
						</h4>
						<div className="space-y-3">
							{prospectData.conversationStarters?.map((starter, index) => (
								<div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
									<p className="text-gray-700 italic">"{starter}"</p>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
} 