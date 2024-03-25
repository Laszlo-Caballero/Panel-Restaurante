import React from "react";
import { useSelector } from "react-redux";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import iconUser from "../assets/userIcon.webp";
export default function UserNavBar() {
  const user = useSelector((state) => state.user)[0];
  console.log(user);
  return (
    <div className="p-2 flex items-center gap-5 w-full">
      <img
        src={
          user.imagen != null
            ? `http://localhost:3000/${user.imagen}.webp`
            : iconUser
        }
        alt="user-icon"
        className="w-[70px] h-[70px] rounded-full"
      />
      <p className="font-WorkSansregular cursor-pointer">
        {user.nombre} <ArrowRightIcon />
      </p>
    </div>
  );
}
