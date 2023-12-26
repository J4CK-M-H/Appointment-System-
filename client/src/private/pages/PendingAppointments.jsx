import { useState } from "react";
import { Appointment } from "../components/Appointment";

export const PendingAppointments = () => {
  const [citas, setCitas] = useState([
    { id: 1, fecha: "04/02/2023", paciente: "Junior" },
    { id: 2, fecha: "15/05/2023", paciente: "Jack" },
    { id: 3, fecha: "20/06/2023", paciente: "Brams" },
    { id: 4, fecha: "22/06/2023", paciente: "Leon" },
    { id: 5, fecha: "04/07/2023", paciente: "Magnuson" },
  ]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {citas.map((date) => (
        <Appointment key={date.id} cita={date}/>
      ))}
    </div>
  );
};
