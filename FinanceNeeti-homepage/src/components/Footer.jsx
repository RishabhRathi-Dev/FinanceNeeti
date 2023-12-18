import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../assets/financeneeti-logo.png";

const Footer = () => {
  return (
    <div className="bg-navbg text-black dark:bg-gray-950 dark:text-white">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              FinanceNeeti
            </h1>
            <p>
              Discover the path to financial empowerment and success through our innovative tools and a supportive community{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>India</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="col-span-2 md:col-start-2 flex justify-end py-10 px-10">            
              <ul className={`flex flex-col gap-7`}>
                <li className="cursor-pointer"><b>About</b></li>
                <li className="cursor-pointer"><b>How It Works</b></li>
                <li className="cursor-pointer"><b>Featured</b></li>
                <li className="cursor-pointer"><b>Contact Us</b></li>
                <li className="cursor-pointer"><b>FAQs</b></li>
              </ul>
          </div>
        </div>
        <hr style={{ border: "none", borderTop: "1px solid navy" }} />
        <div className="flex justify-between items-center py-10 border-t-2 border-gray-300/50">
          <div className="text-left">
            @2024 copyright FinanceNeeti. All rights reserved.
          </div>
          <div className="text-center">
            <p>Privacy & Policy</p>
          </div>
          <div className="text-right">
            <p>Terms & Condition</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
