import styled from "styled-components";

export default styled.section`
  height: 40vh;
  max-width: 800px;
  margin: auto;
  padding-top: 5vh;
  padding-left: var(--section-spacing);

  h2 {
    text-align: center;
  }

  div {
    border: 1px solid #646881;
    border-radius: 5vw;
    height: 30vh;
    padding: 1rem;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;

    div {
      border-radius: initial;
    }
  }
`;
