import { NextResponse } from 'next/server';

export async function GET() {
  // Mock email sequences data
  const sequences = {
    sequences: [
      {
        id: "welcome",
        name: "Welcome Sequence",
        subscribers: 1234,
        openRate: 34.2,
        clickRate: 12.8,
        status: "active",
        emails: [
          { day: 0, subject: "Welcome to WarmCallAI!", openRate: 45.2 },
          { day: 3, subject: "Your first AI insights are ready", openRate: 38.7 },
          { day: 7, subject: "See how others are succeeding", openRate: 32.1 },
          { day: 14, subject: "Ready to transform your sales?", openRate: 28.9 }
        ]
      },
      {
        id: "onboarding",
        name: "Product Onboarding",
        subscribers: 892,
        openRate: 41.7,
        clickRate: 18.3,
        status: "active",
        emails: [
          { day: 0, subject: "Getting started with WarmCallAI", openRate: 52.3 },
          { day: 2, subject: "Your first prospect research", openRate: 44.8 },
          { day: 5, subject: "Advanced features unlocked", openRate: 39.2 },
          { day: 10, subject: "Ready for your first warm call?", openRate: 35.6 }
        ]
      },
      {
        id: "reengagement",
        name: "Re-engagement",
        subscribers: 567,
        openRate: 28.9,
        clickRate: 9.4,
        status: "draft",
        emails: [
          { day: 0, subject: "We miss you!", openRate: 25.4 },
          { day: 3, subject: "New features you'll love", openRate: 22.1 },
          { day: 7, subject: "Special offer just for you", openRate: 19.8 }
        ]
      }
    ],
    templates: [
      {
        name: "Welcome Email Series",
        category: "Onboarding",
        usage: 234,
        avgOpenRate: 38.2
      },
      {
        name: "Product Demo Invitation",
        category: "Conversion",
        usage: 156,
        avgOpenRate: 42.1
      },
      {
        name: "Case Study Showcase",
        category: "Social Proof",
        usage: 89,
        avgOpenRate: 35.7
      },
      {
        name: "Limited Time Offer",
        category: "Promotion",
        usage: 67,
        avgOpenRate: 31.4
      },
      {
        name: "Customer Success Story",
        category: "Social Proof",
        usage: 123,
        avgOpenRate: 39.8
      }
    ],
    metrics: {
      averageOpenRate: 34.2,
      averageClickRate: 12.8,
      averageConversionRate: 3.4,
      revenuePerEmail: 2.47,
      totalSubscribers: 2693,
      activeSequences: 2
    }
  };

  return NextResponse.json(sequences);
} 