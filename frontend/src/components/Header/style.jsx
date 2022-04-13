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
  .navbar {
    height: 20vh;
    background-color: black;
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
  .navbarsolid {
    background-color: green;
    color: yellow;
  }
  .navbar_logo {
    justify-self: center;
  }
  .navbar_links {
    display: flex;
  }
  .navbar_link {
    padding: 0 0.3rem;
    color: inherit;
  }
  .navbar_burger {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    color: inherit;
  }
  .navbar_links {
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
  .show-nav .navbar_links {
    left: 0;
    width: 30vw;
    visibility: visible;
  }
  .navbar_item::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 3vw;
    height: 1px;
    background: #fff;
  }
  .navbar_link {
    display: block;
    padding: 1.5rem;
    font-size: 3vw;
  }
  .navbar_item:last-child::after {
    display: none;
  }
  .navbar_burger {
    display: block;
  }
  .navbar_burger:hover {
    cursor: pointer;
  }
  .burger-bar,
  .burger-bar::before,
  .burger-bar::after {
    display: block;
    width: 40px;
    height: 3px;
    position: relative;
    border-radius: 3px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
  }
  .burger-bar::before,
  .burger-bar::after {
    content: "";
    position: absolute;
    left: 0;
  }
  .burger-bar::before {
    transform: translateY(-12px);
  }
  .burger-bar::after {
    transform: translateY(12px);
  }
  .show-nav .burger-bar {
    width: 0;
    background: transparent;
  }
  .show-nav .burger-bar::before {
    transform: rotate(45deg);
    background-color: red;
  }
  .show-nav .burger-bar::after {
    transform: rotate(-45deg);
    background-color: red;
  }
  .navbar_item {
    transform: translateY(100vh);
  }
  .show-nav .navbar_item {
    transform: translateY(0);
  }
  .show-nav .slideInDown-1 {
    transition: all 1s ease-out;
  }
  .show-nav .slideInDown-2 {
    transition: all 1.1s ease-out;
  }
  @media screen and (max-width: 767px) {
    .show-nav .navbar_links {
      left: 0;
      width: 100vw;
      visibility: visible;
    }
    .navbar_link {
      display: block;
      padding: 1.5rem;
      font-size: 6vw;
    }
  }
`;
