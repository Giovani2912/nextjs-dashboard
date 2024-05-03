"use client"
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Dom",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Seg",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Ter",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Qua",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Qui",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Sex",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sab",
    visit: 3490,
    click: 4300,
  },
];

const Chart = () => {
  return (
    <div className="h-[450px] bg-slate-800 p-5 rounded-lg mt-5">
      <h2 className="mb-4 font-extralight text-2xl">Gráfico semanal</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "#151c2c" ,border: "none"}}/>
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
