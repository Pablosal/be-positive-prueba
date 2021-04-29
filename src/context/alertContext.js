import React, { createContext, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export const AlertContext = createContext();

const AlertProvider = (props) => {
  const [openCongrats, setOpenCongrats] = useState(false);
  const history = useHistory();
  const registroExitoso = useCallback(() => {
    setOpenCongrats(true);
    history.push("/iniciar-sesion");
  }, [history]);

  useEffect(() => {
    const eventoDeAlerta = setTimeout(() => {
      setOpenCongrats(false);
    }, 5000);
    return () => clearTimeout(eventoDeAlerta);
  }, [registroExitoso]);
  return (
    <AlertContext.Provider value={{ openCongrats, registroExitoso }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
