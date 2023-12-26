import { Divider } from "primereact/divider";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
import { PRIVATE } from "../../rutas/routes";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export const Drawer = ({ visible, setVisible }) => {
  const { auth, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) return;

  const customHeader = (
    <React.Fragment>
      <h2 style={{ marginBottom: 0 }}>Sidebar</h2>
    </React.Fragment>
  );

  return (
    <Sidebar
      visible={visible}
      onHide={() => setVisible(false)}
      header={customHeader}
    >
      <div>
        <Divider />
        <Link
          onClick={() => setVisible(false)}
          to={`${PRIVATE.HOME}`}
          className="block py-3 px-6"
        >
          Home
        </Link>
        <Divider />
        <Link
          onClick={() => setVisible(false)}
          to={`${PRIVATE.PENDIENTES}`}
          className="block py-3 px-6"
        >
          Citas Programadas
        </Link>
        <Divider />
        {
          (auth?.rol === 'ADMIN' || auth.rol === 'DOCTOR') &&
          <Link
            onClick={() => setVisible(false)}
            to={`${PRIVATE.REGISTRAR_CITA}`}
            className="block py-3 px-6"
          >
            Registrar Cita
          </Link>
        }
        <Divider />
        {auth.rol === "ADMIN" && (
          <Link
            onClick={() => setVisible(false)}
            to={`${PRIVATE.HISTORIAL_CITAS}`}
            className="block py-3 px-6"
          >
            Historial Citas
          </Link>
        )}
        {(auth.rol === "ADMIN" || auth.rol === "DOCTOR") && (
          <>
            <Divider />
            <Link
              onClick={() => setVisible(false)}
              to={`${PRIVATE.ADD_USER}`}
              className="block py-3 px-6"
            >
              Usuarios
            </Link>
            <Divider />
          </>
        )}
        {(auth.rol === "ADMIN" || auth.rol === "DOCTOR") && (
          <>
            <Link
              onClick={() => setVisible(false)}
              to={`${PRIVATE.DOCTORES}`}
              className="block py-3 px-6"
            >
              Doctores
            </Link>
            <Divider />
          </>
        )}
      </div>
    </Sidebar>
  );
};
