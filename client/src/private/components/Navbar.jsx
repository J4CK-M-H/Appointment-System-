import { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import AuthContext from "../../context/AuthContext";
export const Navbar = ({ setVisible }) => {

  const { closeSession } = useContext(AuthContext);

  return (
    <div className="h-20 bg-[#31304D] flex items-center justify-between px-8 fixed w-full z-10">
      <button className="text-white w-[40px] h-[40px] flex justify-center items-center bg-black"
        onClick={() => setVisible(true)}
      >
      <IoMenu size={30} />
      </button>
      <button className="text-white" onClick={closeSession}>Logout</button>
    </div>
  )
}
