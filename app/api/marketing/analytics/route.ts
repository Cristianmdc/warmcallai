import { NextResponse } from 'next/server';

export async function GET() {
  // Mock marketing analytics data
  const analytics = {
    funnel: {
      visitors: 12847,
      leads: 3156,
      subscribers: 2341,
      demos: 412,
      trials: 234,
      customers: 89,
      conversionRates: {
        leadToSubscriber: 74.2,
        subscriberToDemo: 17.6,
        demoToTrial: 56.8,
        trialToCustomer: 38.0
      }
    },
    channels: [
      {
        name: "Organic Search",
        leads: 4234,
        cost: 0,
        revenue: 125000,
        roas: "∞"
      },
      {
        name: "LinkedIn Ads",
        leads: 2156,
        cost: 8470,
        revenue: 32000,
        roas: "3.8x"
      },
      {
        name: "Email Marketing",
        leads: 1892,
        cost: 1200,
        revenue: 31800,
        roas: "26.5x"
      },
      {
        name: "Content Marketing",
        leads: 1567,
        cost: 3200,
        revenue: 31800,
        roas: "9.9x"
      },
      {
        name: "Referral Program",
        leads: 892,
        cost: 0,
        revenue: 23450,
        roas: "∞"
      }
    ],
    trends: {
      monthly: [
        { month: "Jan", leads: 892, revenue: 15420 },
        { month: "Feb", leads: 1023, revenue: 18750 },
        { month: "Mar", leads: 1156, revenue: 22100 },
        { month: "Apr", leads: 1284, revenue: 25430 },
        { month: "May", leads: 1423, revenue: 28900 },
        { month: "Jun", leads: 1567, revenue: 31847 }
      ]
    },
    emailMetrics: {
      openRate: 34.2,
      clickRate: 12.8,
      conversionRate: 3.4,
      revenuePerEmail: 2.47
    },
    referralProgram: {
      totalReferrals: 892,
      successfulConversions: 234,
      conversionRate: 26.2,
      revenueGenerated: 23450
    }
  };

  return NextResponse.json(analytics);
} 