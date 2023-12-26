import { Link } from "react-router-dom";
import { PRIVATE } from "../../rutas/routes";
import { Card } from "primereact/card";

export const Appointment = ({ cita }) => {
  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <p className="font-bold">
            Fecha: <span className="font-normal">{cita.fecha}</span>
          </p>
          <p className="font-bold">
            Paciente: <span className="font-normal">{cita.paciente}</span>{" "}
          </p>
        </div>
        <Link
          to={`/${PRIVATE.PRIVATE}/${PRIVATE.CITA_DETALLE}/4`}
          className="bg-green-600 py-2 px-6 flex items-center text-center text-white font-medium rounded-sm "
        >
          Detalle
        </Link>
      </div>
    </Card>
  );
};
