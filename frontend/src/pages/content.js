import React from "react";
import ImageCarousel from "../components/imageCarousel";

function Content() {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div className="flex flex-col justify-center items-center grow">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Content;
