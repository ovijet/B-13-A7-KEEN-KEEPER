import React, { useContext, useEffect, useState } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { Context } from "./context/FriendsContext";

const Stats = () => {
  const { call, text, video } = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  console.log(data, "stats data");
  let total = data.length - call.length - text.length - video.length;
  console.log(total, "ttttttttt");
  const dataS = [
    { name: "Call", value: call.length, fill: "#2ed573" },
    { name: "Text", value: text.length, fill: "#3742fa" },
    { name: "Video", value: video.length, fill: "#244d3f" },
    { name: "Other", value: total, fill: "#e74c3c" },
  ];

  return (
    <div className="shadow border border-gray-600 container mx-auto p-4 rounded-lg">
      <h1 className="text-xl font-semibold mb-4">By Interaction Type</h1>

      <div className="flex justify-center items-center w-full min-h-[60vh]">
        <PieChart width={400} height={400}>
          <Pie
            data={dataS}
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={150}
            cornerRadius={10}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
