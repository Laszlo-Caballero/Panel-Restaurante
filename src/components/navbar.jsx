import Logo from "./../images/logo.jpg";
import { Box, Content } from "./Details";
import Dash from "./../images/dash.svg?react";
import Menu from "./../images/box.svg?react";
import Table from "./../images/tables.svg?react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="w-1/6 border-2 min-h-screen relative border-r-nepal-100 bg-white">
      <div className="fixed w-1/6">
        <img src={Logo} className="w-[95%]" alt="logo" />
        <div className="h-auto flex flex-col items-center">
          <Link
            className="py-4 flex w-full px-4 items-center gap-3 cursor-pointer"
            to="/"
          >
            <Dash /> dashboard
          </Link>
          <Box icon={<Menu />} title="Menu">
            <Content path="/catalogo">Catalogo</Content>
            <Content path="/editar">Editar Menu</Content>
          </Box>
          <Box icon={<Table />} title="Tablas">
            <Content path="/Clientes">Clientes</Content>
            <Content path="/Ingresos">Ingresos</Content>
            <Content path="/Facturas">Facturas</Content>
            <Content path="/Invetario">Inventario</Content>
          </Box>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
