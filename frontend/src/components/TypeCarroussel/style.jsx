import styled from "styled-components";

export default styled.section`
  height: 40vh;
  max-width: 800px;
  margin: auto;
  margin-top: 60vh;
  padding-top: 3vh;
  padding-left: var(--section-spacing);

  h2 {
    text-align: center;
  }

  div {
    border-radius: 5vw;
    height: 30vh;
    padding: 1rem;
  }

  .swiper {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    border: 5px solid red;
  }

  a {
    border: 2px solid yellowgreen;
  }
`;
