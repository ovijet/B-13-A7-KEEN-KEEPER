import React, { useContext } from "react";
import { Context } from "./context/FriendsContext";
import CallpPage from "../Page/CallpPage";
import Text from "../Page/Text";
import Video from "../Page/Video";

const TimeLine = () => {
  const { call, text,video } = useContext(Context);
  console.log(call, "iddd");
  return (
    <div className=" bg-[#f8fafc] w-full py-6 px-3 min-h-[60vh]">
      <h1 className="text-3xl">Timeline:</h1>
      <h1 className="text-xl mt-4">Call:{call.length}</h1>
      {call.length === 0 && text.length===0 && video.length===0 ? (
        <p className="text-center mt-10 text-2xl">No interactions yet</p>
      ) : null}
      {call.map((item) => (
        <CallpPage item={item} />
      ))}
      <h1 className="text-xl mt-4">Text:{text.length}</h1>
      
      {text.map((item) => (
        <Text key={item.id} item={item} />
      ))}
      <h1 className="text-xl mt-8">Video:{video.length}</h1>
      {
        video.map((item) => (
          <Video key={item.id} item={item} />
        ))
      }
    </div>
  );
};

export default TimeLine;
