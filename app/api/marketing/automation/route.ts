import { NextResponse } from 'next/server';

export async function GET() {
  // Mock automation workflows data
  const automation = {
    workflows: [
      {
        id: "lead-nurturing",
        name: "Lead Nurturing",
        description: "Automated follow-up sequences for new leads",
        status: "Active",
        leads: 1234,
        emailsSent: 5678,
        openRate: 34.2,
        clickRate: 12.8,
        conversions: 234,
        triggers: ["New lead signup", "Download lead magnet", "Visit pricing page"]
      },
      {
        id: "trial-conversion",
        name: "Trial Conversion",
        description: "Convert trial users to paid customers",
        status: "Active",
        leads: 567,
        emailsSent: 2345,
        openRate: 41.7,
        clickRate: 18.3,
        conversions: 189,
        triggers: ["Trial signup", "First login", "Feature usage", "Trial ending"]
      },
      {
        id: "churn-prevention",
        name: "Churn Prevention",
        description: "Re-engage at-risk customers",
        status: "Draft",
        leads: 89,
        emailsSent: 0,
        openRate: 0,
        clickRate: 0,
        conversions: 0,
        triggers: ["Low usage", "No login for 7 days", "Subscription ending"]
      },
      {
        id: "welcome-series",
        name: "Welcome Series",
        description: "Onboard new customers with product education",
        status: "Active",
        leads: 892,
        emailsSent: 3567,
        openRate: 45.2,
        clickRate: 22.1,
        conversions: 156,
        triggers: ["Account creation", "First payment", "Profile completion"]
      }
    ],
    templates: [
      {
        name: "Welcome Email",
        category: "Onboarding",
        usage: 234,
        avgOpenRate: 45.2,
        avgClickRate: 22.1
      },
      {
        name: "Feature Introduction",
        category: "Education",
        usage: 156,
        avgOpenRate: 38.7,
        avgClickRate: 18.3
      },
      {
        name: "Trial Reminder",
        category: "Conversion",
        usage: 89,
        avgOpenRate: 32.1,
        avgClickRate: 15.6
      },
      {
        name: "Success Story",
        category: "Social Proof",
        usage: 67,
        avgOpenRate: 41.2,
        avgClickRate: 19.8
      }
    ],
    stats: {
      totalWorkflows: 4,
      activeWorkflows: 3,
      totalLeads: 2780,
      totalEmailsSent: 11590,
      averageOpenRate: 38.3,
      averageClickRate: 17.2,
      totalConversions: 579
    }
  };

  return NextResponse.json(automation);
} 