import React, { useEffect, useState } from "react";
import Hero from "../Componets/Hero/Hero";
import video from "../assets/video/main.mp4";
import Place from "../Componets/Places/Place";
import BannerPic from "../Componets/Banner/BannerPic";
import BlogsComp from "../Componets/Blogs/BlogsComp";
import Banner from "../Componets/Banner/Banner";
import banner1 from "../assets/website/cover-women.jpg";
import banner2 from "../assets/website/travel-cover2.jpg";
import Testmonial from "../Componets/Testmonial/Testmonial";
import OrderPopUp from "../Componets/OrderPopup/OrderPopUp";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const toggle = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            muted
            loop
            className="absolute h-[700px] w-full right-0 top-0 z-[-1] object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Place handleToggle={toggle} />
        <BannerPic img={banner1} />
        <BlogsComp />
        <Banner />
        <BannerPic img={banner2} />
        <Testmonial />
        <OrderPopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
