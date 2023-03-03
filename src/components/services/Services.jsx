import React from "react";
import { FaArrowRight } from "react-icons/fa";

import "./services.css";
import { services } from "../../Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs ">Oque eu faço</h2>
      <p className="section__subtitle">
        Meus <span>Serviços</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper"
      >
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide className="services__item card card-one">
              <span className="services__subtitle text-cs">{name}</span>

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>

              <a href="" className="link">
                See Pricing
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
