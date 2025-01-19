"use client";
import { Button, Modal, Typography } from "componentsla";
import { useState } from "react";
import Create from "./Create";

export default function Header() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className="flex w-full justify-between px-2 py-4 font-bold">
        <Typography variant="h3" text="h3">
          Menus
        </Typography>

        <Button
          className="bg-blue-700 text-white"
          onClick={() => setModal(true)}
        >
          Crear
        </Button>
      </header>
      <Create modal={modal} setModal={setModal} />
    </>
  );
}
