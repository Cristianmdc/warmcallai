import { NextResponse } from 'next/server';

export async function GET() {
  // Mock referral program data
  const referrals = {
    program: {
      totalReferrals: 892,
      successfulConversions: 234,
      conversionRate: 26.2,
      revenueGenerated: 23450,
      activeReferrers: 156,
      averageReferralsPerUser: 5.7
    },
    rewards: [
      {
        tier: "Bronze",
        requirement: "1 referral",
        reward: "Free month of WarmCallAI Pro",
        users: 89,
        status: "active"
      },
      {
        tier: "Silver",
        requirement: "5 referrals",
        reward: "$50 account credit",
        users: 45,
        status: "active"
      },
      {
        tier: "Gold",
        requirement: "10 referrals",
        reward: "Priority support + $100 credit",
        users: 22,
        status: "active"
      }
    ],
    topReferrers: [
      {
        name: "Sarah Johnson",
        referrals: 23,
        conversions: 8,
        revenue: 2400,
        tier: "Gold"
      },
      {
        name: "Mike Chen",
        referrals: 18,
        conversions: 6,
        revenue: 1800,
        tier: "Gold"
      },
      {
        name: "Lisa Rodriguez",
        referrals: 15,
        conversions: 5,
        revenue: 1500,
        tier: "Silver"
      },
      {
        name: "David Kim",
        referrals: 12,
        conversions: 4,
        revenue: 1200,
        tier: "Silver"
      },
      {
        name: "Emma Wilson",
        referrals: 10,
        conversions: 3,
        revenue: 900,
        tier: "Silver"
      }
    ],
    monthlyStats: [
      { month: "Jan", referrals: 45, conversions: 12, revenue: 3600 },
      { month: "Feb", referrals: 67, conversions: 18, revenue: 5400 },
      { month: "Mar", referrals: 89, conversions: 23, revenue: 6900 },
      { month: "Apr", referrals: 123, conversions: 34, revenue: 10200 },
      { month: "May", referrals: 156, conversions: 42, revenue: 12600 },
      { month: "Jun", referrals: 892, conversions: 234, revenue: 23450 }
    ]
  };

  return NextResponse.json(referrals);
} 