import { ThemeProvider } from "styled-components";

export const theme = {
  font: "Nunito, sans-serif",
  primaryColors: {
    Harry: "#215E99",
    Hermione: "#EC552F",
    Luna: "#FBEFEC",
    Hagrid: "rgba(0,0,0,0.8)",
  },
  secondaryColors: {
    Dobby: "#FFFFFF",
    Ron: "#FFF7ED",
    Severus: "#7F8E9D",
    Voldemort: "#C7CAD9",
  },
  displayFontProps: {
    heavy: {
      fontWeight: 800,
      fontSize: "36px",
      lineHeight: "44px",
    },
    light: {
      fontWeight: 400,
      fontSize: "36px",
      lineHeight: "44px",
    },
  },
  headlineFontProps: {
    heavy: {
      fontWeight: 800,
      fontSize: "20px",
      lineHeight: "28px",
    },
    light: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "28px",
    },
  },
  titleFontProps: {
    heavy: {
      fontWeight: 800,
      fontSize: "20px",
      lineHeight: "28px",
    },
    light: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "28px",
    },
  },
  subHeaderFontProps: {
    heavy: {
      fontWeight: 800,
      fontSize: "16px",
      lineHeight: "24px",
    },
    light: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  bodyFontProps: {
    heavy: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    light: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  captionFontProps: {
    heavy: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
    },
    light: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  smallFontProps: {
    heavy: {
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "14px",
    },
    light: {
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "14px",
    },
  },
};
const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
