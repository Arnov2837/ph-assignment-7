"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    
    const counts = timeline.reduce((acc, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    }, {});

    const chartData = [
      { name: "Call", value: counts["Call"] || 0 },
      { name: "Text", value: counts["Text"] || 0 },
      { name: "Video", value: counts["Video"] || 0 },
    ].filter(item => item.value > 0);

    setData(chartData);
  }, []);

  const COLORS = ["#2d4a3e", "#8b5cf6", "#10b981"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-10">
        Friendship Analytics
      </h1>

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold text-[#2d4a3e] mb-8 uppercase tracking-widest text-center md:text-left">
          By Interaction Type
        </h3>

        <div className="h-[400px] w-full">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400 font-medium italic">
              No interaction data available yet. Start checking-in with friends!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;