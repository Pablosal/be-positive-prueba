import React from "react";
import * as StyledComponents from "../../utils/styled_components/StyledComponents";

import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/styled_components/theme";
import SignInForm from "../../components/SignInForm/SignInForm";
import LandingLayout from "../../components/LandingLayout/LandingLayout";
const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponents.ContenedorDePagina white>
        <LandingLayout />
        <StyledComponents.OnlyDesktopDiv>
          <SignInForm />
        </StyledComponents.OnlyDesktopDiv>
      </StyledComponents.ContenedorDePagina>
    </ThemeProvider>
  );
};

export default LandingPage;
