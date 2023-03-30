import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../asset/banner.jpg";
import banner2 from "../asset/banner2.jpg";
const HomeSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[900px] h-[430px] mt-5 overflow-y-hidden">
      <div className="container">
        <div className=" overflow-hidden">
          <Slider {...settings}>
            <div className="">
              <img src={banner} alt="" />
            </div>
            <div className="">
              <img src={banner2} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
