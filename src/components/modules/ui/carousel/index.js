import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Layout from "../../../layouts";

// material
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Carousel = ({ imgs }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        swiper.slidePrev();
      } else if (event.key === "ArrowRight") {
        swiper.slideNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Layout>
      <div>
        <h1 className="heading">Carrusel</h1>
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={5} // Mostrar 5 imágenes a la vez
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {imgs.map(({ id, url, type }) => (
            <SwiperSlide key={id}>
              <Link to={`/${id}/${type}`} key={id}>
                <img src={url} alt="slide_image" />
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ArrowBackIcon />
            </div>
            <div className="swiper-button-next slider-arrow">
              <ArrowForwardIcon />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </Layout>
  );
};

export default Carousel;
