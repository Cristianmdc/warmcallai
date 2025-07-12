import { NextResponse } from 'next/server';

export async function GET() {
  // Mock lead magnets data
  const leadMagnets = {
    magnets: [
      {
        id: "cold-call-scripts",
        title: "Cold Call Script Templates",
        description: "10 proven scripts that convert prospects into customers",
        downloads: 2847,
        conversion: 23.4,
        category: "Sales Tools",
        createdDate: "2024-01-15",
        status: "active"
      },
      {
        id: "prospect-research-checklist",
        title: "Prospect Research Checklist",
        description: "Step-by-step guide to researching prospects before calling",
        downloads: 1923,
        conversion: 31.2,
        category: "Research",
        createdDate: "2024-02-03",
        status: "active"
      },
      {
        id: "objection-handling-guide",
        title: "Objection Handling Guide",
        description: "How to handle 15 common sales objections with AI insights",
        downloads: 3156,
        conversion: 28.7,
        category: "Sales Skills",
        createdDate: "2024-01-28",
        status: "active"
      },
      {
        id: "sales-automation-playbook",
        title: "Sales Automation Playbook",
        description: "Complete guide to automating your sales process with AI",
        downloads: 1456,
        conversion: 25.1,
        category: "Automation",
        createdDate: "2024-03-10",
        status: "draft"
      },
      {
        id: "crm-integration-guide",
        title: "CRM Integration Guide",
        description: "How to integrate WarmCallAI with your existing CRM",
        downloads: 892,
        conversion: 19.8,
        category: "Integration",
        createdDate: "2024-02-20",
        status: "active"
      }
    ],
    landingPages: [
      {
        name: "Main Landing Page",
        visitors: 12847,
        conversions: 1234,
        rate: 9.6,
        status: "active"
      },
      {
        name: "Free Trial Page",
        visitors: 8923,
        conversions: 892,
        rate: 10.0,
        status: "active"
      },
      {
        name: "Demo Request Page",
        visitors: 5156,
        conversions: 412,
        rate: 8.0,
        status: "active"
      },
      {
        name: "Pricing Page",
        visitors: 3456,
        conversions: 234,
        rate: 6.8,
        status: "active"
      }
    ],
    stats: {
      totalDownloads: 10174,
      averageConversion: 25.6,
      totalLeads: 2607,
      activeMagnets: 4
    }
  };

  return NextResponse.json(leadMagnets);
} 