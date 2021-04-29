import styled from "styled-components";
import { NavLink } from "react-router-dom";

/***Fonts***/
const querys = {
  desktopMQ: "@media(min-width:1000px)",
};
export const SHeavyH3 = styled.h3`
  font-weight: ${(props) => props.theme.subHeaderFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.subHeaderFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.subHeaderFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.primaryColors.Hermione};
`;
export const SLightH3 = styled.h3`
  text-align: ${(props) => props.center && "center"};
  font-weight: ${(props) => props.theme.subHeaderFontProps.light.fontWeight};
  line-height: ${(props) => props.theme.subHeaderFontProps.light.lineHeight};
  font-size: ${(props) => props.theme.subHeaderFontProps.light.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : props.theme.primaryColors.Hermione};
`;
export const DHeavyH2 = styled.h2`
  font-weight: ${(props) => props.theme.displayFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.displayFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.displayFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : (props) => props.theme.primaryColors.Hermione};
`;
export const HHeavyH2 = styled.h2`
  width: 100%;
  text-align: ${(props) => props.center && "center"};
  font-weight: ${(props) => props.theme.headlineFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.headlineFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.headlineFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : (props) => props.theme.primaryColors.Hermione};
`;

export const THeavyH2 = styled.h2`
  width: 100%;
  text-align: ${(props) => props.center && "center"};
  font-weight: ${(props) => props.theme.titleFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.titleFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.titleFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : (props) => props.theme.primaryColors.Hermione};
`;
export const BodyHeavyP = styled.p`
  font-weight: ${(props) => props.theme.bodyFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.bodyFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.bodyFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : props.theme.primaryColors.Hermione};
`;
export const BodyHeavySpan = styled.span`
  width: 100%;
  text-align: ${(props) => props.align && props.align};

  font-weight: ${(props) => props.theme.bodyFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.bodyFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.bodyFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : props.theme.primaryColors.Hermione};
`;
export const BHProviderSpan = styled(BodyHeavySpan)`
  display: inline;
  margin: 4px 0 0 4px;
  ${querys.desktopMQ} {
    color: ${(props) => props.theme.primaryColors.Harry};
    display: none;
  }
`;

export const BodyHeavylabel = styled.label`
  text-align: ${(props) => props.align && props.align};

  width: 100%;
  font-weight: ${(props) => props.theme.bodyFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.bodyFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.bodyFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : props.theme.primaryColors.Hermione};
`;
export const CaptionLightlabel = styled.label`
  font-weight: ${(props) => props.theme.captionFontProps.light.fontWeight};
  line-height: ${(props) => props.theme.captionFontProps.light.lineHeight};
  font-size: ${(props) => props.theme.captionFontProps.light.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : props.theme.primaryColors.Hermione};
`;
export const BodyHeavyLink = styled(NavLink)`
  font-weight: ${(props) => props.theme.bodyFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.bodyFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.bodyFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
  color: ${(props) =>
    props.color ? props.color : props.theme.primaryColors.Hermione};
`;

/***Componenters***/
const BaseButton = styled.button`
  width: 327px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: ${(props) => (props.noMargin ? "0" : "7px 0 7px 0")};
  font-weight: ${(props) => props.theme.bodyFontProps.heavy.fontWeight};
  line-height: ${(props) => props.theme.bodyFontProps.heavy.lineHeight};
  font-size: ${(props) => props.theme.bodyFontProps.heavy.fontSize};
  font-family: ${(props) => props.theme.font};
`;
export const BlockButton = styled(BaseButton)`
  background-color: ${(props) => props.color && props.color};
  color: white;
  ${querys.desktopMQ} {
    width: 374px;
    background-color: ${(props) => props.theme.primaryColors.Harry};
  }
`;
export const BorderButton = styled(BaseButton)`
  border: 0.7px solid ${(props) => props.color && props.color};
  background-color: transparent;
  color: ${(props) =>
    props.color ? props.color : props.theme.primaryColors.Hermione};
  ${querys.desktopMQ} {
    width: 374px;
  }
`;
export const ProviderButton = styled(BaseButton)`
  border: 0.7px solid ${(props) => props.color && props.color};
  color: ${(props) => props.color && props.color};
  text-align: center;
  background-color: transparent;
  margin: ${(props) => (props.noMargin ? "0" : "7px 0 7px 0")};

  ${querys.desktopMQ} {
    background-color: ${(props) => props.theme.secondaryColors.Voldemort};
    border-radius: 50%;
    width: 49px;
    height: 48px;
    border: none;
  }
`;
export const ProviderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 327px;
  flex-direction: column;
  ${querys.desktopMQ} {
    flex-direction: row;
  }
