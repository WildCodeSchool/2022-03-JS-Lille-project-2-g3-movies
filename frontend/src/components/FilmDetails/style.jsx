import styled from "styled-components";

export default styled.section`
  height: 200vh;
  background-color: black;
  .banner {
    height: 80vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .info {
    display: flex;
    margin-left: 10vw;
  }
  .infotxt {
    margin-left: 2rem;
    margin-top: 20vh;
  }
  img {
    border-radius: 20px;
  }
  h1 {
    text-align: start;
  }
  h2 {
    text-decoration: underline;
    text-align: center;
  }
  h3 {
    font-weight: 700;
  }
  p {
    color: #fff;
    font-weight: 600;
    margin-top: 1rem;
  }
  .infosupp {
  }
`;
