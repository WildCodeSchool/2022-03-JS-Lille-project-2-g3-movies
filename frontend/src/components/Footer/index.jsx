import SFooter from "./style";
import Modal from "../modal";
import Modal2 from "../Modal2";
import Modal3 from "../Modal3";

export default function Footer() {
  return (
    /* 3 modals are created in order to change the text inside (the easiest way to do it / Done with Luigi. To imprive in a next release */
    <SFooter>
      <Modal />
      <Modal2 />
      <Modal3 />
    </SFooter>
  );
}
