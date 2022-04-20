import { Carousel } from "react-responsive-carousel";
import imageTest from "../../assets/action.png";
import STypeCarroussel from "./style";

export default function TypeCarroussel() {
  return (
    <STypeCarroussel>
      <h2>By category</h2>
      <Carousel
        autoPlay
        interval={3000}
        transitionTime={1000}
        showThumbs={false}
        swipable
        infiniteLoop
        showStatus={false}
      >
        <img src={imageTest} alt="" />
      </Carousel>
      )
    </STypeCarroussel>
  );
}
