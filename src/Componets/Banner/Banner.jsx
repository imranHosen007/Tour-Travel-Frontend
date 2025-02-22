import React from "react";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import travel_box from "../../assets/website/travelbox.png";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100">
      <div className="min-h-[550px] backdrop-blur-xl flex items-center justify-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
            {/* image-here */}
            <div data-aos="flip-up">
              <img
                src={travel_box}
                alt=""
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                {" "}
                Explore all corners of The world with us
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-8"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
                ratione ex alias quis magni at optio
              </p>
              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p>Flight</p>
                </div>
                <div className="flex items-center gap-4">
                  <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p>Hotel</p>
                </div>
                <div className="flex items-center gap-4">
                  <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                  <p>Wi Fi</p>
                </div>
                <div className="flex items-center gap-4">
                  <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                  <p>Foods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
