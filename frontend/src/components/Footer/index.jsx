import SFooter from "./style";
import Modal from "../Modal";
import Modal2 from "../Modal2";
import Modal3 from "../Modal3";

export default function Footer() {
  return (
    /* 3 components are created in order to easily change the text inside each modal (this way is advised by Luigi). In a second release, we could improve this */
    <SFooter>
      <Modal />
      <Modal2 />
      <Modal3 />
    </SFooter>
  );
}
