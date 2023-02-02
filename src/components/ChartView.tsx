import { Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export default function ChartView() {
  const tabStyle =
    "dark:text-white capitalize text-xs font-semibold z-10 min-w-[0px] w-2 h-2 min-h-[0px]";

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={`flex flex-col w-full`}>
      <Tabs
        value={value}
        onChange={handleChange}
        className={`dark:bg-zinc-900 rounded-lg min-h-[0px]`}
        classes={{ indicator: "dark:bg-sky-700 h-full rounded-full" }}
      >
        <Tab label="1H" className={`${tabStyle}`} />
        <Tab label="1D" className={`${tabStyle}`} />
        <Tab label="1W" className={`${tabStyle}`} />
        <Tab label="1M" className={`${tabStyle}`} />
        <Tab label="1Y" className={`${tabStyle}`} />
        <Tab label="ALL" className={`${tabStyle}`} />
      </Tabs>
      <AreaChart
        width={730}
        height={350}
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0369a1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0369a1" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip /> */}
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#0369a1"
          fillOpacity={1}
          fill="url(#colorUv)"
          activeDot={{ r: 8 }}
        />
        {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
      </AreaChart>
    </div>
  );
}
