import React, {  useState } from "react";
import {
  BlockButton,
  BodyHeavylabel,
  BodyHeavySpan,
  BorderButton,
  HHeavyH2,
  InputCheckbox,
  InputText,
  OnlyDesktopDiv,
  OnlyMobileDiv,
  SHeavyH3,
} from "../../utils/styled_components/StyledComponents";
import Proovedores from "../Proovedores";
import { theme } from "../../utils/styled_components/theme";
import { ThemeProvider } from "styled-components";
import BackIcon from "../../utils/svgs/BackIcon";
import BePositiveIcon from "../../utils/svgs/bePositiveIcon";
import BottomChangePage from "../BottomChangePage";
import Modal from "../modal/Modal";
import Backdrop from "../modal/Backdrop";
import EyeIcon from "../../utils/svgs/eyeIcon";
const SignUpForm = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ThemeProvider theme={theme}>
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
          position: "relative",
        }}
      >
        <OnlyMobileDiv>
          <BackIcon
            style={{ position: "absolute", top: "31px", left: "-190px" }}
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
              <HHeavyH2>Registrarse en be positive</HHeavyH2>
            </OnlyDesktopDiv>
            <OnlyMobileDiv>
              <SHeavyH3>Registrarse en be positive</SHeavyH3>
            </OnlyMobileDiv>
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
                marginTop: "16px",
              }}
            >
              <BodyHeavylabel color={theme.primaryColors.Harry}>
                Nombre
              </BodyHeavylabel>
              <InputText placeholder="Ingrese nombre" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                marginTop: "16px",
              }}
            >
              <BodyHeavylabel color={theme.primaryColors.Harry}>
                Contraseña
              </BodyHeavylabel>
              <InputText placeholder="Ingresa contraseña" />{" "}
              <EyeIcon
                style={{
                  position: "absolute",
                  right: "14px",
                  bottom: "13px",
                }}
              ></EyeIcon>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginTop: "24px",
                marginBottom: "25px",
              }}
            >
              <InputCheckbox />
              <BodyHeavylabel color={theme.primaryColors.Hermione}>
                Aceptar tèrminos y condiciones
              </BodyHeavylabel>
            </div>

            <BlockButton color={theme.primaryColors.Hermione}>
              Crear una cuenta
            </BlockButton>
            <OnlyMobileDiv>
              <BorderButton
                color={theme.primaryColors.Harry}
                onClick={() => setOpenModal(!openModal)}
              >
                Registrarse con otra cuenta
              </BorderButton>
            </OnlyMobileDiv>
            <OnlyDesktopDiv>
              <BodyHeavySpan align="center">
                O inicia sesión con otra cuenta
              </BodyHeavySpan>
              <Proovedores registroExitoso={() => setOpenModal(!openModal)} />
            </OnlyDesktopDiv>
          </form>
        </div>
        <BottomChangePage
          message="¿Ya eres usuario?"
          changeMessage="Ingresar"
        />
      </div>
    </ThemeProvider>
  );
};

export default SignUpForm;
