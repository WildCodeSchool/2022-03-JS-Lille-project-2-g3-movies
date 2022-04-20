import styled from "styled-components";

export default styled.footer`
  background-color: var(--color-bg-primaire);
  color: var(--color-font-primaire);
  -webkit-box-shadow: 13px 0px 28px 8px var(--color-grey);
  -moz-box-shadow: 13px 0px 28px 8px var(--color-grey);
  box-shadow: 13px 0px 28px 8px var(--color-grey);

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 10vh;
    padding-left: var(--section-spacing);
  }
  .modal-btn {
    padding: 10px 14px;
    font-size: 18px;
    margin: 100px auto;
    display: block;
    min-width: 150px;
    cursor: pointer;
  }
  .modal-container {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: none;
  }
  .modal-container.active {
    display: block;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #333333d3;
  }
  .modal {
    width: 95%;
    max-width: 500px;
    min-width: 300px;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .close-modal {
    padding: 8px 10px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background-color: var(--color-button);
    color: #fff;
  }
  .modal h1 {
    margin-bottom: 10px;
    font-weight: 500;
  }
  .modal p {
    line-height: 1.4;
    margin-bottom: 5px;
    color: black;
  }
`;
