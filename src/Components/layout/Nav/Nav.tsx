import { useUser } from "@/Context/UserContext";
import React from "react";
import { MdNoteAlt } from "react-icons/md";

export default function Nav() {
  const { initialState } = useUser();

  return (
    <nav className="w-full bg-blue-200">
      <p>Dashborad</p>
      <MdNoteAlt />
      <p>{initialState.user.nombre}</p>
    </nav>
  );
}
