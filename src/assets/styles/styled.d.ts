// import original module declarations
//https://styled-components.com/docs/api#create-a-declarations-file
// overwrite the existing type
import 'styled-components';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
   // borderRadius: string;
    //background: string
    colors: {
      black: {
        800: string,
        900: string,
        400: string,
        200: string,
        50: string,
      },
      purple: {
        700: string,
        400: string,
      },
      green: {
        400: string,
      },
      red: {
        300: string,
      },
      blue: {
        400: string,
        100: string,
      },
      orange: {
        400: string,
      },
    };
  }
}