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
    <nav className="shadow-nav relative min-h-screen w-[12%] scroll-m-0 border-2 bg-white">
      <div className="h-full overflow-y-auto">
        <Image src={Logo} className="w-[95%]" alt="logo" />
        <LinkContent path="home" icon={<FaHome />}>
          Home
        </LinkContent>
        <LinkContent icon={<MdTableRestaurant />} path="mesas">
          Ver Mesas
        </LinkContent>
        <LinkContent icon={<IoCreate />} path="pedir">
          Pedir Comida
        </LinkContent>
        <LinkContent icon={<MdNoteAlt />} path="ordenes">
          Ordenes
        </LinkContent>
        <Details icon={<MdOutlineRestaurantMenu />} title="Menu">
          <LinkContent path="catalogo">Catalogo</LinkContent>
          <LinkContent path="menus">Tabla Menu</LinkContent>
        </Details>
        <Details icon={<FaTable />} title="Tablas">
          <LinkContent path="clientes">Clientes</LinkContent>
          <LinkContent path="ingresos">Ingresos</LinkContent>
          <LinkContent path="facturas">Facturas</LinkContent>
          <LinkContent path="invetario">Inventario</LinkContent>
        </Details>
      </div>
    </nav>
  );
}
