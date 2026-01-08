import React from 'react';
import {
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function AnalyticsSection() {
  // Area Chart Data - Remote Crypto Service Users Over Years
  const areaChartData = [
    { year: '2020', cryptoRemote: 1200, podcast: 800, nftAnalysis: 600 },
    { year: '2021', cryptoRemote: 2400, podcast: 1600, nftAnalysis: 1400 },
    { year: '2022', cryptoRemote: 4200, podcast: 2800, nftAnalysis: 2600 },
    { year: '2023', cryptoRemote: 6800, podcast: 4200, nftAnalysis: 4000 },
    { year: '2024', cryptoRemote: 9200, podcast: 6400, nftAnalysis: 5800 },
    { year: '2025', cryptoRemote: 12400, podcast: 8600, nftAnalysis: 7600 },
  ];

  // Radial Chart Data - Service Distribution
  const radialChartData = [
    {
      name: 'Crypto Remote Control',
      value: 68.5,
      fill: '#3b82f6',
    },
    {
      name: 'Business Podcast',
      value: 52.3,
      fill: '#8b5cf6',
    },
    {
      name: 'NFT Market Analysis',
      value: 45.8,
      fill: '#06b6d4',
    },
  ];

  // Horizontal Bar Chart Data - Monthly Active Users
  const barChartData = [
    { service: 'Crypto Remote', users: 12400 },
    { service: 'Podcast', users: 8600 },
    { service: 'NFT Analysis', users: 7600 },
  ];

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs text-gray-600">
              <span style={{ color: entry.color }}>●</span>{' '}
              {entry.name}: {entry.value.toLocaleString()} users
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Analytics Overview</h2>
          <p className="text-base text-gray-600">
            Track the growth and performance of MiCrypto services across different metrics
          </p>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Area Chart */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Remote Users Growth (2020-2025)
            </h3>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart
                data={areaChartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="colorCrypto" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPodcast" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorNft" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="year"
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ fontSize: '11px', paddingTop: '15px' }}
                  iconType="circle"
                  verticalAlign="bottom"
                />
                <Area
                  type="monotone"
                  dataKey="cryptoRemote"
                  name="Crypto Remote Control"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorCrypto)"
                />
                <Area
                  type="monotone"
                  dataKey="podcast"
                  name="Business Podcast"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPodcast)"
                />
                <Area
                  type="monotone"
                  dataKey="nftAnalysis"
                  name="NFT Market Analysis"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorNft)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Right Side - Radial Chart */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Service Usage Distribution
            </h3>
            <ResponsiveContainer width="100%" height={320}>
              <RadialBarChart
                cx="50%"
                cy="40%"
                innerRadius="10%"
                outerRadius="75%"
                data={radialChartData}
                startAngle={90}
                endAngle={-270}
                margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="value"
                />
                <Legend
                  wrapperStyle={{ fontSize: '11px', paddingTop: '15px' }}
                  iconType="circle"
                  verticalAlign="bottom"
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                          <p className="text-xs font-semibold text-gray-900">
                            {payload[0].name}
                          </p>
                          <p className="text-xs text-gray-600">
                            Usage: {payload[0].value}%
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Crypto Remote Control
            </p>
            <p className="text-xs text-gray-600">
              Leading service with 12.4K active users managing remote crypto operations
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Business Podcast
            </p>
            <p className="text-xs text-gray-600">
              8.6K subscribers broadcasting worldwide with single-machine efficiency
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              NFT Market Analysis
            </p>
            <p className="text-xs text-gray-600">
              7.6K users leveraging advanced analytics for market insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsSection;
