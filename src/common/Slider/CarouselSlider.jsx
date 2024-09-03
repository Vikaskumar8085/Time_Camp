import React from "react";
import Slider from "react-slick";

function CarouselSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider style={{ overflow: "hidden" }} {...settings}>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            style={{ width: "100%", height: "500px" }}
            srcset=""
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            style={{ width: "100%", height: "500px" }}
            srcset=""
          />
        </div>
      </Slider>
    </>
  );
}

export default CarouselSlider;
