// theme.js
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const config: any = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const styles: any = {
  global: (props: any) => ({
    a: {
      color: mode('brand.500', 'brand.200')(props),
      _hover: {
        textDecoration: "underline",
      },
    },
  }),
};

const overrides = {
  breakpoints,
  config,
  styles,
  colors: {
    brand: {
      50: '#ddf2ff',
      100: '#aed6ff',
      200: '#7dbaff',
      300: '#4a9fff',
      400: '#1a83ff',
      500: '#006ae6',
      600: '#0052b4',
      700: '#003b82',
      800: '#002351',
      900: '#000d21',
    },
  },
  fonts: {
    body: "'Karla', system-ui, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, Roboto ,'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

}

export default extendTheme(overrides)
