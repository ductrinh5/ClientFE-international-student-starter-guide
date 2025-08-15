import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import BannerOne from "../Components/Banner/BannerOne";
import AboutOne from "../Components/About/AboutOne";
import BlogOne from "../Components/Blog/BlogOne";
import FooterOne from "../Components/Footer/FooterOne";
import ScrollToTop from "../Components/ScrollToTop";
import DestinationOne from "../Components/Destination/DestinationOne";

function HomeOne() {
  return (
    <div>
      <HeaderOne />
      <BannerOne />
      <AboutOne />
      <DestinationOne />
      <BlogOne />
      <FooterOne />
      <ScrollToTop />
    </div>
  );
}

export default HomeOne;
