"use client";
import { useUser } from "@/Context/UserContext";
import { Typography } from "componentsla";
import React from "react";

export default function Home() {
  const { initialState } = useUser();
  return (
    <div>
      <Typography variant="h3" text="h3">
        Bienvenido
      </Typography>
      <Typography variant="h4" text="h4" className="py-2">
        {initialState.user.nombre.toUpperCase()}, Elija una opcion del menu
      </Typography>
    </div>
  );
}
