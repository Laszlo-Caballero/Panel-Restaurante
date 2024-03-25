import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../context/feature/loadingAdmin";
import { setAutenticate } from "../context/feature/autenticateAdminSlice";
import axios from "../utils/axios";
import Cookies from "js-cookie";

function ProtectedAdmin({ children }) {
  const cookie = Cookies.get();
  const token = cookie.token;
  const isAutenticate = useSelector((state) => state.autenticateAdmin);
  const isLoading = useSelector((state) => state.loadingAdmin);
  const dispatch = useDispatch();
  if (!token) {
    return <Navigate to="/panel" />;
  }
  axios
    .get("/users/validateAdmin")
    .then((response) => {
      dispatch(setLoading(false));
      dispatch(setAutenticate(true));
    })
    .catch((error) => {
      dispatch(setLoading(false));
      dispatch(setAutenticate(false));
      console.log(error);
    });
  if (isLoading) return <h1>Cargando</h1>;
  if (!isLoading && !isAutenticate) return <Navigate to="/panel" />;
  return children ? children : <Outlet />;
}

export default ProtectedAdmin;
