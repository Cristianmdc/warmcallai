'use client';

import { useState } from 'react';
import { 
  Mail, 
  Download, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState('funnel');
  const [emailSequence, setEmailSequence] = useState('welcome');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">WarmCallAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Dashboard</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Marketing & Growth Engine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your sales process with AI-powered lead generation, automated sequences, and data-driven growth strategies.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
          {[
            { id: 'funnel', label: 'Lead Funnel', icon: Target },
            { id: 'sequences', label: 'Email Sequences', icon: Mail },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'growth', label: 'Growth Tools', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === 'funnel' && <LeadFunnel />}
        {activeTab === 'sequences' && <EmailSequences />}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'growth' && <GrowthTools />}
      </div>
    </div>
  );
}

function LeadFunnel() {
  return (
    <div className="space-y-8">
      {/* Lead Magnets */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Lead Magnets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Cold Call Script Templates",
              description: "10 proven scripts that convert prospects into customers",
              downloads: "2,847",
              conversion: "23%"
            },
            {
              title: "Prospect Research Checklist",
              description: "Step-by-step guide to researching prospects before calling",
              downloads: "1,923",
              conversion: "31%"
            },
            {
              title: "Objection Handling Guide",
              description: "How to handle 15 common sales objections with AI insights",
              downloads: "3,156",
              conversion: "28%"
            }
          ].map((magnet, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <Download className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-green-600 font-medium">{magnet.conversion} conversion</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{magnet.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{magnet.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{magnet.downloads} downloads</span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Edit <ArrowRight className="w-3 h-3 inline ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Landing Page Builder */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Landing Page Builder</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Pages</h3>
            <div className="space-y-3">
              {[
                { name: "Main Landing Page", visitors: "12,847", conversions: "1,234", rate: "9.6%" },
                { name: "Free Trial Page", visitors: "8,923", conversions: "892", rate: "10.0%" },
                { name: "Demo Request Page", visitors: "5,156", conversions: "412", rate: "8.0%" }
              ].map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{page.name}</p>
                    <p className="text-sm text-gray-600">{page.visitors} visitors</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">{page.conversions} conversions</p>
                    <p className="text-sm text-gray-600">{page.rate} rate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Create New Landing Page
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                A/B Test Existing Pages
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                Optimize Conversion Rate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailSequences() {
  const sequences = [
    {
      name: "Welcome Sequence",
      subscribers: "1,234",
      openRate: "34.2%",
      clickRate: "12.8%",
      status: "active"
    },
    {
      name: "Product Onboarding",
      subscribers: "892",
      openRate: "41.7%",
      clickRate: "18.3%",
      status: "active"
    },
    {
      name: "Re-engagement",
      subscribers: "567",
      openRate: "28.9%",
      clickRate: "9.4%",
      status: "draft"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Email Sequences Overview */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Email Sequences</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Create New Sequence
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {sequences.map((sequence, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{sequence.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  sequence.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {sequence.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subscribers:</span>
                  <span className="font-medium">{sequence.subscribers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Open Rate:</span>
                  <span className="font-medium text-green-600">{sequence.openRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Click Rate:</span>
                  <span className="font-medium text-blue-600">{sequence.clickRate}</span>
                </div>
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Edit Sequence
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Email Template Builder */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Template Builder</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Templates</h3>
            <div className="space-y-3">
              {[
                "Welcome Email Series",
                "Product Demo Invitation",
                "Case Study Showcase",
                "Limited Time Offer",
                "Customer Success Story"
              ].map((template, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-900">{template}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">
                    Use Template
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Average Open Rate</span>
                <span className="font-semibold text-green-600">34.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Average Click Rate</span>
                <span className="font-semibold text-blue-600">12.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Conversion Rate</span>
                <span className="font-semibold text-purple-600">3.4%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Revenue per Email</span>
                <span className="font-semibold text-green-600">$2.47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Leads", value: "12,847", change: "+23%", icon: Users },
          { label: "Conversion Rate", value: "9.6%", change: "+2.1%", icon: TrendingUp },
          { label: "Revenue", value: "$31,847", change: "+18%", icon: BarChart3 },
          { label: "Active Users", value: "2,341", change: "+12%", icon: Target }
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-green-600">{metric.change}</p>
              </div>
              <metric.icon className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Conversion Funnel</h2>
        <div className="space-y-4">
          {[
            { stage: "Website Visitors", count: "12,847", rate: "100%", color: "bg-blue-500" },
            { stage: "Lead Magnets", count: "3,156", rate: "24.6%", color: "bg-green-500" },
            { stage: "Email Subscribers", count: "2,341", rate: "18.2%", color: "bg-yellow-500" },
            { stage: "Demo Requests", count: "412", rate: "3.2%", color: "bg-orange-500" },
            { stage: "Trial Signups", count: "234", rate: "1.8%", color: "bg-red-500" },
            { stage: "Paid Customers", count: "89", rate: "0.7%", color: "bg-purple-500" }
          ].map((stage, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-24 text-sm text-gray-600">{stage.stage}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div 
                  className={`h-4 rounded-full ${stage.color}`}
                  style={{ width: stage.rate }}
                ></div>
              </div>
              <div className="w-20 text-right">
                <div className="font-semibold text-gray-900">{stage.count}</div>
                <div className="text-sm text-gray-600">{stage.rate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Trends */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Growth Trends</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Growth</h3>
            <div className="space-y-3">
              {[
                { month: "Jan", leads: 892, revenue: 15420 },
                { month: "Feb", leads: 1023, revenue: 18750 },
                { month: "Mar", leads: 1156, revenue: 22100 },
                { month: "Apr", leads: 1284, revenue: 25430 },
                { month: "May", leads: 1423, revenue: 28900 },
                { month: "Jun", leads: 1567, revenue: 31847 }
              ].map((data, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{data.month}</span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{data.leads} leads</div>
                    <div className="text-sm text-green-600">${data.revenue.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Channels</h3>
            <div className="space-y-3">
              {[
                { channel: "Organic Search", leads: 4234, cost: 0, roas: "∞" },
                { channel: "LinkedIn Ads", leads: 2156, cost: 8470, roas: "3.8x" },
                { channel: "Email Marketing", leads: 1892, cost: 1200, roas: "26.5x" },
                { channel: "Content Marketing", leads: 1567, cost: 3200, roas: "9.9x" },
                { channel: "Referral Program", leads: 892, cost: 0, roas: "∞" }
              ].map((channel, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{channel.channel}</span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{channel.leads} leads</div>
                    <div className="text-sm text-green-600">ROAS: {channel.roas}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GrowthTools() {
  return (
    <div className="space-y-8">
      {/* Referral Program */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Referral Program</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Referrals</span>
                <span className="font-semibold text-gray-900">892</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Successful Conversions</span>
                <span className="font-semibold text-green-600">234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Conversion Rate</span>
                <span className="font-semibold text-blue-600">26.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Revenue Generated</span>
                <span className="font-semibold text-green-600">$23,450</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rewards Structure</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Free Month</p>
                  <p className="text-sm text-gray-600">For each successful referral</p>
                </div>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">$50 Credit</p>
                  <p className="text-sm text-gray-600">For 5+ referrals</p>
                </div>
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Priority Support</p>
                  <p className="text-sm text-gray-600">For 10+ referrals</p>
                </div>
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A/B Testing */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">A/B Testing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Tests</h3>
            <div className="space-y-3">
              {[
                { name: "Hero Headline", variant: "A vs B", status: "Running", improvement: "+12%" },
                { name: "CTA Button", variant: "Blue vs Green", status: "Running", improvement: "+8%" },
                { name: "Pricing Display", variant: "Monthly vs Annual", status: "Completed", improvement: "+23%" }
              ].map((test, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{test.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      test.status === 'Running' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {test.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{test.variant}</span>
                    <span className="text-green-600 font-medium">{test.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Create New Test
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                View Test Results
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                Optimize Landing Pages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Automation Workflows */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Automation Workflows</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Lead Nurturing",
              description: "Automated follow-up sequences for new leads",
              status: "Active",
              leads: "1,234"
            },
            {
              name: "Trial Conversion",
              description: "Convert trial users to paid customers",
              status: "Active",
              leads: "567"
            },
            {
              name: "Churn Prevention",
              description: "Re-engage at-risk customers",
              status: "Draft",
              leads: "89"
            }
          ].map((workflow, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{workflow.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  workflow.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {workflow.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{workflow.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{workflow.leads} leads</span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Edit Workflow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 