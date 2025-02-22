import React, { useState } from "react";

const Hero = () => {
  const [price, setPrice] = useState(150);
  return (
    <div className="bg-black/20 h-full z-10">
      <div className="flex items-center justify-center h-full p-4 bg-black/10">
        <div className="container grid grid-cols-1">
          <div className="text-white">
            <p className="text-sm" data-aos="fade-up">
              {" "}
              Our Packages
            </p>
            <p className="font-bold text-3xl"> Search Your Destination</p>
          </div>
          <div className="bg-white rounded-md p-4 space-y-4 mt-4 relative">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Searh your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full rounded-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  placeholder=""
                  className="!placeholder-slate-400 w-full rounded-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <div className="flex justify-between items-center w-full">
                  <p>Max Price</p>
                  <p className="font-bold text-xl">${price}</p>
                </div>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    onChange={function (e) {
                      setPrice(e.target.value);
                    }}
                    type="range"
                    name="destination"
                    id="destination"
                    placeholder=""
                    min="150"
                    max="1000"
                    step={10}
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                  />
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 absolute left-1/2 -translate-x-1/2 -bottom-5">
              {" "}
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
