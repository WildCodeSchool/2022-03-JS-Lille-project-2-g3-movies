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
    height: 10vh;
    background-color: rgb(8, 7, 8);
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    min-height: 75px;
    transition: 0.5s;
    position: initial;
  }
  .navBarSolid {
    background-color: rgb(8, 7, 8, 0.8);
    color: var(--font-primaire);
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
    z-index: 1;
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
    visibility: hidden;
    background-color: black;
    transition: all 0.8s ease-out;
    color: #fff;
    z-index: 1;
  }
  .showNav .navBarLinks {
    left: 0;
    width: 20vw;
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
    font-size: 1rem;
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
  .searchBar {
    margin-right: 5rem;
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

  .topnav .search-container {
    float: right;
  }

  .topnav input[type="text"] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  }

  .topnav .search-container button {
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

  .topnav .search-container button:hover {
    background: #ccc;
  }

  .searchLogo {
    height: 12px;
  }
  @media screen and (max-width: 767px) {
    .searchBar {
      display: none;
    }
    .navBar {
      padding: 0;
      position: initial;
      background-color: black;
    }
    .navBarLogo {
      padding-right: 1.3rem;
    }
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
