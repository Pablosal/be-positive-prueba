import React, { useState } from "react";
import * as StyledComponents from "../../utils/styled_components/StyledComponents";
import BePositiveIcon from "../../utils/svgs/bePositiveIcon";
import BePositiveLogo from "../../utils/svgs/bePositiveLogo";
import SunIcon from "../../utils/svgs/sunIcon";
import { theme } from "../../utils/styled_components/theme";
import BottomChangePage from "../../components/BottomChangePage";
import { Link } from "react-router-dom";
import Proovedores from "../Proovedores";
import Modal from "../modal/Modal";
import Backdrop from "../modal/Backdrop";
const LandingLayout = () => {
  const {
    ContenedorInicio,

    THeavyH2,
    DHeavyH2,
    OnlyDesktopDiv,
    OnlyMobileDiv,
  } = StyledComponents;
  const [openModal, setOpenModal] = useState(false);

  return (
    <ContenedorInicio>
       {openModal && (
        <Modal>
          <Proovedores
            closeModal={() => setOpenModal(!openModal)}
          ></Proovedores>
        </Modal>
      )}
      {openModal && <Backdrop onClick={() => setOpenModal(!openModal)} />}
      <>
        {" "}
        <OnlyMobileDiv>
          <Link to="/">
            <BePositiveLogo></BePositiveLogo>
          </Link>
        </OnlyMobileDiv>
        <OnlyDesktopDiv>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            <Link to="/">
              <BePositiveIcon />
            </Link>
            <div>
              <DHeavyH2
                style={{ position: "relative", marginLeft: "20px" }}
                color={theme.primaryColors.Harry}
              >
                Gestiona tus seguidores <br /> de forma segura{" "}
                <SunIcon style={{ position: "absolute" }} />
              </DHeavyH2>
            </div>
          </div>
        </OnlyDesktopDiv>
      </>
      <OnlyMobileDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <StyledComponents.SLightH3>Bienvenido!</StyledComponents.SLightH3>
            <THeavyH2>Conecta con tus seguidores</THeavyH2>
            <StyledComponents.BlockButton color={theme.primaryColors.Harry}>
              Iniciar Sesión
            </StyledComponents.BlockButton>
            <StyledComponents.BorderButton  onClick={() => setOpenModal(!openModal)}>
              Iniciar Sesión con otra cuenta
            </StyledComponents.BorderButton>
          </div>
          <OnlyMobileDiv>
            <BottomChangePage
              message="¿Eres un nuevo usuario?"
              changeMessage="Crea una cuenta"
              linkToRegistrar={true}
            />
          </OnlyMobileDiv>
        </div>
      </OnlyMobileDiv>
    </ContenedorInicio>
  );
};

export default LandingLayout;
