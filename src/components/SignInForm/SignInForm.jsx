import React, { useContext, useState } from "react";
import Modal from "../modal/Modal";
// import Backdrop from "../modal/Backdrop";
import {
  AlertContainer,
  BlockButton,
  BodyHeavylabel,
  BodyHeavySpan,
  BorderButton,
  HHeavyH2,
  InputText,
  OnlyDesktopDiv,
  OnlyMobileDiv,
  SHeavyH3,
  SLightH3,
} from "../../utils/styled_components/StyledComponents";
import Proovedores from "../Proovedores";
import { theme } from "../../utils/styled_components/theme";
import { ThemeProvider } from "styled-components";
import BackIcon from "../../utils/svgs/BackIcon";
import BePositiveIcon from "../../utils/svgs/bePositiveIcon";
import BottomChangePage from "../BottomChangePage";
import { AlertContext } from "../../context/alertContext";
import Backdrop from "../modal/Backdrop";
import EyeIcon from "../../utils/svgs/eyeIcon";

const SignInForm = () => {
  const { openCongrats } = useContext(AlertContext);

  const [openModal, setOpenModal] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      {openCongrats && (
        <AlertContainer>
          <SLightH3 center color={theme.secondaryColors.Dobby}>
            Felicidades te haz registrado <br className="disappear" />{" "}
            exitosamente.
          </SLightH3>
        </AlertContainer>
      )}
      {openModal && (
        <Modal>
          <Proovedores
            closeModal={() => setOpenModal(!openModal)}
          ></Proovedores>
        </Modal>
      )}
      {openModal && <Backdrop onClick={() => setOpenModal(!openModal)} />}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <OnlyMobileDiv>
          <BackIcon
            style={{ position: "absolute", top: "54px", left: "26px" }}
          />
        </OnlyMobileDiv>
        <OnlyMobileDiv>
          <BePositiveIcon />
        </OnlyMobileDiv>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ alignSelf: "start", marginTop: "30px" }}>
            <OnlyDesktopDiv>
              <HHeavyH2>Bienvenido</HHeavyH2>
            </OnlyDesktopDiv>
            <SHeavyH3>Inicie sesión para utilizar la aplicación</SHeavyH3>
          </div>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "33px",
              }}
            >
              <BodyHeavylabel color={theme.primaryColors.Harry}>
                Email/Nombre de usuario
              </BodyHeavylabel>
              <InputText placeholder="Ingrese email o nombre de usuario" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                marginTop: "16px",
                marginBottom: "13px",
              }}
            >
              <BodyHeavylabel style color={theme.primaryColors.Harry}>
                Contraseña
              </BodyHeavylabel>
              <div>
                <InputText placeholder={`Ingresa contraseña`} />
                <EyeIcon
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "32px",
                    bottom: "0",
                  }}
                ></EyeIcon>
              </div>
            </div>
            <BodyHeavySpan align="end" color={theme.primaryColors.Harry}>
              ¿Olvidaste tu contraseña?
            </BodyHeavySpan>
            <BlockButton
              style={{ marginTop: "29px" }}
              onClick={() => console.log("click")}
              color={theme.primaryColors.Hermione}
            >
              Iniciar Sesion
            </BlockButton>
            <OnlyMobileDiv>
              <BorderButton
                color={theme.primaryColors.Harry}
                onClick={() => setOpenModal(!openModal)}
              >
                Iniciar sesión con otra cuenta
              </BorderButton>
            </OnlyMobileDiv>
            <OnlyDesktopDiv>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <BodyHeavySpan align="center">
                  O inicia sesión con otra cuenta
                </BodyHeavySpan>
                <Proovedores />
              </div>
            </OnlyDesktopDiv>
          </form>
        </div>
        <BottomChangePage
          position="absolute"
          bottom="0"
          linkToRegistrar
          message="¿Eres un nuevo usuario?"
          changeMessage="Crea una cuenta"
        />
      </div>
    </ThemeProvider>
  );
};

export default SignInForm;
