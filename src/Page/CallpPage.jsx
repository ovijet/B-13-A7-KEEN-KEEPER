import React from 'react';
import callImg from '/assets/call.png';

const CallpPage = ({ item }) => {
  return (
    <div className="flex items-center gap-4 p-3 border mt-5 bg-white container mx-auto rounded-xl shadow-xl w-full">
      
      {/* Image */}
      <img className="w-12 h-12 rounded-full" src={callImg} alt="call" />

      {/* Text */}
      <div>
        <h1 className="font-semibold">with {item.name}</h1>
        <p className="text-sm text-gray-500">{item.email}</p>
      </div>

    </div>
  );
};

export default CallpPage;