import { NextResponse } from 'next/server';

export async function GET() {
  // Mock A/B testing data
  const abTesting = {
    activeTests: [
      {
        id: "hero-headline",
        name: "Hero Headline",
        variant: "A vs B",
        status: "Running",
        improvement: 12.3,
        visitors: 3456,
        conversions: 234,
        startDate: "2024-05-15",
        endDate: "2024-06-15"
      },
      {
        id: "cta-button",
        name: "CTA Button",
        variant: "Blue vs Green",
        status: "Running",
        improvement: 8.7,
        visitors: 2890,
        conversions: 189,
        startDate: "2024-05-20",
        endDate: "2024-06-20"
      },
      {
        id: "pricing-display",
        name: "Pricing Display",
        variant: "Monthly vs Annual",
        status: "Completed",
        improvement: 23.1,
        visitors: 5678,
        conversions: 456,
        startDate: "2024-04-01",
        endDate: "2024-05-01"
      }
    ],
    completedTests: [
      {
        id: "landing-page-layout",
        name: "Landing Page Layout",
        variant: "Single vs Multi-column",
        status: "Completed",
        improvement: 15.6,
        visitors: 12345,
        conversions: 1234,
        startDate: "2024-03-01",
        endDate: "2024-04-01"
      },
      {
        id: "form-fields",
        name: "Lead Form Fields",
        variant: "3 vs 5 fields",
        status: "Completed",
        improvement: -5.2,
        visitors: 8901,
        conversions: 567,
        startDate: "2024-02-15",
        endDate: "2024-03-15"
      }
    ],
    testIdeas: [
      {
        name: "Social Proof Placement",
        description: "Test different positions for testimonials and case studies",
        priority: "High",
        estimatedImpact: "Medium"
      },
      {
        name: "Free Trial CTA",
        description: "Test different call-to-action text for trial signups",
        priority: "Medium",
        estimatedImpact: "High"
      },
      {
        name: "Pricing Page Design",
        description: "Test different pricing table layouts and designs",
        priority: "Low",
        estimatedImpact: "Medium"
      }
    ],
    stats: {
      totalTests: 8,
      activeTests: 2,
      completedTests: 6,
      averageImprovement: 11.2,
      totalVisitors: 28970,
      totalConversions: 2480
    }
  };

  return NextResponse.json(abTesting);
} 