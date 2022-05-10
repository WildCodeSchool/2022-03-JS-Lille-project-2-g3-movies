import styled from "styled-components";

export default styled.section`
  .card {
    position: relative;
    padding: 1rem;
  }

  img {
    position: relative;
    width: 20em;
    box-shadow: 0px 10px 13px -7px #000000, 2px 4px 10px 6px rgba(0, 0, 0, 0.45);
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
