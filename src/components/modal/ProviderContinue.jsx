import React, { useContext } from "react";
import { AlertContext } from "../../context/alertContext";
import {
  BHProviderSpan,
  ProviderButton,
} from "../../utils/styled_components/StyledComponents";
import { theme } from "../../utils/styled_components/theme";

const ProviderContinue = ({ text, Component }) => {
  const {  registroExitoso } = useContext(AlertContext);

  return (
    <ProviderButton onClick={registroExitoso} color={theme.primaryColors.Harry}>
      <Component />
      <BHProviderSpan>{text}</BHProviderSpan>
    </ProviderButton>
  );
};

export default ProviderContinue;
