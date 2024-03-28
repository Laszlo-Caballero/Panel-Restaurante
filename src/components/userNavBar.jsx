import { useSelector } from "react-redux";
import iconUser from "../assets/userIcon.webp";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { openClose } from "../context/feature/navSlice";
import { resetAdmin } from "../context/feature/adminSlice";
import { resetAuthAdmin } from "../context/feature/autenticateAdminSlice";
import { resetAuth } from "../context/feature/autenticateSlice";
import { resetToken } from "../context/feature/cookieSlice";
import { resetLoadAdmin } from "../context/feature/loadingAdmin";
import { resetLoad } from "../context/feature/loadingSlice";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function UserNavBar() {
  const value = useSelector((state) => state.user);
  const user = value[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  return (
    <nav className="px-4 py-5 flex items-center justify-between w-full shadow-user bg-white ">
      <MenuIcon
        sx={{ fontSize: 32 }}
        className="cursor-pointer"
        onClick={() => {
          dispatch(openClose());
        }}
      />
      <div className="flex items-center w-1/6 justify-around relative">
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 35 }} />
        <img
          src={
            user &&
            (user.imagen != null
              ? `http://localhost:3000/${user.imagen}.webp`
              : iconUser)
          }
          alt="user-icon"
          className="w-[40px] h-[40px] rounded-full cursor-pointer"
          onClick={() => {
            setMenu((menu) => !menu);
          }}
        />
        {menu && (
          <section className="absolute top-[180%] bg-white flex flex-col gap-y-7 border ">
            <p className="border-b py-4 pr-8 pl-2 font-WorkSansmedium text-nepal-800 text-nowrap">
              Bienvenido, {user.nombre}
            </p>
            <Link to="profile" className="flex items-center gap-x-2 pl-2">
              <PermIdentityOutlinedIcon /> Perfil
            </Link>
            <Link to="settings" className="flex items-center gap-x-2 pl-2">
              <SettingsOutlinedIcon /> Configurar Cuenta
            </Link>
            {user.tipo == "admin" && (
              <Link to="register" className="flex items-center gap-x-2 pl-2">
                <PersonAddAltOutlinedIcon />
                Registrar Usuario
              </Link>
            )}
            <button
              className="text-start pt-4 mb-4 flex items-center gap-x-2 border-t pl-2"
              onClick={() => {
                Cookies.remove("token");
                dispatch(resetAdmin());
                dispatch(resetAuthAdmin());
                dispatch(resetAuth());
                dispatch(resetToken());
                dispatch(resetLoadAdmin());
                dispatch(resetLoad());
                navigate("/");
              }}
            >
              <PowerSettingsNewOutlinedIcon />
              Salir
            </button>
          </section>
        )}
      </div>
    </nav>
  );
}
