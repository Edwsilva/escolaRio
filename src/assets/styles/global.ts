import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    // https://fonts.google.com/specimen/Roboto
    // Definindo a cor dos textos
    color: ${({ theme }) => theme.colors.black[50]};
  }

  body{
    background: ${(props) => props.theme.colors.black[800]}

   // color: ${({ theme }) => theme.colors.black[50]}
  }

  a {
    text-decoration: none;
  }
`;
