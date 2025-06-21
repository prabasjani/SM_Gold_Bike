import React from "react";

const Navbar = () => {
  return (
    <div className="w-full py-3 px-10 bg-neutral-50 flex items-center justify-between">
      <h2 className="!text-blue-500">SM_Finance</h2>
      <div className="flex items-center gap-3">
        <img
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
          alt=""
          className="size-10 border border-gray-300/50 rounded-full flex items-center justify-center"
        />
        <div className="">
          <h6 className="text-base text-gray-600 font-bold">Prabanjan</h6>
          <p>praba@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
