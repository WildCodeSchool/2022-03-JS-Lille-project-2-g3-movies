import styled from "styled-components";

export default styled.div`
  /***DECLARATION DE VARIABLES GENERALES POUR STYLES */
  /* general variable*/
  --color-bg-general: #ededf4;
  --color-bg-primaire: #080708;
  --color-grey: #646881;
  --color-font-primaire: #ededf4;
  --font-weight-general: 400;
  --font-size-general: 1rem;
  --font-size-middle: 0.8rem;
  --font-sie-small: 0.64rem;
  --color-font-general: #080708;
  --font-general: "Andika New Basic", sans-serif;
  --line-height-general: 1.75;

  /*paragraph variable*/
  --font-color-paragraph: #080708;
  --font-size-paragraph: 1rem;

  /*titles*/
  --font-color-title1: red;
  --font-color-title2: green;
  --font-size-h1: 1.953rem;
  --font-size-h2: 1.563rem;
  --font-size-h3: 1.25rem;

  /*Paddings et margins */
  --section-spacing: 1rem;

  /*Déclaration de l'arriere plan general*/

  margin: 0;
  background-color: #ededf4;
  font-family: var(--font-general);
  font-weight: var(--font-weight-general);
  line-height: var(--line-height-general);
  color: var(--color-font-general);
  box-sizing: border-box;
  min-height: 100vh;

  header,
  footer,
  section {
    padding: 2rem;
  }

  .test {
    border: 3px dotted red;
  }

  h1 {
    color: var(--font-color-title1);
    font-size: var(--font-size-h1);
  }
  h2 {
    color: var(--font-color-title2);
    font-size: var(--font-size-h2);
  }

  h3 {
    color: var(--font-color-title2);
    font-size: var(--font-size-h2);
  }
  section {
    padding: var(--section-spacing);
    max-width: 800px;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
  p,
  li {
    font-size: var(--font-size-general);
  }
`;
