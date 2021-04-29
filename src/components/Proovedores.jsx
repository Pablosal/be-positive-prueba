import React from "react";
import GoogleIcon from "../utils/svgs/googleIcon";
import FacebookIcon from "../utils/svgs/facebookIcon";
import AppleIcon from "../utils/svgs/appleIcon";
import {
  BarraHrUpper,
  OnlyMobileDiv,
  ProviderWrapper,
  THeavyH2,
} from "../utils/styled_components/StyledComponents";
import ProviderContinue from "./modal/ProviderContinue";
import IconX from "../utils/svgs/IconX";
import { theme } from "../utils/styled_components/theme";

const Proovedores = ({ registroExitoso, closeModal }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: `${theme.secondaryColors.Dobby}`,
          borderTopLeftRadius: "22px",
          borderTopRightRadius: "22px",
        }}
      >
        <OnlyMobileDiv>
          <BarraHrUpper />
        </OnlyMobileDiv>
        <OnlyMobileDiv>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "327px",
            }}
          >
            <IconX onClick={closeModal} />
            <THeavyH2 center color={theme.primaryColors.Harry}>
              Selecciona tu cuenta
            </THeavyH2>
          </div>
        </OnlyMobileDiv>
        <ProviderWrapper>
          <ProviderContinue
            text="Continua con Apple ID"
            Component={AppleIcon}
            registroExitoso={registroExitoso}
          ></ProviderContinue>
          <ProviderContinue
            text="Continua con Facebook"
            Component={FacebookIcon}
            registroExitoso={registroExitoso}
          ></ProviderContinue>
          <ProviderContinue
            text="Continua con Google"
            Component={GoogleIcon}
            registroExitoso={registroExitoso}
          ></ProviderContinue>
        </ProviderWrapper>
      </div>
    </>
  );
};

export default Proovedores;
