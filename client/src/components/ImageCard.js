// ImageCard component contains image, title and author information
// If the title or the author is not provided for the image,
// no title or no author is written on the card.
import React from "react";

const ImageCard = ({ image, index }) => {
  return (
    <div
      key={index}
      className="items-start text-center overflow-hidden shadow-lg
                         my-1 mx-2 rounded md:flex-col "
    >
      <img src={image.href} className="mx-auto object-center w-full max-w-xl" />
      <div className="px-4 py-4">
        <p className="truncate text-xs text-left mb-0.5">
          <span className="font-bold">Title: </span>
          {image.title && image.title.trim().length !== 0
            ? image.title
            : "no title"}
        </p>
        <p className="truncate pb-3 text-xs text-left">
          <span className="font-bold">Photo by: </span>
          {image.author && image.author.trim().length !== 0
            ? image.author
            : "no author"}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
