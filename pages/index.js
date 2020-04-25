import React from "react";

// core components
import Header from "components/Header.js";
import Footer from "components/Footer";

// Sections for this page
import Carousel from "pages/sections/index/Carousel";
import RifleShotgun from "pages/sections/index/RifleShotgun"

export default function LandingPage() {
  return (
    <div>
      <Header
        color="transparent" fixed
        changeColorOnScroll={{ height: 400, color: "white" }}
      />
      <Carousel />
      <RifleShotgun />
      <Footer />
    </div>
  );
}
