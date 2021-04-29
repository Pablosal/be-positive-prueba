import {  Route, Switch } from "react-router-dom";
import LandingPage from "./pages/01-LandingPage";
import IniciarSesion from "./pages/02-IniciarSesion";
import Registrarse from "./pages/03-Registrarse";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/iniciar-sesion">
          <IniciarSesion />
        </Route>
        <Route exact path="/registrarse">
          <Registrarse />
        </Route>
      </Switch>
    </>
  );
}

export default App;
