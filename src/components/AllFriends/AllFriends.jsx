import React from "react";
import { Link } from "react-router";

const AllFriends = ({ friends }) => {
  let { name, picture, days_since_contact, tags, status } = friends;

  let getStatusColor = (status) => {
    if (status === "overdue") {
      return "bg-red-600 text-white";
    }
    if (status === "almost due") {
      return "bg-green-800 text-white";
    }
    if (status === "on-track") {
      return "bg-yellow-400 text-white";
    }
  };
  return (
    <Link
      to={`/allFriendDetails/${friends.id}`}
      className=" mx-w-[250px] mx-h-[250px] shadow-sm container mx-auto"
    >
      <figure className="px-10 pt-10">
        <img src={picture} className="rounded-full max-w-[100px] mx-auto" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-[15px] text-gray-500">{days_since_contact}d age</p>
        <div className="space-y-3">
          <p className="bg-[#CBFADB] text-[#244d3f] px-2 py-0 text-[15px] rounded-full">
            {tags[0]}
          </p>
        </div>
        <p
          className={`${getStatusColor(status)} px-3 py-1 text-[17px] rounded-full`}
        >
          {status}
        </p>
      </div>
    </Link>
  );
};

export default AllFriends;
