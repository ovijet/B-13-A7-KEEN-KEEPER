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
      <div className="flex justify-around items-center text-center container mx-auto mt-10">
        <div className="shadow p-5 rounded w-[250px]">
          <h2>Total-Friends</h2>
          <p>{totalFriends}</p>
        </div>
        <div className="shadow p-5 rounded w-[250px]">
          <h1>on-Track</h1>
          <p>{onTrack}</p>
        </div>
        <div className="shadow p-5 rounded w-[250px]">
          <h1>Need-Attention</h1>
          <p>{needAttention}</p>
        </div>
        <div className="shadow p-5 rounded w-[250px]">
          <p>Interactions This Month</p>
          <h1>12</h1>
        </div>
      </div>
      <hr className="container mx-auto mt-8 text-gray-300" />
    </>
  );
};

export default HomeCard;
