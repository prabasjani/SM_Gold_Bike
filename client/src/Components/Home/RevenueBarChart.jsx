import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RevenueBarChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <BarChart width={730} height={250} data={data}>
      <XAxis dataKey="name" axisLine={false} className="text-xs" />
      <YAxis axisLine={false} className="text-xs" />
      <Tooltip />
      <Legend verticalAlign="top" align="right" height={35} />
      <Bar dataKey="pv" fill="#3B82F6" radius={5} barSize={20} />
      <Bar dataKey="uv" fill="#C7D2FE" radius={5} barSize={20} />
    </BarChart>
  );
};

export default RevenueBarChart;
