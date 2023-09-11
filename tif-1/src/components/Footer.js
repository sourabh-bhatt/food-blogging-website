import React from "react";
import logo from "../Assets/Screenshot_669 1.png";

function Footer() {
  return (
    <div
      className="footer w-96 h-96 bg-stone-50"
      style={{
        width: "100%",
        height: "100%",
        border: "2px solid black",
        marginTop: "6rem",
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ margin: "5rem" }}
      >
        {/* LHS */}
        <div className="logo-food-blogging ml-5 mt-5">
          <img
            className="Screenshot6691 w-40 h-32 "
            src={logo}
            alt="Logo of Food Blogging Website"
          />
        </div>

        {/* RHS */}
        <div className="rhs-details flex justify-between items-center">
          {/* Contact Us Details */}
          <div className="contact-us-details mr-5">
            <div className="ContactUs w-24 h-7 text-blue-950 text-lg font-semibold leading-7 tracking-wide">
              Contact Us
            </div>
            <div className="LoremIpsumPvtLtd51MagaltonRoadPhartoshGateNearYtmMarketXyz343434 w-56 h-16 text-zinc-500 text-sm font-normal leading-normal">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </div>
            <div className="Example2020GmailCom w-56 h-6 text-zinc-500 text-sm font-normal leading-normal">
              example2020@gmail.com
            </div>
            <div className="9044430343 w-24 h-6 text-center text-zinc-500 text-sm font-normal leading-normal">
              (904) 443-0343
            </div>
          </div>

          {/* More details */}
          <div className="more-details mr-5">
            <div className="More w-11 h-7 text-blue-950 text-lg font-semibold leading-7 tracking-wide">
              More
            </div>
            <div className="AboutUs w-20 h-6 text-zinc-500 text-sm font-normal leading-7">
              About Us
            </div>
            <div className="Products w-40 h-6 text-zinc-500 text-base font-normal leading-relaxed">
              Products
            </div>
            <div className="Career w-20 h-6 text-zinc-500 text-base font-normal leading-relaxed">
              Career
            </div>
            <div className="ContactUs w-24 h-6 text-zinc-500 text-base font-normal leading-relaxed">
              Contact Us
            </div>
          </div>

          {/* Social */}
          <div className="social-details mr-5">
            <div className="SocialLinks w-32 h-7 text-blue-950 text-lg font-semibold leading-relaxed tracking-wide">
              Social Links
            </div>
          </div>

          {/* Copyright */}
          <div className="2022FoodTruckExample text-gray-400 text-sm font-normal leading-relaxed">
            © 2022 Food Truck Example
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
