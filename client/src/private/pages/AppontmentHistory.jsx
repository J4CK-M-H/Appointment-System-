import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useContext, useEffect, useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import DoctorContext from "../../context/DoctorContext";

export const AppontmentHistory = () => {

  const { setLoadDoctores, loadDoctores } =useContext(DoctorContext);

  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  let registros = [
    { id: 1, doctor: "Doctor Malito", paciente: "Pipo", fecha: "15/10/2023" },
    { id: 2, doctor: "Doctor Tv", paciente: "Jack", fecha: "10/08/2023" },
    { id: 3, doctor: "Doctor Malito", paciente: "Pipo", fecha: "15/10/2023" },
    { id: 4, doctor: "Doctor Malito", paciente: "Pipo", fecha: "15/10/2023" },
    { id: 5, doctor: "Doctor Malito", paciente: "Pipo", fecha: "15/10/2023" },
    { id: 6, doctor: "Doctor Malito", paciente: "Pipo", fecha: "15/10/2023" },
    { id: 7, doctor: "Doctor Malito", paciente: "Pipo", fecha: "15/10/2023" },
    { id: 8, doctor: "Doctor Malito", paciente: "Pipo", fecha: "15/10/2023" },
    { id: 9, doctor: "Doctor Malito", paciente: "Pipo", fecha: "15/10/2023" },
  ];

  useEffect(() => {
    setDatos(registros);
    setLoading(false);

    return () => {
      setLoading(true);
    }
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const rendeHeader = () => {
    return (
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-slate-500">Historial de Citas</h2>
        <div className="p-inputgroup w-[250px]">
          <span className="p-inputgroup-addon">
            <FaFilter />
          </span>
          <InputText
            type="search"
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Filtro global"
          />
        </div>
      </div>
    );
  };

  let header = rendeHeader();

  let test = () => {
    return (
      <Link to={`#`} className="bg-green-600 p-2 text-white rounded-sm">
        Ver detalle
      </Link>
    );
  };

  if(loading) return;

  console.log('Load')

  return (
    <Card>
      <DataTable
        className="p-0 m-0"
        paginator
        value={datos}
        scrollable
        // dataKey="id"
        filters={filters}
        loading={loading}
        showGridlines
        globalFilterFields={["doctor", "paciente"]}
        header={header}
        emptyMessage="No hay resultados"
        rows={5}
        rowsPerPageOptions={[5, 10]}
      >
        <Column field="fecha" header="Fecha"></Column>
        <Column field="paciente" header="Paciente"></Column>
        <Column header="Doctor" field="doctor"></Column>
        <Column header="Detalle" body={test}></Column>
      </DataTable>
    </Card>
  );
};
