import { Link } from "react-router-dom";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import genres from "../../assets/data";
import "swiper/css";
import "swiper/css/navigation";
import STypeCarroussel from "./style";

/* eslint-enable import/no-unresolved */

export default function TypeCarroussel() {
  return (
    <STypeCarroussel>
      <Swiper slidesPerView={3} spaceBetween={10} className="mySwiper">
        {genres.map((genre) => {
          return (
            <SwiperSlide key={genre.key}>
              <Link to={`/results/${genre.key}`}>
                <img src={genre.picture} alt={genre.alt} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </STypeCarroussel>
  );
}
