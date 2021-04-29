import React from "react";
import { Link } from "react-router-dom";
import {
  BarraHR,
  BodyHeavyP,
  BodyHeavySpan,
} from "../utils/styled_components/StyledComponents";
import { theme } from "../utils/styled_components/theme";
const BottomChangePage = ({
  message,
  changeMessage,
  linkToRegistrar,
  position,
  bottom,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "77px",
        marginTop: "40px",
        position: position,
        bottom: bottom,
      }}
    >
      {linkToRegistrar ? (
        <Link to={"/registrarse"} style={{ textDecoration: "none" }}>
          <BodyHeavyP color={theme.primaryColors.Harry}>
            {message}
            <BodyHeavySpan>{changeMessage}</BodyHeavySpan>
          </BodyHeavyP>
        </Link>
      ) : (
        <Link to={"/iniciar-sesion"} style={{ textDecoration: "none" }}>
          <BodyHeavyP color={theme.primaryColors.Harry}>
            {message}
            <BodyHeavySpan> {changeMessage}</BodyHeavySpan>
          </BodyHeavyP>
        </Link>
      )}
      <BarraHR style={{ marginTop: "43px" }} />
    </div>
  );
};

export default BottomChangePage;
