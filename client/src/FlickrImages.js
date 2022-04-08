import React, { useState, useEffect } from "react";
import useInputState from "./hooks/useInputState";

export default function FlickrImages() {
  // storing the input in the search bar
  const [searchTerm, updateSearchTerm, handleSubmit, fetchedData] =
    useInputState("");

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <section id="outer-section" className="container">
      <section
        id="form"
        className="max-w-auto overflow-hidden flex m-2 mx-auto justify-center sm:w-96"
      >
        <form
          action=""
          onSubmit={handleSubmit}
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
      <section id="image-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-6 ">
          {fetchedData.map((data, index) => (
            <div
              key={index}
              className="items-start text-center overflow-hidden shadow-lg
                         my-1 mx-2 rounded md:flex-col "
            >
              <img
                src={data.href}
                className="mx-auto object-center w-full max-w-xl"
              />
              <div className="px-4 py-4">
                <p className="truncate text-xs text-left mb-0.5">
                  <span className="font-bold">Title: </span>
                  {data.title && data.title.trim().length !== 0
                    ? data.title
                    : "no title"}
                </p>
                <p className="truncate pb-3 text-xs text-left">
                  <span className="font-bold">Photo by: </span>
                  {data.author && data.author.trim().length !== 0
                    ? data.author
                    : "no author"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
