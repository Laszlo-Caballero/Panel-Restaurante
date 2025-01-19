import { useUser } from "@/Context/UserContext";
import React from "react";
import { MdNoteAlt } from "react-icons/md";

export default function Nav() {
  const { initialState } = useUser();
  console.log({ initialState });
  return (
    <nav className="flex w-full justify-between bg-blue-500 px-2 py-4 font-bold text-white">
      <p>Dashborad</p>

      <div className="flex items-center justify-center">
        <MdNoteAlt width={4} height={4} />
      </div>

      {/* <p>{initialState.user.nombre}</p> */}
    </nav>
  );
}
