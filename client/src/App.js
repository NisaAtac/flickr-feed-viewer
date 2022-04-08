import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import SearchBar from "./components/SearchBar";
import useInputState from "./hooks/useInputState";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [, , handleSubmit] = useInputState("");

  // handleSubmit for the initial page load
  useEffect(() => {
    handleSubmit(null, setFetchedData);
  }, []);

  return (
    <section id="outer-section" className="container mx-auto">
      <div className="App container mx-auto w-full">
        <h1 className="text-l font-bold text-center mt-5 mb-4 md:text-3xl">
          Flickr Feed Viewer
        </h1>
        <SearchBar
          searchData={(data) => {
            setFetchedData(data);
          }}
        />
        <section id="inner-section" className="container">
          <section id="image-section">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-6 ">
              {fetchedData.map((image, index) => (
                <ImageCard key={index} image={image} />
              ))}
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default App;
