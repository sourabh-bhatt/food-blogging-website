import React from "react";
import PharmacistImage from "../Assets/pharmasict-serving-customer-drug-store 1.png";

function AboutUs() {
  const mobileBreakpoint = 640;
  const isMobile = window.innerWidth < mobileBreakpoint;

  return (
    <div className="AboutUs-Background w-97 h-96 m- mt-12 bg-indigo-100">
      <div className="AboutUsContainer flex flex-col sm:flex-row justify-center items-center">
        {/* Left side with image (Conditional rendering) */}
        {!isMobile && (
          <div className="AboutUsImage">
            <img
              src={PharmacistImage}
              alt="Pharmacist Serving Customer"
              width={"315px"}
              height={"100%"}
              style={{ marginRight: "15rem" }}
            />
          </div>
        )}

        {/* Right side with content */}
        <div className="AboutUsContent text-center" style={{ height: "300px" }}>
          <div className="AboutUsTitle w-96 h-6 mb-9 mt-10 text-blue-950 text-5xl font-semibold ">
            About Us
          </div>
          <div className="AboutUsText w-96 h-36 text-gray-700 text-base font-normal leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </div>
          <div className="AboutUsButton mt-4">
            <div className="Group297 w-32 h-10 px-6 py-0.5 mt-3 bg-red-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
              <div className="ReadMore w-20 h-9 pt-1  text-white text-base font-semibold">
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
