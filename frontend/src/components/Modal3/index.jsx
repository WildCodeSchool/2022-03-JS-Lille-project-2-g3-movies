import React, { useState } from "react";
import SModal from "../Modal/style";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <SModal>
      <button type="button" onClick={toggleModal} className="btn-modal">
        The team
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" />
          <div className="modal-content">
            <h2>Hello Modal 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, itaque fuga? Maxime corporis, nemo ipsum sunt porro
              veritatis soluta illo, aspernatur eligendi ea doloremque velit
              natus totam? Nihil, facere quae sint porro soluta corporis
              veritatis tempora obcaecati? Aspernatur, officiis adipisci!
            </p>
            <button type="button" className="close" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </SModal>
  );
}
