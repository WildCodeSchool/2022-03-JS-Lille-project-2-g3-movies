import styled from "styled-components";

export default styled.section`
  width: 70vw;
  margin: auto;
  margin-top: 5vh;
  padding-left: var(--section-spacing);
  h2 {
    text-align: center;
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
    z-index: initial;
  }
  .swiper-wrapper {
    z-index: initial;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: initial;
  }
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    padding-left: 0;
    div {
      border-radius: initial;
    }
  }
`;
