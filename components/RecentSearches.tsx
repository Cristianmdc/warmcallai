"use client";

import { useState } from "react";
import { Clock, User, Building, Calendar } from "lucide-react";

interface RecentSearch {
	id: string;
	name: string;
	company: string;
	title: string;
	searchedAt: string;
	insightsFound: number;
}

export default function RecentSearches() {
	const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([
		{
			id: "1",
			name: "Jennifer Walsh",
			company: "MidState Manufacturing",
			title: "VP of Operations",
			searchedAt: "2 hours ago",
			insightsFound: 8
		},
		{
			id: "2",
			name: "Robert Kim",
			company: "Pinnacle Logistics",
			title: "IT Director",
			searchedAt: "1 day ago",
			insightsFound: 6
		},
		{
			id: "3",
			name: "Sarah Chen",
			company: "CloudTech Solutions",
			title: "CFO",
			searchedAt: "2 days ago",
			insightsFound: 7
		},
		{
			id: "4",
			name: "Michael Johnson",
			company: "InnovateCorp",
			title: "VP of Sales",
			searchedAt: "3 days ago",
			insightsFound: 5
		}
	]);

	const handleSearchAgain = (search: RecentSearch) => {
		// In real implementation, this would trigger a new search
		console.log("Searching again for:", search.name);
	};

	const formatTimeAgo = (timeAgo: string) => {
		return timeAgo;
	};

	return (
		<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-lg font-semibold text-gray-900">
					Recent Searches
				</h3>
				<Clock className="w-4 h-4 text-gray-400" />
			</div>

			<div className="space-y-3">
				{recentSearches.map((search) => (
					<div
						key={search.id}
						className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer"
						onClick={() => handleSearchAgain(search)}
					>
						<div className="flex items-start justify-between mb-2">
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
									{search.name.split(' ').map(n => n[0]).join('')}
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 text-sm">
										{search.name}
									</h4>
									<p className="text-xs text-gray-600">{search.title}</p>
								</div>
							</div>
							<span className="text-xs text-gray-400">
								{formatTimeAgo(search.searchedAt)}
							</span>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Building className="w-3 h-3 text-gray-400" />
								<span className="text-xs text-gray-600">{search.company}</span>
							</div>
							<div className="flex items-center gap-1">
								<span className="text-xs text-gray-500">{search.insightsFound} insights</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{recentSearches.length === 0 && (
				<div className="text-center py-8">
					<User className="w-12 h-12 text-gray-300 mx-auto mb-3" />
					<p className="text-sm text-gray-500">No recent searches</p>
					<p className="text-xs text-gray-400 mt-1">
						Your prospect research history will appear here
					</p>
				</div>
			)}

			{recentSearches.length > 0 && (
				<div className="mt-4 pt-4 border-t border-gray-200">
					<button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium">
						View All History
					</button>
				</div>
			)}
		</div>
	);
} 