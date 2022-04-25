import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/autContext";
import { types } from "../../types/types";

const LoginScreen = () => {
  const navigate = useNavigate();

  const { UserDispatch } = useContext(AuthContext);

   const paramUrl = localStorage.getItem("redirect") || "/";
   console.log(paramUrl);
   

  const handdleLogin = () => {
   
    const user = { nombre: "Juan", logged: false };

    UserDispatch({ type: types.LOGIN, payload: user });
    navigate(`${paramUrl}`, {
      replace: true,
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={handdleLogin}
        className="py-3 px-5 bg-blue-500 rounded-md text-white "
      >
        entrar
      </button>
    </div>
  );
};

export default LoginScreen;
