import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LandingLayout from "../../components/LandingLayout/LandingLayout";
import * as StyledComponents from "../../utils/styled_components/StyledComponents";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/styled_components/theme";

const Registrarse = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponents.ContenedorDePagina white>
        <StyledComponents.OnlyDesktopDiv>
          <LandingLayout />
        </StyledComponents.OnlyDesktopDiv>
        <SignUpForm />
      </StyledComponents.ContenedorDePagina>
    </ThemeProvider>
  );
};

export default Registrarse;
