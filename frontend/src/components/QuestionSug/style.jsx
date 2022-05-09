import styled from "styled-components";

export default styled.div`
  .smileyImg {
    display: flex;
    justify-content: center;
  }
  h1,
  h2,
  h3 {
    text-align: center;
    padding-top: 1rem;
  }
  input {
    width: 20vh;
    height: auto;
  }
  Img {
    width: 22vh;
    height: auto;
    margin: 0.5vw;
    margin-top: 1vh;
  }
  button.Img {
    display: block;
    width: auto;
    height: auto;
  }
  ///// CSS Button Validation //////
  .buttonResults {
    display: flex;
    justify-content: center;
  }
  .button {
    background-color: var(--color-button);
    border-radius: 20vw;
    text-transform: uppercase;
    color: var(--color-font-primaire);
    cursor: pointer;
    box-shadow: 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
    padding: 0.5em 1.75em 0.5em;
    margin: 4vh 0;
    text-align: center;
  }
  div {
    border-radius: initial;
  }
  .selected {
    border: 5px solid var(--color-button);
    opacity: 50%;
  }
  .link-off {
    display: none;
  }
  .ok-off {
    opacity: 20%;
    display: block;
  }
`;
