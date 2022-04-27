import styled from "styled-components";

export default styled.section`
  /* height: 60vh; */
  /* background-image: url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/5P8SmMzSNYikXpxil6BYzJ16611.jpg"); */
  margin-bottom: 5vh;
  //This image is the cover image from API / not from API in this first step"

  // in App.jsx, this component is in first in order for the image to begin from left top.
  // a div is added for over components to go on this content.

  .carousel {
    height: auto;
    width: 100vw;
  }
  @media screen and (max-width: 767px) {
    .carousel {
      height: auto;
    }
  }
`;
