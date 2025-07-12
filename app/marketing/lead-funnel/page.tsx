'use client';

import { useState, useEffect } from 'react';
import { 
  Download, 
  TrendingUp, 
  Edit, 
  Plus, 
  Eye, 
  BarChart3,
  Target,
  Users,
  Mail,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

export default function LeadFunnelPage() {
  const [leadMagnets, setLeadMagnets] = useState([]);
  const [landingPages, setLandingPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch lead funnel data
    fetch('/api/marketing/lead-magnets')
      .then(res => res.json())
      .then(data => {
        setLeadMagnets(data.magnets);
        setLandingPages(data.landingPages);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching lead funnel data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lead Funnel</h1>
        <p className="text-gray-600">Manage your lead magnets and optimize landing pages for maximum conversions.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Downloads", value: "10,174", icon: Download, color: "text-blue-600" },
          { label: "Conversion Rate", value: "25.6%", icon: TrendingUp, color: "text-green-600" },
          { label: "Total Leads", value: "2,607", icon: Users, color: "text-purple-600" },
          { label: "Active Magnets", value: "4", icon: Target, color: "text-orange-600" }
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <metric.icon className={`w-8 h-8 ${metric.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Lead Magnets */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Lead Magnets</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create New</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {leadMagnets.map((magnet, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Download className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{magnet.title}</h3>
                      <p className="text-sm text-gray-600">{magnet.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      magnet.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {magnet.status}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Downloads</p>
                    <p className="font-semibold text-gray-900">{magnet.downloads.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Conversion</p>
                    <p className="font-semibold text-green-600">{magnet.conversion}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Category</p>
                    <p className="font-semibold text-gray-900">{magnet.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Landing Pages */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Landing Pages</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create Page</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {landingPages.map((page, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{page.name}</h3>
                      <p className="text-sm text-gray-600">{page.visitors.toLocaleString()} visitors</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      page.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {page.status}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Conversions</p>
                    <p className="font-semibold text-gray-900">{page.conversions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Rate</p>
                    <p className="font-semibold text-green-600">{page.rate}%</p>
                  </div>
                  <div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Analytics
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Optimization Suggestions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">High Priority</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Optimize Cold Call Scripts Landing Page",
                  description: "Conversion rate is 15% below average",
                  impact: "High",
                  effort: "Medium"
                },
                {
                  title: "A/B Test Objection Handling CTA",
                  description: "Current CTA has low click-through rate",
                  impact: "Medium",
                  effort: "Low"
                }
              ].map((suggestion, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                  <p className="text-sm text-gray-600">{suggestion.description}</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs">
                    <span className="text-red-600 font-medium">Impact: {suggestion.impact}</span>
                    <span className="text-gray-600">Effort: {suggestion.effort}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Wins</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Add Social Proof to Pricing Page",
                  description: "Include customer testimonials",
                  impact: "Medium",
                  effort: "Low"
                },
                {
                  title: "Optimize Form Fields",
                  description: "Reduce from 5 to 3 fields",
                  impact: "Medium",
                  effort: "Low"
                }
              ].map((suggestion, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                  <p className="text-sm text-gray-600">{suggestion.description}</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs">
                    <span className="text-green-600 font-medium">Impact: {suggestion.impact}</span>
                    <span className="text-gray-600">Effort: {suggestion.effort}</span>
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