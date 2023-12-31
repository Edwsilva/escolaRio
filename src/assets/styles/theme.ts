import { DefaultTheme } from 'styled-components';
// Agora devo tipar meu tema


const theme: DefaultTheme = {
  // Paleta de cores - https://smart-swatch.netlify.app
  //So the first step is creating a declarations file. Let's name it styled.d.ts for example.

  colors: {
    black: {
      900: '#121212',
      800: '#262626',
      400: '#a6a6a6',
      200: '#BFBFBF',
      50: '#F8F0F2',
    },
    purple: {
      700: '#800080',
      400: '#FE20FE',
    },
    green: {
      400: '#4FE268',
    },
    red: {
      300: '#FF4C58',
    },
    blue: {
      400: '#395BFC',
      100: '#B1C5FF',
    },
    orange: {
      400: '#FE891E',
    },
  },
};

export default theme;
