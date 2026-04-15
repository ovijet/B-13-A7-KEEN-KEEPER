import React, { useContext } from "react";
import { Context } from "./context/FriendsContext";
import CallpPage from "../Page/CallpPage";

const TimeLine = () => {
  const { call } = useContext(Context);
  console.log(call, "iddd");
  return (
    <div>
      {call.map((item) => (
        <CallpPage item={item} />
      ))}
    </div>
  );
};

export default TimeLine;
