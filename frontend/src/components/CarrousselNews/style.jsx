import styled from "styled-components";

export default styled.section`
height: 60vh;
background-image: url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/5P8SmMzSNYikXpxil6BYzJ16611.jpg");
//cette image est l'image "cover de l'API a priori - elle a déjà été retaillée"
//Dans cette 1è phase elle est "en dur" pour styler le layout.
// dans App.jsx, cet élément est positionné en 1er pour que l'image parte d'en haut à gauche. 
// Une div a été ajoutée pour enlgober le reste du contenu afin qu'il couvre cette image en background. 
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
