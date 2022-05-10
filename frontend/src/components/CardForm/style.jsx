import styled from "styled-components";

export default styled.section`
  .card {
    position: relative;
    padding: 1rem;
  }

  img {
    position: relative;
    width: 20em;
    & > * {
      height: 100%;
      width: 100%;
    }
  }

  .btn {
    background-color: transparent;
    position: absolute;
    top: 4%;
    right: 6%;
    border: none;
  }
  .favorite {
    width: 2rem;
    color: aliceblue;
  }
  #emptyHearth {
    color: red;
  }
  #fullHearth {
    color: red;
  }
`;
