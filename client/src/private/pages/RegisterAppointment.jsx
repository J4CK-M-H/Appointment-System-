import { InputText } from "primereact/inputtext";
import { HiMiniIdentification } from "react-icons/hi2";
import { PiTextAaBold } from "react-icons/pi";
import { InputNumber } from "primereact/inputnumber";
import { FaBirthdayCake } from "react-icons/fa";
import { InputTextarea } from "primereact/inputtextarea";
import { MdOutlineDateRange, MdHealthAndSafety } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import { IoMdTime } from "react-icons/io";
import { Dropdown } from "primereact/dropdown";
import { FaUserDoctor } from "react-icons/fa6";
import DoctorContext from "../../context/DoctorContext";

export const Appointment = () => {
  const { especialidades } = useContext(DoctorContext);

  const [fullname, setFullname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [doctors, setDoctors] = useState(null);

  const [doctorLoading, setDoctorLoading] = useState(true);

  useEffect(() => {
    // loadDoctors();

    let data = async () => {
      setDoctorLoading(true);
      let data = await especialidades();

      setDoctorLoading(false);
    };
    data();

  }, []);

  const loadDoctors = () => {
    if (selectedSpecialty !== null) {
      setDoctorLoading(false);
      // setTimeout(() => {
      // }, 2000);
    }
  };

  const specialties = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const doctorsDiponible = [
    { name: "Pepe", code: "NY" },
    { name: "Pipo", code: "RM" },
    { name: "Pupi", code: "LDN" },
    { name: "Pipi", code: "IST" },
    { name: "Pupu", code: "PRS" },
  ];

  const changeInputName = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, " ");
    setFullname(result);
  };

  const handleForm = (event) => {
    event.preventDefault();
  };

  if(doctorLoading) return;

  console.log('paso')

  return (
    <div className="flex justify-center">
      <div
        className="bg-white"
        style={{ boxShadow: "1px 1px 5px  #ccc, -1px 0 5px #ccc" }}
      >
        {/* <Card className=""> */}
        <h2 className="bg-indigo-600 text-white rounded-t-sm py-4 text-center font-bold text-2xl">
          Ficha de registro
        </h2>
        <form
          onSubmit={handleForm}
          className="w-[90%] sm:w-[600px] space-y-4 p-8"
        >
          <div className="flex gap-x-8">
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <HiMiniIdentification />
              </span>
              <InputNumber
                placeholder="N° de documento"
                useGrouping={false}
                maxLength={8}
              />
            </div>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <FaBirthdayCake />
              </span>
              <InputNumber
                placeholder="Edad"
                useGrouping={false}
                maxLength={3}
              />
            </div>
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <PiTextAaBold />
            </span>
            <InputText
              placeholder="Nombres y Apellidos"
              type="text"
              value={fullname}
              onChange={changeInputName}
            />
          </div>

          <div className="flex gap-x-8">
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <MdOutlineDateRange />
              </span>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                placeholder="Fecha de cita"
                dateFormat="dd/mm/yy"
              />
            </div>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <IoMdTime />
              </span>
              <Calendar
                id="calendar-timeonly"
                value={time}
                onChange={(e) => setTime(e.value)}
                timeOnly
                placeholder="Hora"
              />
            </div>
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <MdHealthAndSafety />
            </span>
            <Dropdown
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.value)}
              options={specialties}
              optionLabel="name"
              placeholder="Selecciona la especialidad"
              className="w-full md:w-14rem"
            />
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <FaUserDoctor />
            </span>
            <Dropdown
              value={doctors}
              onChange={(e) => setDoctors(e.value)}
              options={doctorsDiponible}
              optionLabel="name"
              placeholder="Selecciona el doctorin"
              disabled={doctorLoading}
              className="w-full md:w-14rem"
            />
          </div>

          {/* <div className="p-inputgroup flex-1">
            <InputTextarea
              id="description"
              autoResize={true}
              placeholder="Sintomas"
              className="rounded-md"
              rows={5}
              cols={30}
            />
          </div> */}

          <button className="bg-indigo-800 w-full py-3 rounded-sm text-white">
            Registrar cita
          </button>
        </form>
        {/* </Card> */}
      </div>
    </div>
  );
};
