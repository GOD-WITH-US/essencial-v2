import { Grid } from "@mui/material";
// import Swiper core and required modules

import RecipeReviewCard from "./card";
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
      width="100%"
      height="auto"
      py={1}
      style={{ background: "" }}
    >
      <Swiper
        // install Swiper modules
        slidesPerView={1}
        spaceBetween={10}
  
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <RecipeReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <RecipeReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <RecipeReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <RecipeReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <RecipeReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <RecipeReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <RecipeReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <RecipeReviewCard />
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
};

export default Caroussel;
