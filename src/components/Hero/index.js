import React from "react";
import { HeroContainer, HeroImg } from "./HeroElements";
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={product1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={product2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={product3} alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={product4} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </HeroContainer>
  );
};

export default Hero;
