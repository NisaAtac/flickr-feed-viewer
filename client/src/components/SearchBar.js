import React, { useState } from "react";
import useInputState from "../hooks/useInputState";

const SearchBar = ({ searchData }) => {
  //to store the input from the search bar
  const [searchTerm, updateSearchTerm, handleSubmit] = useInputState("");

  return (
    <section
      id="form"
      className="max-w-auto overflow-hidden flex m-2 mx-auto justify-center sm:w-96"
    >
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e, searchData);
        }}
        className="flex input-group relative items-stretch mb-4"
      >
        <input
          className="form-control relative flex-auto min-w-0 w-full px-2 py-1 text-xs 
                font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                focus:border-gray-600 focus:outline-none md:text-base"
          type="text"
          placeholder="Search..."
          name="searchTerm"
          value={searchTerm}
          onChange={updateSearchTerm}
        />
        <button className="flex items-center px-2 py-2 bg-gray-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 md:w-5 md:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
