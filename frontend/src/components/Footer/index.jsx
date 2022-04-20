import SFooter from "./style";

export default function Footer() {
  const modalContainer = document.querySelector(".modal-container");
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  return (
    <SFooter>
      <footer>
        <div className="modal-container">
          <div className="overlay modal-trigger" />
          <div className="modal">
            <button type="button" className="close-modal modal-trigger">
              X
            </button>
            <h1>VOICI DU CONTENU</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              modi, ab numquam temporibus debitis exercitationem, quisquam vel
              quam quae corrupti doloremque maxime inventore ipsa! Inventore
              fugiat dolore veniam ratione, similique aperiam magnam, sint
              pariatur dolorum culpa nesciunt recusandae, ipsam perspiciatis.
            </p>
          </div>
        </div>
        <button type="button" className="modal-btn modal-trigger">
          About
        </button>
        <button type="button"> Legal </button>
        <button type="button"> The team </button>
      </footer>
    </SFooter>
  );
}
