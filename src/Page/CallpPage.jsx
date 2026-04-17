import React from "react";
import callImg from "/assets/call.png";

const CallpPage = ({ item }) => {
  return (
    <div className="flex items-center gap-4 p-3 mt-5 bg-white container mx-auto rounded-xl shadow-xl w-full">
      {/* Image */}
      <img className="w-12 h-12 rounded-full" src={callImg} alt="call" />

      {/* Text */}
      <div>
        <h1>
          <span className="font-semibold">Call:</span> with {item.name}
        </h1>
        <p className="text-sm text-gray-500">March {item.next_due_date}</p>
      </div>
    </div>
  );
};

export default CallpPage;
