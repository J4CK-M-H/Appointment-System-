import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { PRIVATE, PUBLIC } from "./rutas/routes";
import { GuardRoutes } from "./guard/GuardRoutes";
import { Login } from "./publico/Login";
import { NotFound } from "./publico/NotFound";
import { PrivateRoutes } from "./rutas/PrivateRoutes";
import { useContext, useState } from "react";
import AuthContext from "./context/AuthContext";
import { DoctorProvider } from "./context/DoctorContext";

function App() {
  const { auth, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) return;

  return (
    <Routes>
      {/* RUTAS PRIVADAS */}
        <Route path="/" element={<Navigate to={`${PRIVATE.PRIVATE}`} />} />
        <Route element={<GuardRoutes />}>
          <Route path={`${PRIVATE.PRIVATE}/*`} element={<PrivateRoutes />} />
        </Route>

      {/* RUTAS PUBLICAS */}
      <Route
        path={PUBLIC.LOGIN}
        element={
          auth?.usuario ? <Navigate to={`/${PRIVATE.PRIVATE}`} /> : <Login />
        }
      />
      <Route path={"not-found"} element={<NotFound />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;
