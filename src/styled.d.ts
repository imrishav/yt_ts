// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    // borderRadius: string;
    bg: string;
    primaryColor: string;
    secondaryColor: string;
    grey: string;
    darkGrey: string;
    black: string;
    red: string;
    blue: string;
    white: string;
    pink: string;
    purple: string;
    font: string;

    // colors: {
    //   main: string;
    //   secondary: string;
    // };
  }
}
