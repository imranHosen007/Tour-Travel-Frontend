import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleToggle,
}) => {
  return (
    <div
      onClick={handleToggle}
      className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt="no-img"
          className="h-[220px] w-full mx-auto object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className="space-y-2 p-3">
        <h1 className="text-xl font-bold line-clamp-1">{title}</h1>
        <div className="flex items-center gap-4 opacity-70">
          <IoLocationSharp />
          <span>{location}</span>
        </div>
        <p className="line-clamp-2">{description}</p>
        <div className="flex justify-between items-center border-t-2 py-3 !mt-3">
          <div className="opacity-70">
            <p>{type}</p>
          </div>
          <div>
            <p className="text-2xl font-bold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
