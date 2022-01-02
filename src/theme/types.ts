import { Theme } from '@material-ui/core';

export interface Buttons {
  default: string;
  hover: string;
  active: string;
}

export interface Border {
  primary: string;
  secondary: string;
}

export interface Scroll {
  primary: string;
  secondary: string;
}

export interface CustomTheme extends Theme {
  colors: ColorMap;
}

export interface ColorMap {
  [name: string]: string;
}

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export type ThemeType = typeof DARK_THEME | typeof LIGHT_THEME;
