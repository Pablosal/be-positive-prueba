import React from "react";
import { primaryColors } from "../../utils/styleGuide/ColorGuide";
import { TitleHeavy } from "../../utils/styleGuide/FontGuide";
import {
  BarraHrUpper,
} from "../../utils/styledComponents/ComponentesCompartidos";
import IconX from "../../utils/svgs/IconX";

import Proovedores from "./Proovedores";
const InicioSesionServicios = ({ closeMenu, registroExitoso }) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <BarraHrUpper />
      <header
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          margin: "20px",
        }}
      >
        <IconX onClick={closeMenu} />
        <TitleHeavy style={{ marginLeft: "20px" }} color={primaryColors.Harry}>
          Selecciona tu cuenta
        </TitleHeavy>
      </header>
      <main>
        <Proovedores registroExitoso={registroExitoso} />
      </main>
    </section>
  );
};

export default InicioSesionServicios;
