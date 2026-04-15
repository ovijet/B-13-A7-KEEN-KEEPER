import { useContext, useState } from "react";
import { FaHistory } from "react-icons/fa";
import { IoIosVideocam, IoMdText } from "react-icons/io";
import { IoArchiveOutline, IoCallOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { Context } from "../context/FriendsContext";

const AllFriendDetails = () => {
  let { id } = useParams();
  const friendDetails = useLoaderData();

  const expectedFriends = friendDetails.find(
    (friend) => friend.id === Number(id),
  );

  if (!expectedFriends) {
    return <p className="text-center mt-10">Friend not found</p>;
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

  const { handleCall, call } = useContext(Context);
  console.log(handleCall, call, "iddd");

  // const [call, setCall] = useState([]);

  // const handleCall = (currentBook) => {
  //   // step1:store book id
  //   //step2:where to store
  //   //step3:array or collection
  //   //step4:if the book is already exist then show a alert or toast
  //   //step5:if the

  //   console.log(call, "book");
  //   let isExistBook = call.find((book) => book.id === currentBook.id);
  //   if (isExistBook) {
  //     // toast.error("Mark is already exjist");
  //     alert(`${currentBook.bookName} is already exist`);
  //   } else {
  //     setCall([...call, currentBook]);
  //     // toast.success(`${currentBook.bookName} is added to list`);
  //   }
  // };

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
                status === "Active"
                  ? "bg-green-600"
                  : "bg-red-500 inline p-1 rounded-full"
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
            <div className="bg-white shadow-md p-4 rounded-xl text-center flex items-center justify-center gap-2">
              <RiNotificationSnoozeLine className="text-xl" />
              {""}
              Snooze 2 Weeks
            </div>
            <div className="bg-white shadow-md p-2 rounded-xl text-center flex items-center justify-center">
              <IoArchiveOutline className="text-xl" /> Archive
            </div>
            <div className="bg-white shadow-md p-4 rounded-xl text-center text-red-600 flex items-center justify-center gap-2">
              <MdDeleteOutline className="text-xl" /> Delete
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
              <button
                onClick={() => handleCall(expectedFriends)}
                className="flex flex-col items-center justify-center gap-1 bg-green-100 text-green-700 py-2 rounded-lg hover:bg-green-200 text-sm"
              >
                <IoCallOutline className="text-lg" />
                Call
              </button>
              <button
                // onClick={() => handleText(expectedFriends)}
                className="flex items-center   flex-col justify-center gap-2 bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200 text-sm"
              >
                <IoMdText className="text-lg"></IoMdText> Text
              </button>
              <button
                // onClick={() => handleVideo(expectedFriends)}
                className="bg-purple-100 flex-col flex items-center justify-center gap-2 text-purple-700 py-2 rounded-lg hover:bg-purple-200 text-sm"
              >
                <IoIosVideocam className="text-lg" /> Video
              </button>
            </div>
          </div>

          {/* Recent Interactions */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h1 className="font-semibold text-gray-800">
                Recent Interactions
              </h1>
              <button className="text-sm btn text-black flex justify-center items-center gap-1 hover:underline">
                <FaHistory /> Full History
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <p className="text-sm flex items-center justify-center gap-2">
                  <IoCallOutline /> Call
                </p>
                <p className="text-xs text-gray-500">Jan 28, 2026</p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <p className="text-sm  flex items-center justify-center gap-2">
                  <IoMdText></IoMdText> Text
                </p>
                <p className="text-xs text-gray-500">Jan 28, 2026</p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <p className="text-sm flex items-center justify-center gap-2">
                  <IoIosVideocam /> Video
                </p>
                <p className="text-xs text-gray-500">Jan 28, 2026</p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <p className="text-sm flex items-center justify-center gap-2">
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
