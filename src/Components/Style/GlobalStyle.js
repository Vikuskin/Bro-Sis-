import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #ccc;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  figure {
    margin: 0;
  }

  figcaption {
    font-size: 18px;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font: inherit;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none; 
  }
`;