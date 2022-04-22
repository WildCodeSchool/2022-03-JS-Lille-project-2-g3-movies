import { Link } from "react-router-dom";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { action, animation, comedy, crime } from "../../assets/data";
import "swiper/css";
import "swiper/css/navigation";
import STypeCarroussel from "./style";

/* eslint-enable import/no-unresolved */

export default function TypeCarroussel() {
  return (
    <STypeCarroussel>
      <Swiper slidesPerView={3} spaceBetween={10} className="mySwiper">
        <SwiperSlide>
          <Link to={`/results/${action.key}`}>
            <img src={action.picture} alt={action.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${animation.key}`}>
            <img src={animation.picture} alt={animation.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${comedy.key}`}>
            <img src={comedy.picture} alt={comedy.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${crime.key}`}>
            <img src={crime.picture} alt={crime.alt} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </STypeCarroussel>
  );
}
