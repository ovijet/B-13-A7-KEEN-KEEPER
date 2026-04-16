import React, { useContext, useEffect, useState } from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import { Context } from "./context/FriendsContext";

const Stats = () => {
  const { call, text, video } = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const total = data.length - call.length - text.length - video.length;

  const dataS = [
    { name: "Call", value: call.length, fill: "#2ed573" },
    { name: "Text", value: text.length, fill: "#3742fa" },
    { name: "Video", value: video.length, fill: "#244d3f" },
    { name: "Other", value: total, fill: "#e74c3c" },
  ];

  return (
    <div className="shadow border border-gray-300 mt-5 container mx-auto p-4 rounded-lg">

      <h1 className="text-lg md:text-xl font-semibold mb-4 text-center">
        By Interaction Type
      </h1>

      {/* Responsive chart container */}
      <div className="w-full h-[350px] md:h-[450px] flex justify-center items-center">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dataS}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              cornerRadius={10}
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />

            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default Stats;