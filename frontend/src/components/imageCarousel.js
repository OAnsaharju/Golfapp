import React, { useEffect, useState } from "react";

const ImageCarousel = () => {
  // State to hold the images
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Function to load images from the carousel_img folder
    const loadImages = () => {
      // Directly using the relative path to the images in the public folder
      const imageFiles = [
        "carousel_img/img1.jpg",
        "carousel_img/img2.jpg",
        "carousel_img/img3.jpg",
        "carousel_img/img4.jpg",
      ];

      // Create the full URLs for the images
      const imageUrls = imageFiles.map((file) => `/${file}`);
      setImages(imageUrls);
    };

    loadImages();
  }, []);

  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 overflow-hidden">
      {images.length > 0 && (
        <>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
