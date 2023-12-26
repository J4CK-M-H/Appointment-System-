import { useContext, useEffect, useState } from "react";
import DoctorContext from "../../context/DoctorContext";
import { Spinner } from "../../components/Spinner";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaFilter } from "react-icons/fa";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

export const Doctors = () => {
  const { obtener_doctores, loadDoctores, setLoadDoctores } = useContext(DoctorContext);


  const [loading, setLoading] = useState(true);
  const [doctoresData, setDoctoresData] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    let data = async () => {
      setLoading(true);
      let data = await obtener_doctores();
      setDoctoresData(data);
      setLoading(false);
    };

    data();

    return () => {
      // Recomendable usar el clean up para devolver el load en true para evitar cargas antes de tiempo
      setLoadDoctores(true);
      console.log('Componente desmontado');
      setDoctoresData([]);
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

  if (loadDoctores) {
    return <Spinner />;
  }

  console.log(doctoresData)
  return (
    <div>
      <Card>
        <DataTable
          className="p-0 m-0"
          paginator
          value={doctoresData}
          scrollable
          dataKey="id"
          filters={filters}
          // loading={loadDoctores}
          showGridlines
          globalFilterFields={["nombre", "apellido", "Especialidad.especialidad"]}
          header={header}
          emptyMessage="No hay resultados"
          rows={5}
          rowsPerPageOptions={[5, 10]}
        >
          <Column field="nombre" header="Nombre"></Column>
          <Column field="apellido" header="Apellido"></Column>
          <Column field="Especialidad.especialidad" header="Especialidad"></Column>
        </DataTable>
      </Card>
    </div>
  );
};
