import styled from "styled-components";

export default styled.section`
  width: 20em;
  border: 2px solid red;
  & > * {
    height: 100%;
    width: 100%;
  }
`;
