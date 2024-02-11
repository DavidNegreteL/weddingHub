import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    singleText?: PaletteColorOptions;
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    sizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    spacings: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    borderRadius: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }

  interface ThemeOptions {
    sizes?: {
      xs?: number;
      sm?: number;
      md?: number;
      lg?: number;
      xl?: number;
    };
    spacings: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    borderRadius: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
const theme = createTheme({
  typography: {
    fontFamily: ["Great Vibes", "Montserrat", "Dancing Script"].join(","),
    fontSize: 16,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#C3937C",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#C3937C",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#C3937C",
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#C3937C",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#C3937C",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#C3937C",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: "normal",
      color: "#787878",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: "normal",
      color: "#787878",
    },
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  },
  spacings: {
    xs: 4,
    sm: 10,
    md: 20,
    lg: 40,
    xl: 80,
  },
  sizes: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  breakpoints: {
    values: {
      xs: 240,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  borderRadius: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 80,
  },
  palette: {
    primary: {
      main: "#C3937C",
    },
    secondary: {
      main: "#EAD9C9",
    },
    singleText: {
      main: "#787878",
    },
    white: {
      main: "#FFFFFF",
    },
    black: {
      main: "#000000",
    },
  },
});

export default theme;
