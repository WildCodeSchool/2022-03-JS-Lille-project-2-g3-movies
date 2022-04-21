import styled from "styled-components";

export default styled.div`
  .Modal {
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    width: 300px;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    margin: auto;
    margin-top: 350px;
    transform: ${(props) =>
      props.visible ? "translateY(0vh)" : "translateY(-100vh)"};
    opacity: ${(props) => (props.visible ? "1" : "0")};
  }
`;
