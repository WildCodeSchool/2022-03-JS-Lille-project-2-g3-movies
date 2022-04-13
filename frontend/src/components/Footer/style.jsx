import styled from "styled-components";

export default styled.footer`
  background-color: var(--color-bg-primaire);
  color: var(--color-font-primaire);

  -webkit-box-shadow: 13px 0px 28px 8px var(--color-grey);
  -moz-box-shadow: 13px 0px 28px 8px var(--color-grey);
  box-shadow: 13px 0px 28px 8px var(--color-grey);

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  li {
    margin: 0.5rem;
    font-size: var(--font-size-middle);
  }
`;
