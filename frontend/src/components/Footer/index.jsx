import SFooter from "./style";
import Modal from "../Modal";

export default function Footer() {
  return (
    <SFooter>
      <Modal button="About">
        <h2>Hello Modal </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          itaque fuga? Maxime corporis, nemo ipsum sunt porro veritatis soluta
          illo, aspernatur eligendi ea doloremque velit natus totam? Nihil,
          facere quae sint porro soluta corporis veritatis tempora obcaecati?
          Aspernatur, officiis adipisci!
        </p>
      </Modal>
      <Modal button="Legal">
        <h2>Hello Modal 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          itaque fuga? Maxime corporis, nemo ipsum sunt porro veritatis soluta
          illo, aspernatur eligendi ea doloremque velit natus totam? Nihil,
          facere quae sint porro soluta corporis veritatis tempora obcaecati?
          Aspernatur, officiis adipisci!
        </p>
      </Modal>
      <Modal button="CGV">
        <h2>Hello Modal 4</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          itaque fuga? Maxime corporis, nemo ipsum sunt porro veritatis soluta
          illo, aspernatur eligendi ea doloremque velit natus totam? Nihil,
          facere quae sint porro soluta corporis veritatis tempora obcaecati?
          Aspernatur, officiis adipisci!
        </p>
      </Modal>
      <Modal button="Team">
        <h2>Hello Modal 3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          itaque fuga? Maxime corporis, nemo ipsum sunt porro veritatis soluta
          illo, aspernatur eligendi ea doloremque velit natus totam? Nihil,
          facere quae sint porro soluta corporis veritatis tempora obcaecati?
          Aspernatur, officiis adipisci!
        </p>
      </Modal>
    </SFooter>
  );
}
