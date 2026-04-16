import React from "react";
import text from "/assets/text.png";

const Text = ({ item }) => {
  return (
    <div className="flex items-center gap-4 p-3 border mt-5 bg-white container mx-auto rounded-xl shadow-xl w-full">
      {/* Image */}
      <img className="w-12 h-12 rounded-full" src={text} alt="text" />

      {/* Text */}
      <div>
        <h1>
          <span className="font-semibold">Text:</span> with {item.name}
        </h1>
        <p className="text-sm text-gray-500">March {item.next_due_date}</p>
      </div>
    </div>
  );
};

export default Text;
