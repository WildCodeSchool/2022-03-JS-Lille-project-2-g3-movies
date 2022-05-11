import styled from "styled-components";

export default styled.footer`
  .adressText {
    font-size: 1rem;
    display: flex;
    justify-content: center;
  }
  .entry {
    margin: 2vw;
  }

  .team {
    display: flex;
  }

  background-color: var(--color-bg-primaire);
  color: var(--color-font-primaire);
  -webkit-box-shadow: 13px 0px 28px 8px var(--color-grey);
  -moz-box-shadow: 13px 0px 28px 8px var(--color-grey);
  box-shadow: 13px 0px 28px 8px var(--color-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 10vh;
  padding-left: var(--section-spacing);
`;
