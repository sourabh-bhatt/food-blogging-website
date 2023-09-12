import React from "react";
import logo from "../Assets/Screenshot_669 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      className="footer  bg-stone-50"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="flex justify-evenly items-center"
        style={{ margin: "7rem" }}
      >
        {/* LHS */}
        <div className="logo-food-blogging">
          <img
            className="food-blogging-logo w-40 h-32 mr-10 "
            src={logo}
            alt="Logo of Food Blogging Website"
          />
        </div>

        {/* RHS */}
        <div className="rhs flex justify-evenly">
          {/* Contact Us Details */}
          <div className="contactUs mr-14">
            <div className="ContactUs w-24 h-7  text-blue-950 text-lg font-semibold leading-7 tracking-wide">
              Contact Us
            </div>
            <div className="LoremIpsumPvtLtd51MagaltonRoadPhartoshGateNearYtmMarketXyz343434 w-56 h-16 mt-6 text-zinc-500 text-sm font-normal leading-normal">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </div>
            <div className="Example2020GmailCom w-56 h-6 mt-3 text-zinc-500 text-sm font-normal leading-normal">
              example2020@gmail.com
            </div>
            <div className="9044430343 w-24 h-6 mt-3 text-zinc-500 text-sm font-normal leading-normal">
              (904) 443-0343
            </div>
          </div>

          {/* More details */}
          <div className="more-details ml-12 ">
            <div className="More w-11 h-7  text-blue-950 text-lg font-semibold leading-7 tracking-wide">
              More
            </div>
            <div className="AboutUs w-40 h-6 mt-5 text-zinc-500 text-sm font-normal leading-7">
              About Us
            </div>
            <div className="Products w-40 h-6 mt-4 text-zinc-500 text-base font-normal leading-relaxed">
              Products
            </div>
            <div className="Career w-20 h-6 mt-2.5 text-zinc-500 text-base font-normal leading-relaxed">
              Career
            </div>
            <div className="ContactUs w-24 h-6 mt-4 text-zinc-500 text-base font-normal leading-relaxed">
              Contact Us
            </div>
          </div>

          {/* Social */}
          <div className="social-details ml-14 ">
            <div className="SocialLinks w-32 h-7 mb-3 text-blue-950 text-lg font-semibold ">
              Social Links
            </div>
            {/* Social Media Icons */}
            <div className="socialFonts flex gap-8 mt-5">
              <div className="ig">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="x">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="fb ml-1">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </div>

            <div className="2022FoodTruckExample mt-20 pt-3  text-gray-400 text-sm font-normal leading-relaxed">
              © 2022 Food Truck Example
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
