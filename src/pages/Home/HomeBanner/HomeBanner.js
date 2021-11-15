import { Carousel } from "react-bootstrap";
import React from "react";
import bgImg from "../../../slider-bg.jpg";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  const bg = bgImg;
  return (
    <>
      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src={bg} alt="First slide" />
          <Carousel.Caption>
            <Link to="/products">
              <button>Explore</button>
            </Link>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg} alt="Second slide" />

          <Carousel.Caption>
            <Link to="/products">
              <button>Explore</button>
            </Link>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg} alt="Third slide" />

          <Carousel.Caption>
            <Link to="/products">
              <button>Explore</button>
            </Link>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeBanner;
