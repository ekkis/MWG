import React from "react"
import Carousel from "react-slick"

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn"

export default function SectionCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,

  }
  return (
    <Carousel {...settings}>
      <div>
        <img src='/img/bg.jpg' alt="First slide" className="slick-image" />
        <div className="slick-caption">
        <h4>
          <LocationOn className="slick-icons" />
          Yellowstone National Park, United States
        </h4>
        </div>
      </div>
      <div>
        <img src='/img/bg2.jpg' alt="Second slide" className="slick-image" />
        <div className="slick-caption">
        <h4>
          <LocationOn className="slick-icons" />
          Somewhere Beyond, United States
        </h4>
        </div>
      </div>
      <div>
        <img src='/img/bg3.jpg' alt="Third slide" className="slick-image" />
        <div className="slick-caption">
        <h4>
          <LocationOn className="slick-icons" />
          Yellowstone National Park, United States
        </h4>
        </div>
      </div>
    </Carousel>
  )
}
