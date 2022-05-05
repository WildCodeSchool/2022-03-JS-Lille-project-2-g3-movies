import styled from "styled-components";

export default styled.section`
  margin-top: 5vh;
  padding-top: 3vh;
  padding-bottom: 3vh;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;

  h2 {
    text-align: center;
  }
  p {
    padding-left: 1rem;
    margin: auto;
    text-align: center;
  }

  a {
    text-decoration: none;
  }
  .switchButton {
    background-color: var(--color-button);
    border-radius: 20vw;
    text-transform: uppercase;
    color: var(--color-font-primaire);
    cursor: pointer;
    box-shadow: 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
    width: fit-content;
    padding: 0.5em 1.75em 0.5em;
    margin-top: 3rem;
    width: 8rem;
    margin: 2rem;
  }
  .switch {
    flex-basis: 75%;
    display: flex;
    justify-content: center;
  }
`;
