import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import { Pagination, EffectFade, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
function BannerOne() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Function to add animation classes
    const animationProperties = () => {
      document.querySelectorAll("[data-ani]").forEach((element) => {
        const animationName = element.getAttribute("data-ani");
        element.classList.add(animationName);
      });

      document.querySelectorAll("[data-ani-delay]").forEach((element) => {
        const delayTime = element.getAttribute("data-ani-delay");
        element.style.animationDelay = delayTime;
      });
    };

    animationProperties();
  }, []);

  // Event handler for custom navigation arrows
  const handleSliderNavigation = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (direction === "prev") {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]} // Initialize necessary modules
        effect="fade" // Use fade effect
        loop={true} // Enable loop
        speed={1000}
        pagination={{
          el: ".swiper-pagination", // Custom pagination container
          clickable: true, // Enable clickable pagination
        }}
        navigation={{
          nextEl: ".slider-next", // Custom next button
          prevEl: ".slider-prev", // Custom prev button
        }}
        className="th-slider hero-slider-1"
        id="heroSlide1"
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: "url(/assets/img/hero/legal-guide.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Are you an international student in Vietnam?
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Find guides for legal processes{" "}
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <Link to="/tour" className="th-btn th-icon">
                      Explore Guides
                    </Link>
                    <Link to="/service" className="th-btn style2 th-icon">
                      See Places
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: "url(/assets/img/hero/places-to-visit.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Are you an international student in Vietnam?
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Find awesome places near you{" "}
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <Link to="/tour" className="th-btn th-icon">
                      Explore Guides
                    </Link>
                    <Link to="/service" className="th-btn style2 th-icon">
                      See Places
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: "url(/assets/img/hero/pho-co.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Are you an international student in Vietnam?
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Our chatbot is here to help you{" "}
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <Link to="/tour" className="th-btn th-icon">
                      Explore Guides
                    </Link>
                    <Link to="/service" className="th-btn style2 th-icon">
                      See Places
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="th-swiper-custom">
          <button
            className="slider-arrow slider-prev"
            onClick={() => handleSliderNavigation("prev")}
          >
            <img src="/assets/img/icon/right-arrow.svg" alt="Prev" />
          </button>
          <div className="swiper-pagination" /> {/* Pagination container */}
          <button
            className="slider-arrow slider-next"
            onClick={() => handleSliderNavigation("next")}
          >
            <img src="/assets/img/icon/left-arrow.svg" alt="Next" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default BannerOne;
