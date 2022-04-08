import "./App.css";
import FlickrImages from "./FlickrImages";

function App() {
  return (
    <section id="outer-section" className="container mx-auto">
      <div className="App container mx-auto w-full">
        <h1 className="text-l font-bold text-center mt-5 mb-4 md:text-3xl">
          Flickr Feed Viewer
        </h1>
        <FlickrImages />
      </div>
    </section>
  );
}

export default App;
