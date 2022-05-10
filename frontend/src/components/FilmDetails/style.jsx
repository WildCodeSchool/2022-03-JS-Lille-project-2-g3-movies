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
    margin-top: 62vh;
  }
  span {
    margin: 1rem;
    border: 3px solid;
    border-radius: 1rem;
    background: black;
    padding: 5px;
  }
  img {
    border-radius: 20px;
    margin-top: 50vh;
    box-shadow: -10px 2px 94px -4px rgba(255, 255, 255, 0.82);
    -webkit-box-shadow: -10px 2px 94px -4px rgba(255, 255, 255, 0.82);
    -moz-box-shadow: -10px 2px 94px -4px rgba(255, 255, 255, 0.82);
  }
  h1 {
    margin-bottom: 2rem;
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
    font-weight: 200;
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
  @media screen and (max-width: 767px) {
    .banner {
      display: flex;
      align-items: center;
      width: 100vw;
    }
    .info {
      display: block;
    }
    img {
    }
    .infotxt {
      margin-top: 0vh;
      margin-left: 0;
    }
    h3 {
      font-weight: 700;
      display: flex;
      flex-wrap: wrap;
    }
    .infosupp {
      display: none;
      margin-top: 0;
      margin-left: 0;
    }
    h1,
    h2,
    h3,
    p {
      text-align: center;
    }
    span {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      width: 8rem;
    }
  }
`;
