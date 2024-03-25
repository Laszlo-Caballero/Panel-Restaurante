import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, deleteUser } from "../context/feature/userSlice";
import axios from "../utils/axios";
export default function ProtecterRoute({ children }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const [isAutenticate, setAutenticate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  if (!token) {
    return <Navigate to="/" />;
  }
  axios
    .get("/users/validate")
    .then((response) => {
      dispatch(deleteUser());
      dispatch(setUser(response.data));
      setIsLoading(false);
      setAutenticate(true);
    })
    .catch((error) => {
      dispatch(deleteUser());
      console.log(error);
    });
  if (!isLoading && !isAutenticate) return <Navigate to="/" />;
  return children ? children : <Outlet />;
}
