import styled from "styled-components";

export default styled.section`
  width: 80vw;

  margin: auto;
  margin-top: 60vh;
  padding-top: 3vh;
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
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-width: 250px;
  }
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
