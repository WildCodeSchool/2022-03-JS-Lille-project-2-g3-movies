import { action, animation, comedy, crime } from "@assets/data";
import { Link } from "react-router-dom";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */
import { Pagination, Navigation } from "swiper";
import STypeCarroussel from "./style";

export default function TypeCarroussel() {
  return (
    <STypeCarroussel>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to={`/results/${action.key}`}>
            <img src={action.picture} alt={action.alt} />{" "}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={animation.picture} alt={animation.alt} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={comedy.picture} alt={comedy.alt} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={crime.picture} alt={crime.alt} />
        </SwiperSlide>
      </Swiper>
    </STypeCarroussel>
  );
}
