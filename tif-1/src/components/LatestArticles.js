import React, { useState } from "react";

import image1 from "../Assets/grilled-tomatoes-1-846x846 1.png";
import image2 from "../Assets/meal-prep-ideas-846x846 1.png";
import image3 from "../Assets/meal-prep-ideas-846x846 1 (1).png";
import image4 from "../Assets/grilled-tomatoes-1-846x846 1 (1).png";
import image5 from "../Assets/meal-prep-ideas-846x846 1 (2).png";
import image6 from "../Assets/meal-prep-ideas-846x846 1 (3).png";
import previousButton from "../Assets/previous-button.svg";
import nextButton from "../Assets/next-button.svg";

function LatestArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6];
  const titles = [
    "Grilled Tomatoes at home",
    "Snacks for Travel",
    "Post-workout Recipes",
    "How to Grill Corn",
    "Crunchwrap Supreme",
    "Broccoli Cheese Soup",
  ];
  const texts = [
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  ];

  const pageSize = 3; // Number of items per page
  const totalPages = Math.ceil(images.length / pageSize);
  const currentPage = Math.floor(currentIndex / pageSize) + 1;

  const visibleImages = images.slice(currentIndex, currentIndex + pageSize);
  const visibleTitles = titles.slice(currentIndex, currentIndex + pageSize);
  const visibleTexts = texts.slice(currentIndex, currentIndex + pageSize);

  const prevIndex = (currentIndex - pageSize + images.length) % images.length;
  const nextIndex = (currentIndex + pageSize) % images.length;

  const handlePrev = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div
        className="heading text-blue-950 ml-14 text-5xl font-semibold"
        b
        style={{
          width: "100%",
          height: "100%",

          marginTop: "6rem",
        }}
      >
        Latest Articles
        <div className="containers flex align-center justify-center ">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="outerBox m-14 bg-white rounded-3xl border border-slate-400 border-opacity-40"
              style={{
                color: "#93A2D3",
                marginTop: "4rem",
                maxWidth: "290px",
              }}
            >
              {/* Box Elements */}
              {/* Image */}
              <img
                className="inage w-30 h-36 m-4 ml-4 rounded-3xl"
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: "250px", height: "181px" }}
              />
              {/* Title */}
              <div className="title m-5  text-blue-950 text-xl font-bold">
                {visibleTitles[index]}
              </div>
              {/* Text */}
              <div className="text w-82 m-5  text-gray-700 text-base font-normal">
                {visibleTexts[index]}
              </div>
              {/* Button */}
              <div className="bigButton w-32 h-10 px-5 mt-9 mb-6 ml-5 rounded-3xl border border-gray-600 justify-center items-center gap-2.5">
                <div className="ReadMore text-gray-600 text-base font-semibold leading-9 tracking-wide">
                  Read More
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Previous and Next buttons */}
        <div className="buttons m-4 flex align-center justify-center">
          <button
            onClick={handlePrev}
            disabled={totalPages <= 1 || currentIndex === 0}
            style={{
              filter: currentIndex === 0 ? "grayscale(100%)" : "none",
              width: "50px",
              height: "50px",
            }}
          >
            <div className="previous mt-4 ">
              {" "}
              <img
                src={previousButton}
                alt="Back to previous page"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </button>
          {/* Current Page */}
          <div className="current-page m-5 mt-5 text-4xl">
            {currentPage}/{totalPages}
          </div>
          <button
            onClick={handleNext}
            disabled={
              totalPages <= 1 || currentIndex === (totalPages - 1) * pageSize
            }
            style={{
              filter:
                currentIndex === (totalPages - 1) * pageSize
                  ? "grayscale(100%)"
                  : "none",
              width: "50px",
              height: "50px",
            }}
          >
            <div className="next mt-4 ">
              {" "}
              <img
                src={nextButton}
                alt="Go to next page"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default LatestArticles;
