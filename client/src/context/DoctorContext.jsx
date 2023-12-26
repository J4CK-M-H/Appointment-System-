import axios from "axios";
import { createContext, useState } from "react";

const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
  const [loadDoctores, setLoadDoctores] = useState(true);

  const obtener_doctores = async () => {
    setLoadDoctores(true);
    try {
      let { data } = await axios.get(
        "http://localhost:3500/api/doctor/get_doctors"
      );
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoadDoctores(false);
      }, 700);
    }
  };

  const especialidades = async () => {
    try {
      let { data } = await axios.get(
        "http://localhost:3500/api/doctor/get-specialities"
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DoctorContext.Provider
      value={{
        loadDoctores,
        setLoadDoctores,
        obtener_doctores,
        especialidades,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export { DoctorProvider };

export default DoctorContext;