`;

export const BarraHR = styled.hr`
  height: 7px;
  border-radius: 200px;
  width: 134px;
  background-color: ${(props) => props.theme.primaryColors.Harry};
  ${querys.desktopMQ} {
    display: none;
  }
`;
export const OnlyMobileDiv = styled.div`
  display: block !important;
  ${querys.desktopMQ} {
    display: none !important;
  }
`;
export const OnlyDesktopDiv = styled.div`
  display: none !important;
  ${querys.desktopMQ} {
    display: block !important;
  }
`;
export const BarraHrUpper = styled.hr`
  border: 0;
  height: 4px;
  width: 62px;
  background-color: #c7cad9;
  margin: 20px;
  border-radius: 88px;
  background-color: ${(props) => props.theme.secondaryColors.Voldemort};
`;
export const InputText = styled.input`
  border: 0.7px solid ${(props) => props.theme.secondaryColors.Voldemort};
  background-color: transparent;
  width: 327px;
  height: 48px;
  padding: 20px;
  position: relative;
  font-weight: ${(props) => props.theme.bodyFontProps.light.fontWeight};
  line-height: ${(props) => props.theme.bodyFontProps.light.lineHeight};
  font-size: ${(props) => props.theme.bodyFontProps.light.fontSize};
  font-family: ${(props) => props.theme.font};

  color: ${(props) => props.theme.secondaryColors.Severus};
  ${querys.desktopMQ} {
    width: 374px;
  }
`;
export const InputCheckbox = styled.input`
  border: 0.7px solid ${(props) => props.theme.secondaryColors.Voldemort};
  background-color: transparent;
  width: 24px;
  height: 24px;
  margin: 0 10px 0 0;
  border-radius: 2px;
`;
export const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background-color: ${(props) => props.theme.primaryColors.Hagrid};
`;
export const ModalDiv = styled.div`
  width: 100%;
  height: 25vh;
  position: fixed;
  bottom: 67px;
  z-index: 200;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  background-color: ${(props) => props.theme.secondaryColors.Dobby};
`;
export const AlertContainer = styled.div`
  width: 100vw;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 20;
  right: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #4ca484;
  .disappear {
    display: inline;
  }
  ${querys.desktopMQ} {
    top: 0;
    border-radius: 0;
    .disappear {
      display: none;
    }
  }
`;
export const ContenedorInicio = styled.div`
  background-color: ${(props) => props.theme.primaryColors.Luna};
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  ${querys.desktopMQ} {
    display: grid;
    width: 50vw;
    align-items: baseline;
  }
`;
export const ContenedorFormulario = styled.div`
  background-color: ${(props) => props.theme.primaryColors.Luna};
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${querys.desktopMQ} {
    display: grid;
    grid-template-columns: 2fr 2fr;
    width: 50vw;
    background-color: ${(props) => props.theme.secondaryColors.Dobby};
  }
`;
export const ContenedorDePagina = styled.div`
  background-color: ${(props) => props.theme.primaryColors.Luna};
  background-color: ${(props) =>
    props.white
      ? props.theme.secondaryColors.Dobby
      : props.theme.secondaryColors.Luna};
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${querys.desktopMQ} {
    display: grid;
    grid-template-columns: 2fr 2fr;
    background-color: ${(props) =>
      props.white
        ? props.theme.secondaryColors.Dobby
        : props.theme.secondaryColors.Luna};
  }
`;
