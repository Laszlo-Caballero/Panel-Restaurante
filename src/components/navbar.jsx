import Logo from "./../images/logo.jpg";
import { Box, Content } from "./Details";
import Dash from "./../images/dash.svg?react";
import Menu from "./../images/box.svg?react";
import Table from "./../images/tables.svg?react";
import { Link } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";

function NavBar() {
  return (
    <nav className="w-1/5 border-2 min-h-screen relative bg-white shadow-nav">
      <div className="fixed w-1/6">
        <img src={Logo} className="w-[95%]" alt="logo" />
        <div className="h-auto flex flex-col items-center">
          <Link
            className="py-4 flex w-full px-4 items-center gap-3 cursor-pointer"
            to="/panel"
          >
            <Dash /> dashboard
          </Link>
          <Link
            className="py-4 flex w-full px-3 items-center gap-3 cursor-pointer"
            to="/panel/Ordenes"
          >
            <AssignmentIcon /> Ordenes
          </Link>
          <Box icon={<Menu />} title="Menu">
            <Content path="/panel/catalogo">Catalogo</Content>
            <Content path="/panel/editar">Editar Menu</Content>
          </Box>
          <Box icon={<Table />} title="Tablas">
            <Content path="/panel/Clientes">Clientes</Content>
            <Content path="/panel/Ingresos">Ingresos</Content>
            <Content path="/panel/Facturas">Facturas</Content>
            <Content path="panel/Invetario">Inventario</Content>
          </Box>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
