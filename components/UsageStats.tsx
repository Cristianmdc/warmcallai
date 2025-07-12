"use client";

import { useState, useEffect } from "react";
import { BarChart3, Clock, Zap, TrendingUp } from "lucide-react";

interface UsageData {
	plan: string;
	queriesUsed: number;
	queriesLimit: number;
	conversionRate: number;
	meetingsBooked: number;
	timeSaved: number; // in hours
}

export default function UsageStats() {
	const [usageData, setUsageData] = useState<UsageData>({
		plan: "Pro",
		queriesUsed: 23,
		queriesLimit: 50,
		conversionRate: 12.8,
		meetingsBooked: 8,
		timeSaved: 12.5
	});

	const getProgressColor = (percentage: number) => {
		if (percentage >= 80) return "bg-red-500";
		if (percentage >= 60) return "bg-yellow-500";
		return "bg-green-500";
	};

	const getProgressWidth = (used: number, limit: number) => {
		return Math.min((used / limit) * 100, 100);
	};

	return (
		<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Your Usage This Month
			</h3>

			{/* Plan Info */}
			<div className="mb-6">
				<div className="flex items-center justify-between mb-2">
					<span className="text-sm text-gray-600">Current Plan</span>
					<span className="text-sm font-semibold text-blue-600">{usageData.plan}</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-sm text-gray-600">Queries Used</span>
					<span className="text-sm font-semibold text-gray-900">
						{usageData.queriesUsed} / {usageData.queriesLimit}
					</span>
				</div>
				<div className="mt-2">
					<div className="w-full bg-gray-200 rounded-full h-2">
						<div
							className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(
								getProgressWidth(usageData.queriesUsed, usageData.queriesLimit)
							)}`}
							style={{
								width: `${getProgressWidth(usageData.queriesUsed, usageData.queriesLimit)}%`
							}}
						></div>
					</div>
				</div>
			</div>

			{/* Performance Metrics */}
			<div className="space-y-4">
				<div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
					<div className="flex items-center gap-2">
						<TrendingUp className="w-4 h-4 text-blue-600" />
						<span className="text-sm text-gray-600">Conversion Rate</span>
					</div>
					<span className="text-sm font-semibold text-blue-600">
						{usageData.conversionRate}%
					</span>
				</div>

				<div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
					<div className="flex items-center gap-2">
						<BarChart3 className="w-4 h-4 text-emerald-600" />
						<span className="text-sm text-gray-600">Meetings Booked</span>
					</div>
					<span className="text-sm font-semibold text-emerald-600">
						{usageData.meetingsBooked}
					</span>
				</div>

				<div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
					<div className="flex items-center gap-2">
						<Clock className="w-4 h-4 text-purple-600" />
						<span className="text-sm text-gray-600">Time Saved</span>
					</div>
					<span className="text-sm font-semibold text-purple-600">
						{usageData.timeSaved}h
					</span>
				</div>

				<div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
					<div className="flex items-center gap-2">
						<Zap className="w-4 h-4 text-orange-600" />
						<span className="text-sm text-gray-600">Efficiency Gain</span>
					</div>
					<span className="text-sm font-semibold text-orange-600">
						5x
					</span>
				</div>
			</div>

			{/* Upgrade CTA */}
			{usageData.queriesUsed >= usageData.queriesLimit * 0.8 && (
				<div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-200">
					<h4 className="text-sm font-semibold text-blue-900 mb-2">
						Running low on queries?
					</h4>
					<p className="text-xs text-blue-700 mb-3">
						Upgrade to Business plan for more queries and team features.
					</p>
					<button className="w-full px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
						Upgrade Plan
					</button>
				</div>
			)}
		</div>
	);
} 