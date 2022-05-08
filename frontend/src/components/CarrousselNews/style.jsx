import styled from "styled-components";

export default styled.section`
  margin-bottom: 5vh;

  .carousel {
    height: 87vh;
    width: 100vw;
  }
  @media screen and (max-width: 767px) {
    .carousel {
      height: auto;
    }
  }
`;
