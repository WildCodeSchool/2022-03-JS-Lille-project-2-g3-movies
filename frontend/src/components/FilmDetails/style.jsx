import styled from "styled-components";

export default styled.section`
  height: 140vh;
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
    margin-top: 70vh;
  }
  img {
    border-radius: 20px;
    margin-top: 50vh;
    box-shadow: -10px 2px 94px -4px rgba(255, 255, 255, 0.82);
    -webkit-box-shadow: -10px 2px 94px -4px rgba(255, 255, 255, 0.82);
    -moz-box-shadow: -10px 2px 94px -4px rgba(255, 255, 255, 0.82);
  }
  h1 {
    text-align: start;
    color: #f8f8ff;
  }
  h2 {
    text-decoration: underline;

    margin: 2rem;
  }
  .synopsis {
    text-align: center;
  }
  h3 {
    font-weight: 800;
    text-decoration: underline;
  }
  p {
    color: #fff;
    font-weight: 600;
    margin-top: 1rem;
  }
  .infosupp {
    margin-top: 2rem;
    margin-left: 15vw;
  }
`;
