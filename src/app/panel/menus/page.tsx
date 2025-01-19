"use client";
import { Button, Typography } from "componentsla";
import React from "react";

export default function Menus() {
  return (
    <div className="h-full w-full">
      <header className="flex w-full justify-between px-2 py-4 font-bold">
        <Typography variant="h3" text="h3">
          Menus
        </Typography>

        <Button className="bg-blue-700 text-white">Crear</Button>
      </header>
    </div>
  );
}
