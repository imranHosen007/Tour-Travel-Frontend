import React from "react";
import logo from "../../assets/website/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import vid from "../../assets/video/footer.mp4";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className=" dark:bg-gray-950 py-10 relative h-fit overflow-hidden">
      <video
        src={vid}
        muted
        autoPlay
        loop
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      ></video>

      <div className="container">
        <div className="bg-white/80 backdrop-blur-sm rounded-t-xl py-5 grid md:grid-cols-3">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <Link to={"/"}>
                <img src={logo} alt="" className="max-h-[60px]" />
              </Link>
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum
              tenetur.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social-Icon-start-here */}
            <div className="flex items-center mt-6 gap-3">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="col-span-2 grid sm:grid-cols-3 grid-cols-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map(item => {
                    return (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link to={item.link}>
                          <span>&#11162;</span>
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map(item => {
                    return (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link to={item.link}>
                          <span>&#11162;</span>
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map(item => {
                    return (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={item.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
          {" "}
          @copyright 2024 All rights reserved || Made with ❤️ by Dilshad
        </div>
      </div>
    </div>
  );
};

export default Footer;
