import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/libs/next-auth";
import ProspectResearch from "../../components/ProspectResearch";
import RecentSearches from "../../components/RecentSearches";
import UsageStats from "../../components/UsageStats";
import CRMIntegration from "@/components/CRMIntegration";
import TeamCollaboration from "@/components/TeamCollaboration";

export default async function DashboardPage() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/api/auth/signin");
	}

	// Mock user plan - in real implementation, this would come from the database
	const userPlan: "Free" | "Pro" | "Business" | "Enterprise" = "Business";

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						Welcome back, {session.user?.name || "Sales Professional"}
					</h1>
					<p className="text-gray-600">
						Transform your cold calls into warm conversations with AI-powered prospect intelligence.
					</p>
					<div className="mt-2">
						<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
							Business Plan
						</span>
					</div>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Prospect Research - Main Feature */}
					<div className="lg:col-span-2">
						<ProspectResearch />
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						<UsageStats />
						<RecentSearches />
						
						{/* Business Plan Features */}
						{userPlan === "Business" && (
							<>
								<CRMIntegration />
								<TeamCollaboration />
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
