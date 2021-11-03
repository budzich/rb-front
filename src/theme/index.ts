import { createTheme } from '@material-ui/core';
import { colors as colorsLight } from './lightTheme';
import { colors as colorsDark } from './darkTheme';
import { Border, Buttons, ColorMap, CustomTheme, DARK_THEME, Scroll, ThemeType } from './types';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  export interface Palette {
    buttons: Buttons;
    border: Border;
    scroll: Scroll;
    colors: ColorMap;
  }

  export interface TypeBackground {
    primary: string;
    secondary: string;
  }

  export interface TypeText {
    main: string;
    secondary: string;
    label: string;
    link: string;
    placeholder: string;
    title: string;
    error: string;
    active: string;
    completed: string;
    low: string;
  }
}

export const fontFamily = [
  'Open Sans',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

export const fontSizes = {
  xxSmall: 8,
  xSmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xLarge: 20,
  xxLarge: 34,
  xxxLarge: 48,
};

const theme = (type: ThemeType) => {
  const colors = type === DARK_THEME ? colorsDark : colorsLight;
  const palette = {
    colors,
    primary: {
      main: colors.blue,
      disabled: colors.blue,
    },
    secondary: {
      main: colors.white,
    },
    background: {
      primary: colors.backgroundPrimary,
      secondary: colors.backgroundSecondary,
    },
    text: {
      main: colors.text,
      secondary: colors.white,
      label: colors.text,
      link: colors.blue,
      placeholder: colors.placeholder,
      title: colors.title,
      error: colors.error,
      active: colors.blue,
      completed: colors.high,
      low: colors.low,
    },
    border: {
      primary: colors.border,
      secondary: colors.blue,
    },
    scroll: {
      primary: '#BDBDBD',
      secondary: '#E5E5E5',
    },
    buttons: {
      hover: colors.hover,
    }
  };
  const themeOptions = {
    palette,
    colors,
    fontSizes,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 768,
        xl: 1200,
        xlWithPadding: 1248,
      },
    },
    typography: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: fontSizes.medium,
      color: colors.text,
      lineHeight: '1.361875',
    },
    overrides: {
      MuiTypography: {
        root: {
          color: colors.text,
          fontFamily,
        },
        paragraph: {
          fontSize: fontSizes.medium,
          lineHeight: '1.361875',
        },
        body1: {
          fontSize: fontSizes.medium,
          lineHeight: '1.361875',
          fontFamily,
        },
        colorTextSecondary: {
          color: palette.text.secondary,
        },
        colorTextPrimary: {
          color: palette.text.main,
        },
        h1: {
          fontSize: '46px',
          lineHeight: '63px',
          fontWeight: 600,
        },
        h2: {
          fontSize: '32px',
          lineHeight: '44px',
          fontWeight: 400,
        },
        h3: {
          fontSize: '18px',
          lineHeight: '25px',
          fontWeight: 600,
        },
        h4: {
          fontSize: '16px',
          lineHeight: '22px',
          fontWeight: 600,
        },
        h5: {
          fontSize: '16px',
          lineHeight: '22px',
          fontWeight: 400,
        },
      },
      MuiButton: {
        root: {
          color: colors.text,
        }
      },
      MuiTooltip: {
        tooltip: {
          backgroundColor: palette.text.main,
          fontSize: '12px',
        },
      },
    },
  };

  return createTheme(themeOptions) as CustomTheme;
};

export default theme;

