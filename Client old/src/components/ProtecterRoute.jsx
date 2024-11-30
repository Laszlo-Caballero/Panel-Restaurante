import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, deleteUser } from "context/feature/userSlice";
import { setLoading } from "context/feature/loadingSlice";
import { setAutenticate } from "context/feature/autenticateSlice";
import axios from "src/utils/axios";
import Cookies from "js-cookie";

export default function ProtecterRoute({ children }) {
  const cookie = Cookies.get();
  const dispatch = useDispatch();
  const token = cookie.token || "";
  const isAutenticate = useSelector((state) => state.autenticate);
  const isLoading = useSelector((state) => state.loading);
  if (token == "") {
    return <Navigate to="/" />;
  }
  useEffect(() => {
    axios
      .get("/users/validate")
      .then((response) => {
        dispatch(deleteUser());
        dispatch(setUser(response.data));
        dispatch(setLoading(false));
        dispatch(setAutenticate(true));
      })
      .catch((error) => {
        dispatch(deleteUser());
        dispatch(setLoading(false));
        dispatch(setAutenticate(false));
        console.log(error);
      });
  }, []);

  if (isLoading) return <h1>Cargando</h1>;
  if (!isLoading && !isAutenticate) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
}
