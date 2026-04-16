import React from "react";

const HomeCard = ({ data }) => {
  console.log(data);
  const totalFriends = data.length;
  const onTrack = data.filter((f) => f.status === "on-track").length;

  const needAttention = data.filter(
    (f) => f.status === "overdue" || f.status === "almost due",
  ).length;
  console.log(totalFriends);
  return (
    <>
      <div className="flex justify-around items-center flex-wrap gap-5 text-center container mx-auto mt-10">
        <div className="shadow p-5 rounded w-[250px]">
          <p className="text-3xl font-bold text-green-900" >{totalFriends}</p>
          <h2>Total-Friends</h2>
        </div>
        <div className="shadow p-5 rounded w-[250px]">
          <p className="text-3xl font-bold text-green-900">{onTrack}</p>
          <h1>on-Track</h1>
        </div>
        <div className="shadow p-5 rounded w-[250px]">
          <p className="text-3xl font-bold text-green-900">{needAttention}</p>
          <h1>Need-Attention</h1>
        </div>
        <div className="shadow p-5 rounded w-[250px]">
          <h1 className="text-3xl font-bold text-green-900">12</h1>
          <p>Interactions This Month</p>
        </div>
      </div>
      <hr className="container mx-auto mt-8 text-gray-300" />
    </>
  );
};

export default HomeCard;
