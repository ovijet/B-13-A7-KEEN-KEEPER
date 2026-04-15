import React, { useContext } from "react";
import { Context } from "./context/FriendsContext";
import CallpPage from "../Page/CallpPage";

const TimeLine = () => {
  const { call } = useContext(Context);
  console.log(call, "iddd");
  return (
    <div className="min-h-screen bg-[#f8fafc] py-6 px-3 ">
      <h1 className="text-3xl">Timeline:</h1>
      {call.map((item) => (
        <CallpPage item={item} />
      ))}
    </div>
  );
};

export default TimeLine;
