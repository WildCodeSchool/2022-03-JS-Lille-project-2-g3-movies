import SFooter from "./style";
import Modal from "../modal";
import Modal2 from "../Modal2";
import Modal3 from "../Modal3";

export default function Footer() {
  return (
    /* J'ai créé 3 modules de modal pour que les 3 modal agissent indépendamment 
    dans un 1er temps j'ai voulu mettre les 3 modale dans le même composent mais 
    les 3 étaient "connectés"  tous les boutons ouvrés 
    qu'une seule modale chose qu'on ne veut pas d'où la création de 3 modules */
    <SFooter>
      <Modal />
      <Modal2 />
      <Modal3 />
    </SFooter>
  );
}
