import Logo from "./../images/logo.jpg";
import { Box, Content, Links } from "./Details";
import Dash from "./../images/dash.svg?react";
import Menu from "./../images/box.svg?react";
import Table from "./../images/tables.svg?react";
import CreateIcon from "@mui/icons-material/Create";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TableBarIcon from "@mui/icons-material/TableBar";
function NavBar() {
  return (
    <nav className="w-1/5 border-2 min-h-screen relative bg-white shadow-nav">
      <div className="fixed w-1/6">
        <img src={Logo} className="w-[95%]" alt="logo" />
        <div className="h-auto flex flex-col items-center">
          <Links icon={<Dash />} path="/panel">
            DashBoard
          </Links>
          <Links icon={<TableBarIcon />} path="/panel/Mesas">
            Ver Mesas
          </Links>
          <Links icon={<CreateIcon />} path="/panel/Pedir">
            Pedir Comida
          </Links>
          <Links icon={<AssignmentIcon />} path="/panel/Ordenes">
            Ordenes
          </Links>
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
