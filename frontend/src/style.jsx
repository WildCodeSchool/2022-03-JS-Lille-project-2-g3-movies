import styled from "styled-components";

export default styled.div`
  /***DECLARATION DE VARIABLES GENERALES POUR STYLES */
  /* general variable*/
  --color-bg-general: #ededf4;
  --color-bg-primaire: #080708;
  --color-button: #a13231;
  --color-grey: #646881;
  --color-font-primaire: #ededf4;
  --font-weight-general: 400;
  --font-weight-title: 1000;
  --font-width: 65;
  --font-size-general: 1rem;
  --font-size-middle: 0.8rem;
  --font-sie-small: 0.64rem;
  --color-font-general: #080708;
  --font-general: "Andika New Basic", sans-serif;
  --line-height-general: 1.3;

  /*paragraph variable*/
  --font-color-paragraph: #080708;
  --font-size-paragraph: 1rem;

  /*titles*/
  --font-color-title1: #080708;
  --font-color-title2: #a13231;
  --font-size-h1: 1.953rem;
  --font-size-h2: 1.563rem;
  --font-size-h3: 1.25rem;

  /*Paddings et margins */
  --section-spacing: 2rem;

  /*Déclaration de l'arriere plan general*/

  margin: 0;
  background-color: #ededf4;
  font-family: var(--font-general);
  font-weight: var(--font-weight-general);
  line-height: var(--line-height-general);
  color: var(--color-font-general);
  box-sizing: border-box;
  .test {
    border: 3px dotted red;
  }

  h1 {
    color: var(--font-color-title1);
    font-size: var(--font-size-h1);
    font-weight: var(--font-weight-title);
  }
  h2 {
    color: var(--font-color-title2);
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-title);
  }

  h3 {
    color: var(--font-color-title2);
    font-size: var(--font-size-h2);
  }

  p,
  li {
    font-size: var(--font-size-general);
    font-weight: var(--font-weight-general);
  }
`;
