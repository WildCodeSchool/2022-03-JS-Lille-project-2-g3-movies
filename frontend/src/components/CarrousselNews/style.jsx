import styled from "styled-components";

export default styled.section`
height: 60vh;
background-image: url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/5P8SmMzSNYikXpxil6BYzJ16611.jpg");
//This image is the cover image from API / not from API in this first step"

// in App.jsx, this component is in first in order for the image to begin from left top.
// a div is added for over components to go on this content.
background-size: cover;
background-repeat: no-repeat;
background-position: top center;
filter: grayscale(19%) brightness(96%) saturate(149%) opacity(86%);
-webkit-filter: grayscale(19%) brightness(96%) saturate(149%) opacity(86%);
-moz-filter: grayscale(19%) brightness(96%) saturate(149%) opacity(86%);
box-shadow: 10px 10px 94px 0px var(--color-grey);
-webkit-box-shadow: 10px 10px 94px 0px var(--color-grey);
-moz-box-shadow: 10px 10px 94px 0px var(--color-grey);
}
`;
