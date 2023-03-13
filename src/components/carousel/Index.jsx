import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import { Link } from "react-router-dom";

function Product() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const hotelCards = [
    {
      id: 1,
      imageSrc: "../wp-content/uploads/2019/12/8-370x370-1-270x218.jpg",
      title: "Twin Screw",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 2,
      imageSrc: "../wp-content/uploads/2019/12/6-370x370-1-270x218.jpg",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 3,
      imageSrc: "../wp-content/uploads/2019/12/2-370x370-1-270x218.jpg",
      title: "Vented Screw Barrel",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
    },
    {
      id: 4,
      imageSrc: "../wp-content/uploads/2019/12/2-370x370-1-270x218.jpg",
      title: "Bimetallic Screw Barrel",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 299/Day",
      features: [
        "Free Wifi",
        "Free breakfast",
        "Discounted Meals",
        "MacBook for work use (hotel's property)",
      ],
    },

    {
      id: 5,
      imageSrc: "../wp-content/uploads/2019/12/4-370x370-1-270x218.jpg",
      title: "Twin Screw",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 6,
      imageSrc: "../wp-content/uploads/2019/12/3-370x370-1-270x218.jpg",
      title: "Barrier Screw Barrel",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 7,
      imageSrc: "../wp-content/uploads/2019/12/5-370x370-1-270x218.jpg",
      title: "Vented Screw Barrel",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
    },
    {
      id: 8,
      imageSrc: "../wp-content/uploads/2019/12/8-370x370-1-270x218.jpg",
      title: "Bimetallic Screw Barrel",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 299/Day",
      features: [
        "Free Wifi",
        "Free breakfast",
        "Discounted Meals",
        "MacBook for work use (hotel's property)",
      ],
    },

    {
      id: 9,
      imageSrc: "../wp-content/uploads/2019/12/4-370x370-1-270x218.jpg",
      title: "Twin Screw",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 10,
      imageSrc: "../wp-content/uploads/2019/12/3-370x370-1-270x218.jpg",
      title: "Barrier Screw Barrel",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 11,
      imageSrc: "../wp-content/uploads/2019/12/5-370x370-1-270x218.jpg",
      title: "Vented Screw Barrel",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
    },
    {
      id: 12,
      imageSrc: "../wp-content/uploads/2019/12/8-370x370-1-270x218.jpg",
      title: "Bimetallic Screw Barrel",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 299/Day",
      features: [
        "Free Wifi",
        "Free breakfast",
        "Discounted Meals",
        "MacBook for work use (hotel's property)",
      ],
    },
  ];

  return (
    <section class="block no-padding">
      <div
        class="fixed-img2 pattern"
        style={{
          backgroundImage: "url(../wp-content/uploads/2019/12/map-pattern.png)",
        }}
      ></div>
      <div class="container">
        <div class="sec-title center">
          <div class="sec-title-inner">
            <span>Our Products</span>
            <h2>With international recognition.</h2>
          </div>
        </div>

        <div class="serv-wrap2 remove-ext30">
          <div class="row">
            <div className="content">
              <div className="controls">
                <button onClick={sliderRef?.slickPrev}>
                  <FaChevronLeft />
                </button>
                <button onClick={sliderRef?.slickNext}>
                  <FaChevronRight />
                </button>
              </div>
              <Slider ref={setSliderRef} {...sliderSettings}>
                {hotelCards.map((card, index) => (
                  <div
                    key={index}
                    className="card"
                    style={{ borderRadius: "10px" }}
                  >
                    <div class="serv-box6 text-info">
                      <div class="serv-thmb6">
                        <Link to={`/single-product/${card.id}`}>
                          <a
                            href="../service/road-shipping/index.html"
                            title="Road Shipping"
                          >
                            <img
                              width="270"
                              height="218"
                              src={card.imageSrc}
                              class="attachment-unload_270x218 size-unload_270x218 wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </Link>
                      </div>
                      <div class="serv-info6">
                        <h4>
                          <a
                            href="../service/road-shipping/index.html"
                            title="Road Shipping"
                          >
                            Road Shipping
                          </a>
                        </h4>
                        <span>Fast and secured delivery</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
