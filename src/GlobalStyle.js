import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Playwrite+NG+Modern:wght@100&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap'););

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #0b132b;
    color: #8d99ae;
    
    font-family: "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
    font-size: 30px;
  }

  a {
    color: #cdd7d6;
    text-decoration: none;
    font-size: 25px;
    

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: #cdd7d6;
    font-family: "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-size: 25px;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  InputContainer{
    color: #cdd7d6;
    font-family: "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-size: 25px;
  }
`;

export default GlobalStyle;
