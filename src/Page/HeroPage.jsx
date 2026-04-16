import React from "react";
import { FaPlus } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div className="text-center mt-10 space-y-3">
      <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
      <p className="max-w-[500px] mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-green-900 text-white"><FaPlus></FaPlus> Add a Friend</button>
    </div>
  );
};

export default HeroPage;
