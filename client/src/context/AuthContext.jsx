import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loadingAuth, setloadingAuth] = useState(true);
  const [auth, setAuth] = useState({});
  
  const navigate = useNavigate();

  useEffect(() => {
    const Authenticate = async () => {
      setloadingAuth(true);
      const token = JSON.parse(localStorage.getItem("user"));
      if(!token) {
        setloadingAuth(false);
        return;
      }

      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      };

      try {
        const { data } = await axios(
          "http://localhost:3500/api/auth/session",
          config
        );
        setAuth(data);
      } catch (error) {
        console.log(error);
      } finally {
        setloadingAuth(false);
      }
    };

    Authenticate()
  }, []);

  const closeSession = () => {
    setAuth();
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{
        loadingAuth,
        setloadingAuth,
        closeSession,
        auth,
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
