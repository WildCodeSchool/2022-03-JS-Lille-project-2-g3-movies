import styled from "styled-components";

export default styled.section`
  width: 20em;
  margin: 2rem;

  & > * {
    height: 100%;
    width: 100%;
    box-shadow: -5px 2px 66px -3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -5px 2px 66px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -5px 2px 66px -3px rgba(0, 0, 0, 0.75);
    img {
      border-radius: 5px;
    }
  }
`;
