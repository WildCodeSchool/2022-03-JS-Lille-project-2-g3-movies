import styled from "styled-components";

export default styled.main`
  .result {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .form-component {
    .form-container {
      text-align: center;
      margin-top: 2rem;
    }
    form {
      width: 300px;
      margin: 0 auto;

      input[type="text"] {
        padding: 1px 10px;
        border-radius: 10px 10px 0 0;
        border: none;
        font-size: 1.5rem;
        display: block;
        margin: 0 auto;
        width: 220px;
        outline: none;
        text-align: center;
      }
      input[type="submit"] {
        padding: 1px 10px;
        width: 220px;
        border-radius: 0 0 10px 10px;
        border: none;
        background: $color-1;
        color: $white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10;
        position: relative;

        &:hover {
          background: $black;
        }
      }
    }
    .btn-sort-container {
      margin: 8px auto;
      width: 220px;
      display: flex;
      justify-content: space-around;
      cursor: pointer;

      .goodToBad {
        border-radius: 10px 0 0 10px;
      }
      .badToGood {
        border-radius: 0 10px 10px 0;
      }
      .goodToBad,
      .badToGood {
        background: $color-1;
        width: 110px;
        transition: 0.3s;
        position: relative;

        &:hover {
          background: $black;
        }
      }
      .goodToBad span {
        transform: translateY(-50%) rotate(-90deg);
        right: 18px;
      }
      .badToGood span {
        transform: translateY(-50%) rotate(90deg);
        left: 16px;
      }
      .goodToBad span,
      .badToGood span {
        position: absolute;
        top: 50%;
      }
    }
  }
`;
