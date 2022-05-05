import styled from "styled-components";

export default styled.section`
  margin-bottom: 5vh;

  .carousel {
    height: 87vh;
    background-position: center;
  }
  @media screen and (max-width: 767px) {
    .carousel {
      height: auto;
    }
  }
`;
