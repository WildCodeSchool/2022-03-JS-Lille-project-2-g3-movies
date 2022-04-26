import { Link } from "react-router-dom";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import {
  action,
  comedy,
  crime,
  documentary,
  drama,
  family,
  fantasy,
  horror,
  romance,
  sciFi,
  western,
} from "../../assets/data";
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
          <Link to={`/results/${comedy.key}`}>
            <img src={comedy.picture} alt={comedy.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${crime.key}`}>
            <img src={crime.picture} alt={crime.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${documentary.key}`}>
            <img src={documentary.picture} alt={documentary.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${drama.key}`}>
            <img src={drama.picture} alt={drama.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${family.key}`}>
            <img src={family.picture} alt={family.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${fantasy.key}`}>
            <img src={fantasy.picture} alt={fantasy.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${horror.key}`}>
            <img src={horror.picture} alt={horror.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${romance.key}`}>
            <img src={romance.picture} alt={romance.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${sciFi.key}`}>
            <img src={sciFi.picture} alt={sciFi.alt} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/results/${western.key}`}>
            <img src={western.picture} alt={western.alt} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </STypeCarroussel>
  );
}
