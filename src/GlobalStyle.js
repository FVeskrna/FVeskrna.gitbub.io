import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 15px;
    "slnt" 0;
  }

  h1{
    color: #000000;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 35px;
  }

  h2{
    color: #000000;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 25px;  
    text-align: center;
    margin-bottom: 3rem;
  }

  h3{
    color: #000000;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 20px;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
    text-align: center;
  }

  a {
    color: #343a40;
    text-decoration: none;
    font-size: 25px;
    

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: #a9a9a9;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 25px;

  }

  pp {
    color: #000000;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 20px;

  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  InputContainer{
    color: #000000;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 476;
    font-style: normal;
    font-variation-settings:
    "slnt" 0;
    font-size: 25px;
  }
`;



export default GlobalStyle;
