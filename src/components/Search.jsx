import React from "react";

const Search = () => {
  return (
    <>
      <div className="flex items-center px-1 justify-between border border-gray-600 rounded-xl">
        <input
          type="text"
          placeholder="Search Project..."
          className="px-2 py-2 bg-transparent placeholder-gray-500 outline-none"
        />
        <div className="border border-gray-500 rounded-xl">
          <svg
            className="m-1 w-5 h-5"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0833 9.16667C15.0833 12.4344 12.4344 15.0833 9.16667 15.0833C5.89898 15.0833 3.25 12.4344 3.25 9.16667C3.25 5.89898 5.89898 3.25 9.16667 3.25C12.4344 3.25 15.0833 5.89898 15.0833 9.16667Z"
              stroke="#C0C0D6"
              stroke-width="1.5"
            />
            <path
              d="M16.7797 17.5C16.5954 17.5 16.411 17.4282 16.2779 17.295L14.3731 15.3888C14.0966 15.1121 14.0966 14.6611 14.3731 14.3742C14.6496 14.0974 15.1002 14.0974 15.387 14.3742L17.2917 16.2804C17.5682 16.5571 17.5682 17.008 17.2917 17.295C17.1484 17.4282 16.964 17.5 16.7797 17.5Z"
              fill="#C0C0D6"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Search;
