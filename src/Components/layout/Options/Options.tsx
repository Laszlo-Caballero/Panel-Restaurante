import React from "react";
import Logo from "@/assets/images/logo.jpg";
import Image from "next/image";
import { LinkContent } from "@/Components/ui/Link/LinkContent";
import { FaHome } from "react-icons/fa";
import { Details } from "@/Components/ui/Details/Details";
import { MdTableRestaurant } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { MdNoteAlt } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaTable } from "react-icons/fa6";

export default function Options() {
  return (
    <nav className="shadow-nav relative min-h-screen w-1/5 scroll-m-0 border-2 bg-white">
      <div className="h-full overflow-y-auto">
        <Image src={Logo} className="w-[95%]" alt="logo" />
        <LinkContent path="home" icon={<FaHome />}>
          Home
        </LinkContent>
        <LinkContent icon={<MdTableRestaurant />} path="Mesas">
          Ver Mesas
        </LinkContent>
        <LinkContent icon={<IoCreate />} path="Pedir">
          Pedir Comida
        </LinkContent>
        <LinkContent icon={<MdNoteAlt />} path="Ordenes">
          Ordenes
        </LinkContent>
        <Details icon={<MdOutlineRestaurantMenu />} title="Menu">
          <LinkContent path="catalogo">Catalogo</LinkContent>
          <LinkContent path="/panel/editar">Editar Menu</LinkContent>
        </Details>
        <Details icon={<FaTable />} title="Tablas">
          <LinkContent path="/panel/Clientes">Clientes</LinkContent>
          <LinkContent path="/panel/Ingresos">Ingresos</LinkContent>
          <LinkContent path="/panel/Facturas">Facturas</LinkContent>
          <LinkContent path="panel/Invetario">Inventario</LinkContent>
        </Details>
      </div>
    </nav>
  );
}
