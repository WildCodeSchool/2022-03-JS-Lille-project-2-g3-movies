import SFooter from "./style";
import Modal from "../Modal";

export default function Footer() {
  return (
    <SFooter>
      <Modal button="Show Adress">
        <h2>Own adress </h2>
        <p>CINERAMA</p>
        <p> Avenue des Peupliers 59000 Lille</p>
        <p>59000 Lille</p>
      </Modal>
      <Modal button="Team">
        <h2>Hello, this is own team ! </h2>
        <p> Describe own team project</p>
      </Modal>
    </SFooter>
  );
}
