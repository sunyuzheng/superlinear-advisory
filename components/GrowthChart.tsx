import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'M1', linear: 10, superlinear: 10 },
  { name: 'M2', linear: 20, superlinear: 15 },
  { name: 'M3', linear: 30, superlinear: 25 },
  { name: 'M4', linear: 40, superlinear: 45 },
  { name: 'M5', linear: 50, superlinear: 80 },
  { name: 'M6', linear: 60, superlinear: 140 },
  { name: 'M7', linear: 70, superlinear: 240 },
];

export const GrowthChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] bg-gray-900/50 rounded-xl p-4 border border-gray-800 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Projected Growth Trajectory</h3>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
            <span className="text-gray-500">Linear (Traditional)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="text-indigo-400 font-bold">Superlinear (Advisory)</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
          <XAxis dataKey="name" stroke="#4b5563" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
          <YAxis stroke="#4b5563" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
            itemStyle={{ fontSize: '12px' }}
          />
          <Line 
            type="monotone" 
            dataKey="linear" 
            stroke="#6b7280" 
            strokeWidth={2} 
            dot={false} 
            strokeDasharray="5 5"
          />
          <Line 
            type="monotone" 
            dataKey="superlinear" 
            stroke="#818cf8" 
            strokeWidth={4} 
            dot={{ r: 4, fill: '#818cf8', strokeWidth: 0 }} 
            activeDot={{ r: 8, fill: '#4f46e5' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};