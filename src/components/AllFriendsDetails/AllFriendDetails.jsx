import React from "react";
import { IoIosVideocam, IoMdText } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router";

const AllFriendDetails = () => {
  let { id } = useParams();
  const friendDetails = useLoaderData();

  const expectedFriends = friendDetails.find((book) => book.id === Number(id));

  if (!expectedFriends) {
    return <p className="text-center mt-10">Friend not found ❌</p>;
  }

  let {
    name,
    picture,
    days_since_contact,
    tags,
    status,
    bio,
    email,
    goal,
    next_due_date,
  } = expectedFriends;

  return (
    <div className="min-h-screen py-6 px-3">
      <div className="grid lg:grid-cols-2 gap-6 container mx-auto">
        {/* LEFT SIDE */}
        <div className="space-y-4">
          {/* Profile Card */}
          <div className="bg-white shadow-xl rounded-3xl p-6 text-center hover:shadow-2xl transition">
            <img
              src={picture}
              alt={name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-green-200 shadow"
            />

            <h1 className="text-xl font-bold mt-3 text-gray-800">{name}</h1>

            <p
              className={`mt-1 text-sm font-medium ${
                status === "Active" ? "text-green-600" : "text-red-500"
              }`}
            >
              {status}
            </p>

            <div className="mt-3 flex justify-center gap-2 flex-wrap">
              <p className="bg-green-500 p-1 py- rounded-full ">{tags[0]} </p>
            </div>

            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>{bio}</p>
              <p className="text-gray-500 break-all">{email}</p>
            </div>
          </div>

          {/* Extra Boxes */}
          <div className="grid sm:grid-cols-1 gap-3">
            <div className="bg-white shadow-md p-4 rounded-xl text-center">
              📞 Last Call
            </div>
            <div className="bg-white shadow-md p-4 rounded-xl text-center">
              📩 Last Message
            </div>
            <div className="bg-white shadow-md p-4 rounded-xl text-center">
              🎯 Notes
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                {days_since_contact}
              </h1>
              <p className="text-xs md:text-sm text-gray-500">Days</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                {goal}
              </h1>
              <p className="text-xs md:text-sm text-gray-500">Goal</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                {next_due_date}
              </h1>
              <p className="text-xs md:text-sm text-gray-500">Next</p>
            </div>
          </div>

          {/* Relation Goal */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-5 bg-white shadow-lg rounded-2xl">
            <div>
              <h1 className="font-semibold text-gray-800">Relation Goal</h1>
              <p className="text-sm text-gray-500">
                Connect every{" "}
                <span className="font-medium text-green-600">30 days</span>
              </p>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg text-sm w-full sm:w-auto">
              Edit
            </button>
          </div>

          {/* Check In */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h1 className="font-semibold text-gray-800 mb-3">Check In</h1>

            <div className="grid grid-cols-3 gap-3">
              <button className="bg-green-100 text-green-700 py-2 rounded-lg hover:bg-green-200 text-sm">
                📞 Call
              </button>
              <button className="bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200 text-sm">
                💬 Text
              </button>
              <button className="bg-purple-100 text-purple-700 py-2 rounded-lg hover:bg-purple-200 text-sm">
                🎥 Video
              </button>
            </div>
          </div>

          {/* Recent Interactions */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h1 className="font-semibold text-gray-800">
                Recent Interactions
              </h1>
              <button className="text-sm text-green-600 hover:underline">
                Full History
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <p className="text-sm">
                  <IoCallOutline /> Call
                </p>
                <p className="text-xs text-gray-500">Jan 28, 2026</p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <p className="text-sm">
                  <IoMdText></IoMdText> Text
                </p>
                <p className="text-xs text-gray-500">Jan 28, 2026</p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <p className="text-sm">
                  <IoIosVideocam /> Video
                </p>
                <p className="text-xs text-gray-500">Jan 28, 2026</p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <p className="text-sm">
                  <IoCallOutline /> Call
                </p>
                <p className="text-xs text-gray-500">Jan 28, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFriendDetails;
