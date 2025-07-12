"use client";

import { useState } from "react";
import { Database, RefreshCw, CheckCircle, AlertCircle, Settings } from "lucide-react";

interface CRMConnection {
	id: string;
	name: string;
	status: "connected" | "disconnected" | "error";
	lastSync: string;
	prospectsSynced: number;
}

export default function CRMIntegration() {
	const [crmConnections, setCrmConnections] = useState<CRMConnection[]>([
		{
			id: "1",
			name: "Salesforce",
			status: "connected",
			lastSync: "2 hours ago",
			prospectsSynced: 156
		},
		{
			id: "2",
			name: "HubSpot",
			status: "connected",
			lastSync: "1 day ago",
			prospectsSynced: 89
		},
		{
			id: "3",
			name: "Pipedrive",
			status: "disconnected",
			lastSync: "Never",
			prospectsSynced: 0
		}
	]);

	const [isSyncing, setIsSyncing] = useState(false);

	const handleSync = async (crmId: string) => {
		setIsSyncing(true);
		// Simulate sync process
		await new Promise(resolve => setTimeout(resolve, 2000));
		setIsSyncing(false);
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "connected":
				return "text-green-600 bg-green-100";
			case "disconnected":
				return "text-gray-600 bg-gray-100";
			case "error":
				return "text-red-600 bg-red-100";
			default:
				return "text-gray-600 bg-gray-100";
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "connected":
				return <CheckCircle className="w-4 h-4" />;
			case "disconnected":
				return <AlertCircle className="w-4 h-4" />;
			case "error":
				return <AlertCircle className="w-4 h-4" />;
			default:
				return <AlertCircle className="w-4 h-4" />;
		}
	};

	return (
		<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-gray-900">
					CRM Integration
				</h3>
				<Database className="w-5 h-5 text-gray-400" />
			</div>

			<div className="space-y-4">
				{crmConnections.map((crm) => (
					<div
						key={crm.id}
						className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
					>
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
									<span className="text-white font-semibold text-sm">
										{crm.name.charAt(0)}
									</span>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">{crm.name}</h4>
									<div className="flex items-center gap-2">
										<span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(crm.status)}`}>
											{crm.status}
										</span>
										{getStatusIcon(crm.status)}
									</div>
								</div>
							</div>
							<button
								onClick={() => handleSync(crm.id)}
								disabled={isSyncing}
								className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
							>
								{isSyncing ? (
									<RefreshCw className="w-3 h-3 animate-spin" />
								) : (
									<RefreshCw className="w-3 h-3" />
								)}
								Sync
							</button>
						</div>

						<div className="grid grid-cols-2 gap-4 text-sm">
							<div>
								<span className="text-gray-500">Last Sync:</span>
								<p className="font-medium text-gray-900">{crm.lastSync}</p>
							</div>
							<div>
								<span className="text-gray-500">Prospects Synced:</span>
								<p className="font-medium text-gray-900">{crm.prospectsSynced}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Add New CRM */}
			<div className="mt-6 pt-4 border-t border-gray-200">
				<button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
					<Settings className="w-4 h-4" />
					Add New CRM
				</button>
			</div>

			{/* Sync Settings */}
			<div className="mt-6 p-4 bg-gray-50 rounded-lg">
				<h4 className="text-sm font-semibold text-gray-900 mb-3">
					Sync Settings
				</h4>
				<div className="space-y-2 text-sm">
					<div className="flex items-center justify-between">
						<span className="text-gray-600">Auto-sync new prospects</span>
						<input type="checkbox" className="rounded" defaultChecked />
					</div>
					<div className="flex items-center justify-between">
						<span className="text-gray-600">Sync conversation notes</span>
						<input type="checkbox" className="rounded" defaultChecked />
					</div>
					<div className="flex items-center justify-between">
						<span className="text-gray-600">Update existing contacts</span>
						<input type="checkbox" className="rounded" />
					</div>
				</div>
			</div>
		</div>
	);
} 