import React, { useEffect, useState } from 'react';
import PermanentDrawer from '../Components/Admin_Dashboard';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#BA55D3', '#FF6347', '#20B2AA', '#FF69B4', '#A52A2A', '#7B68EE'];

export default function Statistics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/analytics') // Replace with your actual backend endpoint
      .then(res => res.json())
      .then(res => setData(res.data));
  }, []);

  if (!data) return <div className="text-center mt-10">Loading...</div>;

  const cgpaAmcatStats = [
    { name: 'CGPA Avg', value: data.eligibility_stats.cgpa.avg },
    { name: 'CGPA Max', value: data.eligibility_stats.cgpa.max },
    { name: 'CGPA Min', value: data.eligibility_stats.cgpa.min },
    { name: 'Amcat Avg', value: data.eligibility_stats.amcat.avg },
    { name: 'Amcat Max', value: data.eligibility_stats.amcat.max },
    { name: 'Amcat Min', value: data.eligibility_stats.amcat.min },
  ];

  const jobCountPerCompany = data.jobs_per_company.map((comp, index) => ({
    name: comp.company_name,
    jobs: comp.job_count,
    fill: COLORS[index % COLORS.length],
  }));

  const salaryData = Object.entries(data.salary_distribution).map(([range, count], index) => ({
    name: range,
    value: count,
    fill: COLORS[index % COLORS.length],
  }));

  const techData = Object.entries(data.tech_stack_distribution).map(([tech, count], index) => ({
    name: tech,
    value: count,
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <div>
      <PermanentDrawer />
      <div className="bg-gray-50 min-h-screen p-10 pl-[260px]">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Company Job Statistics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Jobs per Company */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Jobs per Company</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={jobCountPerCompany}>
                <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} height={100} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jobs" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Salary Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Salary Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie dataKey="value" data={salaryData} label outerRadius={100}>
                  {salaryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Tech Stack Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack Usage</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie dataKey="value" data={techData} label outerRadius={100}>
                  {techData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* CGPA & Amcat Stats */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Eligibility Stats</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cgpaAmcatStats}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">Summary</h2>
          <p className="text-lg">Total Companies: <strong>{data.total_companies}</strong></p>
          <p className="text-lg">Total Jobs: <strong>{data.total_jobs}</strong></p>
        </div>
      </div>
    </div>
  );
}
