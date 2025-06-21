import React from "react";
import { CircleUser, AtSign, Lock } from "lucide-react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-lg bg-neutral-50 p-10 rounded-lg">
        <h3 className="mb-6 text-center">Create Account</h3>
        <form className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="text"
              className="px-11 py-1.5 rounded-md border border-gray-400/50 w-full focus:outline-blue-500"
              placeholder="Enter Your Username"
            />

            <CircleUser className="absolute top-2 left-3" size={22} />
          </div>
          <div className="relative">
            <input
              type="email"
              className="px-11 py-1.5 rounded-md border border-gray-400/50 w-full focus:outline-blue-500"
              placeholder="Enter Your Email Address"
            />

            <AtSign className="absolute top-2 left-3" size={22} />
          </div>
          <div className="relative">
            <input
              type="password"
              className="px-11 py-1.5 rounded-md border border-gray-400/50 w-full focus:outline-blue-500"
              placeholder="Enter Your Password"
            />

            <Lock className="absolute top-2 left-3" size={22} />
          </div>

          <button
            type="submit"
            className="py-2 bg-blue-500 hover:bg-blue-600 rounded-md font-bold text-white uppercase cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-5">
          <p>
            Already have an account?{" "}
            <Link to="/auth/login" className="hover:underline text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
