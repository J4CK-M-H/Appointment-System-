import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export const NotFound = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <div className="h-screen flex justify-center items-center bg-[url('https://img.freepik.com/fotos-premium/astronauta-perdido-espacio_186382-5566.jpg')] bg-contain bg-center">
      <div className="px-10 h-[500px] flex flex-col items-center justify-center text-white">
        <p className="text-5xl mb-16 font-extrabold text-white">404</p>
        <p className="text-3xl font-bold mb-10">Pagina no encontrada</p>
        <p className="text-2xl mb-10">
          Losiento, no se pudo encontrar la pagina indicada
        </p>
        <div>
          <button onClick={back} className="flex bg-indigo-900 text-white py-2 px-4 rounded-sm items-center gap-2">
            <FaArrowLeftLong />
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
