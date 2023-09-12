import React from "react";
import logo from "../Assets/Screenshot_669 1.png";
import pizzalogo from "../Assets/Rectangle 400.png";
import vectorImage from "../Assets/Vector 1.png";

function Header() {
  return (
    <>
      {/* Food blogging website logo */}
      <div
        className="header-class sm:w-full md:w-1/2 lg:w-1/3 "
        style={{ width: "100%", height: "700px" }}
      >
        <div className="Header w-96 h-96 bg-white ">
          {/* Left hand side */}
          <div className="lhs">
            <div
              className="logo-food-blogging"
              style={{ marginLeft: "4rem", marginTop: "20px" }}
            >
              <img
                className="Screenshot6691 w-28 h-20"
                src={logo}
                alt="Logo of Food Blogging Website"
              />
            </div>

            {/* Welcome text description */}
            <div
              className="DiscoverTheBestFoodAndDrinks w-80"
              style={{ marginLeft: "4rem", marginTop: "20px" }}
            >
              <span
                style={{
                  color: "#0E2368",
                  fontSize: "2.1rem",
                  fontWeight: "bold",
                  lineHeight: "3",
                }}
              >
                Discover the <br />
              </span>
              <span
                style={{
                  color: "#0E2368",
                  fontSize: "2.1rem",
                  fontWeight: "bold",
                  lineHeight: "0",
                }}
              >
                <span style={{ color: "#E23744" }}>Best</span> Food <br />
              </span>
              <span
                style={{
                  color: "#0E2368",
                  fontSize: "2.1rem",
                  fontWeight: "bold",
                  lineHeight: "2",
                }}
              >
                {" "}
                and Drinks
              </span>
            </div>

            {/* Text Paragraph */}
            <div
              className="NaturallyMadeHealthcareProductsForTheBetterCareSupportOfYourBody w-80 text-gray-700 text-base font-normal leading-7"
              style={{ marginLeft: "4rem", marginTop: "20px" }}
            >
              Naturally made Healthcare Products for the better care & support
              of your body.
            </div>

            {/* Button Explore now */}
            <div
              className="ExploreNow w-48 h-16 px-8 py-3.5 bg-red-600 rounded-3xl justify-start items-start gap-1.5 inline-flex"
              style={{ marginLeft: "4rem", marginTop: "20px" }}
            >
              <div className="ExploreNow text-white text-lg font-bold leading-9 tracking-tight">
                Explore Now!
              </div>
            </div>
          </div>

          {/* Right hand side begins */}

          {/* Pizza right hand side */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              marginLeft: "60%",
              marginTop: "-28rem",
            }}
          >
            <img
              className="Rectangle400 w-96 h-96 rounded-bl-lg"
              src={pizzalogo}
              alt="Pizza With 6 slices"
              style={{ width: "550px", height: "619px" }}
            />
          </div>

          {/* Red curved layer */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",

              marginLeft: "0rem",
              marginTop: "0rem",
              top: "-2px",
              right: "-2px",
            }}
          >
            <img
              src={vectorImage}
              alt="Vector in red curved color"
              style={{ width: "660px", height: "680px" }}
            />
          </div>

          {/* get in touch button */}
          {/*  */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "2rem",
              zIndex: "2",
            }}
          >
            <div
              className="Group318 w-25 mt-4 h-12 px-4 py-0.5
            bg-red-500 rounded-3xl border border-white text-white text-base font-semibold leading-9 tracking-wide flex justify-center items-center gap-2.5"
            >
              Get In Touch
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
