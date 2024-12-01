import React from "react";
import ListItem from "../components/ListItem";
import list1 from "../assests/Images/rectangle-3-3.png";

const Thumbnail = () => {
  return (
    <>
      <div className="w-[25vw] h-[76vh] bg-[#27272F] py-5 px-5 rounded-2xl overflow-hidden relative">
        <h5 className="text-white  text-lg font-regular">Thumbnail Title</h5>
        <h5 className="px-3 py-2 mt-3 text-lg text-gray-400 border border-gray-500 rounded-xl">
          Get sporty in style
        </h5>
        <h5 className="text-white text-base mt-5">Video Status</h5>
        <div className="flex gap-4 mt-3">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="active"
              name="status"
              value="active"
              className="accent-blue-500 appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500"
            />
            <label htmlFor="active" className="text-white">
              Active
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="inactive"
              name="status"
              value="inactive"
              className="accent-blue-500 appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500"
            />
            <label htmlFor="inactive" className="text-white">
              Inactive
            </label>
          </div>
        </div>
        <h5 className="text-white  text-xl mt-5 font-medium">Product List</h5>
        <div className="w-full h-[8vh] bg-[#27272F] absolute bottom-0 z-10 flex items-center justify-center">
          <div className="bg-[#017DFF] px-3 py-2 rounded-xl text-base font-semibold flex items-center gap-2 mx-auto">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3334 10C18.3334 14.6 14.6001 18.3334 10.0001 18.3334C5.40008 18.3334 2.59175 13.7 2.59175 13.7M2.59175 13.7H6.35842M2.59175 13.7V17.8667M1.66675 10C1.66675 5.40002 5.36675 1.66669 10.0001 1.66669C15.5584 1.66669 18.3334 6.30002 18.3334 6.30002M18.3334 6.30002V2.13335M18.3334 6.30002H14.6334"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <button className="text-white">Update Playlist</button>
          </div>
        </div>
        <div>
          <ListItem image={list1} duration="4:05:60" productCount={5} />
          <ListItem image={list1} duration="4:05:60" productCount={5} />
          <ListItem image={list1} duration="4:05:60" productCount={5} />
          <ListItem image={list1} duration="4:05:60" productCount={5} />
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
