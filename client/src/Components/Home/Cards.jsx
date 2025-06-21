import React from "react";
import { Circle } from "rc-progress";

const Cards = ({
  title,
  value,
  percent,
  color,
  activeTab = "",
  onClick = null,
  tabName = null,
}) => {
  return (
    <div
      className="p-5 rounded-lg bg-neutral-50 flex items-center justify-between"
      style={{ border: `2px solid ${activeTab == tabName ? color : "white"}` }}
      onClick={onClick}
    >
      <div className="">
        <p className="!text-sm !text-gray-400 mb-2 font-semibold">{title}</p>
        <h2>{value}</h2>
      </div>
      <Circle
        percent={percent}
        strokeWidth={15}
        strokeColor={color}
        className="size-16"
      />
    </div>
  );
};

export default Cards;
