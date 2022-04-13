import styled from "styled-components";

export default styled.section`
height: 70vh;


background-image: url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/5P8SmMzSNYikXpxil6BYzJ16611.jpg");
//cette image est l'image "cover de l'API a priori - elle a déjà été retaillée"
//Dans cette 1è phase elle est "en dur" pour styler le layout.
// dans App.jsx, cet élément est positionné en 1er pour que l'image parte d'en haut à gauche. 
// Une div a été ajoutée pour enlgober le reste du contenu afin qu'il couvre cette image en background. 
background-size: cover;
background-repeat: no-repeat;
background-position: top center;

}
`;
