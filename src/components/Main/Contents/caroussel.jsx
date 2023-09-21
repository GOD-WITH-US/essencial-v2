import React from "react";
import { Grid } from "@mui/material";
import MemberCard from "./MemberCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const Caroussel = () => {
  // Récupération des données d'utilisateurs dans Caroussel
  const usersData = useSelector((state) => state.usersReducer);
  const loggedInUserId = useSelector((state) => state.userReducer._id);

  // Filtrer les utilisateurs pour exclure l'utilisateur connecté
  const filteredUsers = Object.values(usersData).filter(
    (user) => user._id !== loggedInUserId
  );

  return (
    <Grid
      item
      sx={{ maxWidth: "100%", height: "20em" }}
      py={2}
      style={{ background: "" }}
    >
      {/* Condition pour vérifier s'il y a des utilisateurs à afficher */}
      {filteredUsers.length > 0 && (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            600: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
            1440: { slidesPerView: 3, spaceBetween: 50 },
            2560: { slidesPerView: 4, spaceBetween: 50 },
          }}
          className="mySwiper"
        >
          {filteredUsers.map((user, index) => (
            <SwiperSlide key={index}>
              <MemberCard user={user} currentUserUid={loggedInUserId} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Grid>
  );
};

export default Caroussel;
