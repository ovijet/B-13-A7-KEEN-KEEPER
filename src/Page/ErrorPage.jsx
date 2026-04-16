import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      {/* Big 404 */}
      <h1 className="text-8xl font-extrabold text-green-700">404</h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
