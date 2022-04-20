import { Carousel } from "react-responsive-carousel";
import { action, animation, comedy, crime } from "@assets/data";
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
        <img src={action.picture} alt={action.alt} />
        <img src={animation.picture} alt={animation.alt} />
        <img src={comedy.picture} alt={comedy.alt} />
        <img src={crime.picture} alt={crime.alt} />
      </Carousel>
      )
    </STypeCarroussel>
  );
}
