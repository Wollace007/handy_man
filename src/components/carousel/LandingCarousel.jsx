import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import { Link } from "react-router-dom";
import { Rating, Typography } from "@mui/material";

function LandingCarousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: true,
    slidesToShow: 5,
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
      imageSrc:
        "https://img.freepik.com/free-photo/speaking-outdoors_1098-14924.jpg?w=740&t=st=1678430427~exp=1678431027~hmac=b36d8e3895c8d5d7baa226d73ea888143a8ab5d8c209cf5c61d5c59d1d002e22",
      title: "Job kinyua",
      description: "architecturer",
      pricingText: "USD 150/Day"
    },
    {
      id: 2,
      imageSrc:
        "https://w7.pngwing.com/pngs/170/571/png-transparent-plumber-plumbing-backflow-spanners-home-repair-plumber-miscellaneous-engineer-electric-blue-thumbnail.png",
      title: "Macharia Maina",
      description: "Plumber",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 3,
      imageSrc:
        "https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto,f_auto/https://www.gcu.edu/sites/default/files/2020-08/mechanical_engineer.jpg ",
      title: "Mary Mary",
      description: "Electrician",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
    },
    {
      id: 4,
      imageSrc:
        "https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/02/What-Is-the-Going-Rate-for-House-Cleaning-1-650x433.jpg",
      title: "joe the cleaner",
      description: "House cleaner",
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
      imageSrc:
        "https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg",
      title: "samm Sammy",
      description: "Web developer",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 6,
      imageSrc:
        "https://cdn.24.co.za/files/Cms/General/d/11250/7c37d7d557f640c48dcaa7193d2c65db.jpg",
      title: "Jolie Jolie",
      description: "Carpenter and wood expert",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 7,
      imageSrc:
        "https://www.collinsdictionary.com/images/thumb/driver_560323171_250.jpg?version=4.0.302",
      title: "RemmyMartin ",
      description: "chauffeur",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
    },
    {
      id: 8,
      imageSrc:
        "https://media.istockphoto.com/id/866699668/photo/gourmet-chef-cooking-in-a-commercial-kitchen.jpg?s=612x612&w=0&k=20&c=rvWTwbW54nIHwsZIjSU8TzX1_VQqzAnjjJuWm5zOlhw=",
      title: "BURNA BOY",
      description: "Chef",
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
      imageSrc:
        "https://img.freepik.com/free-photo/smiling-young-african-american-builder-uniform-holding-roller-brush-with-paint-brush-isolated-blue-background_141793-139433.jpg?w=740&t=st=1678441046~exp=1678441646~hmac=f10778ee5d10413195b6144b001bd2229578999ed1f61cc2488bbfb03b246e40",
      title: "Kevin hart",
      description: "interior designer and painter",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 10,
      imageSrc:
        "https://cdn.vectorstock.com/i/1000x1000/40/18/indian-tailor-vector-33964018.webp",
      title: "Jack Daniel",
      description: "Fashion designer",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      id: 11,
      imageSrc:
        "https://media.istockphoto.com/id/979498966/vector/cartoon-shoemaker-cobbler-working.jpg?s=612x612&w=0&k=20&c=t-ZMitmSPUG4UMRIcLrnKNpJG2A8QJj9WEJC6sywKaY=",
      title: "Captain Morgan",
      description: "Shoe designer",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
    },
    {
      id: 12,
      imageSrc:
        "https://img.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148505104.jpg?w=740&t=st=1678441316~exp=1678441916~hmac=a20454c9481101d842155623b45643822adfbe3258c36e1eb342b1da9a058c19",
      title: "Njoroo wa Uber",
      description: "Delivery man",
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
        {/* <div class="sec-title center">
          <div class="sec-title-inner">
            <span style={{fontWeight:'bolder', fontSize:"1.8rem"}}>Top 10 Service Workers</span>
            <h2>With international recognition.</h2> 
          </div>
        </div> */}

        <div class="serv-wrap2 remove-ext30">
          <div class="row">
            <div className="content">
              <div className="controls">
                <div class="sec-title center">
                  <div class="sec-title-inner">
                    <span
                      style={{
                        fontWeight: "bolder",
                        fontSize: "1.8rem",
                        marginRight: "4rem",
                      }}
                    >
                      Top 10 Service Workers
                    </span>
                    {/* <h2>With international recognition.</h2> */}
                  </div>
                </div>
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
                            title="handy man"
                          >
                            <img
                              width="240"
                              height="218"
                              src={card.imageSrc}
                              class="attachment-unload_270x218 size-unload_270x218 wp-post-image"
                              alt=""
                              loading="lazy"
                              style={{
                                borderRadius: "20px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            />
                          </a>
                        </Link>
                      </div>
                      <div class="serv-info6">
                        <h4>
                          <a
                            href="../service/road-shipping/index.html"
                            title=""
                          >
                            {card.title}
                          </a>
                        </h4>
                        <span> {card.description} </span>
                        <Typography component="legend">4.2k</Typography>
                        <Rating name="disabled" value={3} disabled />
                       <Typography>{card.pricingText}</Typography> 
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

export default LandingCarousel;
