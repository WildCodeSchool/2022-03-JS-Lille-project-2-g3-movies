import styled from "styled-components";

export default styled.section`
  height: 25vh;
  max-width: 800px;
  margin: auto;
  padding-left: var(--section-spacing);
  margin-top: 5vh;
  padding-top: 3vh;

  h2 {
    text-align: center;
  }
  p {
    padding-left: 1rem;
    margin: auto;
    text-align: center;
  }
  .button {
    background-color: var(--color-button);
    border-radius: 20vw;
    text-transform: uppercase;
    color: var(--color-font-primaire);
    cursor: pointer;
    box-shadow: 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
    width: fit-content;
    padding: 0.5em 1.75em 0.5em;
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
  }
`;
