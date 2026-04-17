import React, { useContext, useState } from "react";
import { Context } from "./context/FriendsContext";
import CallpPage from "../Page/CallpPage";
import Text from "../Page/Text";
import Video from "../Page/Video";
import { IoIosArrowDown } from "react-icons/io";

const TimeLine = () => {
  const { call, text, video } = useContext(Context);

  //  filter state
  const [filter, setFilter] = useState("all");

  //  empty check
  const isEmpty =
    call.length === 0 && text.length === 0 && video.length === 0;

  return (
    <div className="bg-[#f8fafc] w-full py-6 px-3 min-h-[50vh]">
      <h1 className="text-3xl font-semibold">Timeline:</h1>

      {/*  Dropdown */}
      <div className="mt-5">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
           {filter=== "all" ? "Filter Timeline" : filter.charAt(0).toUpperCase() + filter.slice(1)}
           <IoIosArrowDown />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
          >
            {/* <li onClick={() => setFilter("Filter Timeline")}>
              <a>All</a>
            </li> */}
            <li onClick={() => setFilter("call")}>
              <a>Call</a>
            </li>
            <li onClick={() => setFilter("text")}>
              <a>Text</a>
            </li>
            <li onClick={() => setFilter("video")}>
              <a>Video</a>
            </li>
          </ul>
        </div>
      </div>

      {/*  Empty state */}
      {isEmpty && (
        <p className="flex justify-center items-center mt-10 text-2xl">
          No interactions yet
        </p>
      )}

      {/*  Render data based on filter */}

      {(filter === "all" || filter === "call") &&
        call.map((item) => (
          <CallpPage key={item.id} item={item} />
        ))}

      {(filter === "all" || filter === "text") &&
        text.map((item) => (
          <Text key={item.id} item={item} />
        ))}

      {(filter === "all" || filter === "video") &&
        video.map((item) => (
          <Video key={item.id} item={item} />
        ))}
    </div>
  );
};

export default TimeLine;