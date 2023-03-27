import { Grid } from "@mui/material";
// import Swiper core and required modules

import CarousselCard from "./CarousselCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const Caroussel = () => {
  return (
    <Grid
      item
      sx={{ maxWidth: "100%", height: "20em" }}
      py={2}
      style={{ background: "" }}
    >
      <Swiper
        // install Swiper modules
        slidesPerView={1}
        spaceBetween={10}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          2560: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarousselCard />
        </SwiperSlide>

        <SwiperSlide>
          <CarousselCard />
        </SwiperSlide>

        <SwiperSlide>
          <CarousselCard />
        </SwiperSlide>

        <SwiperSlide>
          <CarousselCard />
        </SwiperSlide>

        <SwiperSlide>
          <CarousselCard />
        </SwiperSlide>

        <SwiperSlide>
          <CarousselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarousselCard />
        </SwiperSlide>

        <SwiperSlide>
          <CarousselCard />
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
};

export default Caroussel;
