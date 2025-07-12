"use client";

import { useState } from "react";
import { Users, Share2, Eye, MessageSquare, TrendingUp } from "lucide-react";

interface TeamMember {
	id: string;
	name: string;
	role: string;
	avatar: string;
	prospectsResearched: number;
	meetingsBooked: number;
	lastActive: string;
}

interface SharedProspect {
	id: string;
	name: string;
	company: string;
	sharedBy: string;
	sharedAt: string;
	insightsCount: number;
	status: "new" | "contacted" | "meeting_scheduled" | "closed";
}

export default function TeamCollaboration() {
	const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
		{
			id: "1",
			name: "Marcus Rodriguez",
			role: "Senior Sales Rep",
			avatar: "MR",
			prospectsResearched: 45,
			meetingsBooked: 12,
			lastActive: "2 hours ago"
		},
		{
			id: "2",
			name: "Sarah Martinez",
			role: "Sales Development Rep",
			avatar: "SM",
			prospectsResearched: 32,
			meetingsBooked: 8,
			lastActive: "1 hour ago"
		},
		{
			id: "3",
			name: "David Chen",
			role: "Account Executive",
			avatar: "DC",
			prospectsResearched: 28,
			meetingsBooked: 15,
			lastActive: "30 minutes ago"
		}
	]);

	const [sharedProspects, setSharedProspects] = useState<SharedProspect[]>([
		{
			id: "1",
			name: "Jennifer Walsh",
			company: "MidState Manufacturing",
			sharedBy: "Marcus Rodriguez",
			sharedAt: "2 hours ago",
			insightsCount: 8,
			status: "meeting_scheduled"
		},
		{
			id: "2",
			name: "Robert Kim",
			company: "Pinnacle Logistics",
			sharedBy: "Sarah Martinez",
			sharedAt: "1 day ago",
			insightsCount: 6,
			status: "contacted"
		},
		{
			id: "3",
			name: "Patricia Gonzalez",
			company: "CloudTech Solutions",
			sharedBy: "David Chen",
			sharedAt: "3 days ago",
			insightsCount: 7,
			status: "closed"
		}
	]);

	const getStatusColor = (status: string) => {
		switch (status) {
			case "new":
				return "bg-blue-100 text-blue-800";
			case "contacted":
				return "bg-yellow-100 text-yellow-800";
			case "meeting_scheduled":
				return "bg-green-100 text-green-800";
			case "closed":
				return "bg-gray-100 text-gray-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getStatusText = (status: string) => {
		switch (status) {
			case "new":
				return "New";
			case "contacted":
				return "Contacted";
			case "meeting_scheduled":
				return "Meeting Scheduled";
			case "closed":
				return "Closed";
			default:
				return "Unknown";
		}
	};

	return (
		<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-gray-900">
					Team Collaboration
				</h3>
				<Users className="w-5 h-5 text-gray-400" />
			</div>

			{/* Team Performance */}
			<div className="mb-6">
				<h4 className="text-sm font-semibold text-gray-900 mb-3">
					Team Performance
				</h4>
				<div className="space-y-3">
					{teamMembers.map((member) => (
						<div
							key={member.id}
							className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
										{member.avatar}
									</div>
									<div>
										<h5 className="font-semibold text-gray-900 text-sm">
											{member.name}
										</h5>
										<p className="text-xs text-gray-600">{member.role}</p>
									</div>
								</div>
								<div className="text-right">
									<div className="text-sm font-semibold text-gray-900">
										{member.meetingsBooked} meetings
									</div>
									<div className="text-xs text-gray-500">
										{member.prospectsResearched} prospects
									</div>
								</div>
							</div>
							<div className="mt-2 text-xs text-gray-500">
								Last active: {member.lastActive}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Shared Prospects */}
			<div className="mb-6">
				<h4 className="text-sm font-semibold text-gray-900 mb-3">
					Shared Prospects
				</h4>
				<div className="space-y-3">
					{sharedProspects.map((prospect) => (
						<div
							key={prospect.id}
							className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
						>
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
										{prospect.name.split(' ').map(n => n[0]).join('')}
									</div>
									<div>
										<h5 className="font-semibold text-gray-900 text-sm">
											{prospect.name}
										</h5>
										<p className="text-xs text-gray-600">{prospect.company}</p>
									</div>
								</div>
								<span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(prospect.status)}`}>
									{getStatusText(prospect.status)}
								</span>
							</div>
							<div className="flex items-center justify-between text-xs text-gray-500">
								<span>Shared by {prospect.sharedBy}</span>
								<span>{prospect.insightsCount} insights</span>
								<span>{prospect.sharedAt}</span>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Quick Actions */}
			<div className="space-y-3">
				<button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
					<Share2 className="w-4 h-4" />
					Share Prospect with Team
				</button>
				<button className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
					<Eye className="w-4 h-4" />
					View Team Analytics
				</button>
			</div>

			{/* Team Stats */}
			<div className="mt-6 p-4 bg-gray-50 rounded-lg">
				<h4 className="text-sm font-semibold text-gray-900 mb-3">
					Team Stats
				</h4>
				<div className="grid grid-cols-2 gap-4 text-sm">
					<div className="text-center">
						<div className="text-2xl font-bold text-blue-600">105</div>
						<div className="text-gray-600">Total Prospects</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold text-emerald-600">35</div>
						<div className="text-gray-600">Meetings Booked</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold text-purple-600">12.8%</div>
						<div className="text-gray-600">Avg Conversion</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold text-orange-600">5x</div>
						<div className="text-gray-600">Efficiency Gain</div>
					</div>
				</div>
			</div>
		</div>
	);
} 