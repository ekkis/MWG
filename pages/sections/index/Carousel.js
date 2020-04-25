import React from "react";
import Carousel from "react-slick";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

export default function SectionCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,

  };
  return (
    <Carousel {...settings}>
      <div>
        <img src={image1} alt="First slide" className="slick-image" />
        <div className="slick-caption">
        <h4>
          <LocationOn className="slick-icons" />
          Yellowstone National Park, United States
        </h4>
        </div>
      </div>
      <div>
        <img src={image2} alt="Second slide" className="slick-image" />
        <div className="slick-caption">
        <h4>
          <LocationOn className="slick-icons" />
          Somewhere Beyond, United States
        </h4>
        </div>
      </div>
      <div>
        <img src={image3} alt="Third slide" className="slick-image" />
        <div className="slick-caption">
        <h4>
          <LocationOn className="slick-icons" />
          Yellowstone National Park, United States
        </h4>
        </div>
      </div>
    </Carousel>
  );
}
