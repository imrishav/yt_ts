import { DefaultTheme } from 'styled-components';

export interface ThemeStyle {
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
}

export const darkTheme: DefaultTheme = {
  bg: '#181818',
  primaryColor: '#FFF',
  secondaryColor: '#AAAAAA',
  grey: '#202020',
  darkGrey: '#383838',
  black: '#121212',
  red: '#CC0000',
  blue: '#3EA6FF',
  white: '#FFF',
  pink: '#F86782',
  purple: '#282A36',
  font: 'Fira Sans',
};
