import styled from "styled-components";

export default styled.header`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  .navBar {
    height: 20vh;
    background-color: transparent;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    position: fixed;
    width: 100vw;
    min-height: 75px;
  }
  .navBarSolid {
    background-color: rgba(0, 0, 0, 0.5);
    color: yellow;
  }
  .navBarLogo {
    justify-self: center;
  }
  .navBarBurger {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    color: inherit;
    display: block;
  }
  .navBarLinks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    align-items: center;
    left: -100vw;
    bottom: 0;
    width: 0;
    height: 100vh;
    padding: 2rem;
    visibility: hidden;
    background-color: black;
    transition: all 0.8s ease-out;
  }
  .showNav .navBarLinks {
    left: 0;
    width: 30vw;
    visibility: visible;
  }
  .navBarItem::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 3vw;
    height: 1px;
    background: #fff;
  }
  .navBarLink {
    display: block;
    padding: 1.5rem;
    font-size: 3vw;
    color: inherit;
  }
  .navBarItem:last-child::after {
    display: none;
  }
  .navBarBurger:hover {
    cursor: pointer;
  }
  .burgerBar,
  .burgerBar::before,
  .burgerBar::after {
    display: block;
    width: 40px;
    height: 3px;
    position: relative;
    border-radius: 3px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
  }
  .burgerBar::before,
  .burgerBar::after {
    content: "";
    position: absolute;
    left: 0;
  }
  .burgerBar::before {
    transform: translateY(-12px);
  }
  .burgerBar::after {
    transform: translateY(12px);
  }
  .showNav .burgerBar {
    width: 0;
    background: transparent;
  }
  .showNav .burgerBar::before {
    transform: rotate(45deg);
    background-color: red;
  }
  .showNav .burgerBar::after {
    transform: rotate(-45deg);
    background-color: red;
  }
  .navBarItem {
    transform: translateY(100vh);
  }
  .showNav .navBarItem {
    transform: translateY(0);
  }
  .showNav .slideInDown-1 {
    transition: all 1s ease-out;
  }
  .showNav .slideInDown-2 {
    transition: all 1.1s ease-out;
  }
  @media screen and (max-width: 767px) {
    .showNav .navBarLinks {
      left: 0;
      width: 100vw;
      visibility: visible;
    }
    .navBarLink {
      display: block;
      padding: 1.5rem;
      font-size: 6vw;
    }
  }
`;
