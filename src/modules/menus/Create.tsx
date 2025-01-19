import Input from "@/Components/ui/Input/Input";
import { Modal, Typography } from "componentsla";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

interface CreateProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export default function Create({ modal, setModal }: CreateProps) {
  const {
    register,
    formState: { errors },
  } = useForm<InputFood>();

  return (
    <Modal open={modal} setIsOpen={setModal} className="h-[800px] w-2/3">
      <div className="flex h-full w-full flex-col bg-blue-100 p-4">
        <nav className="col-span-2 h-auto">
          <Typography variant="h3" text="h3">
            Crear Menu
          </Typography>
        </nav>
        <div className="grid h-full grid-cols-2 gap-4">
          <div className="w-full">
            <Input
              label="Nombre"
              className="text-slate-500"
              classNameCustom={{
                label: "bg-blue-100 text-slate-200",
              }}
              error={errors.nombre?.message}
              {...register("nombre", { required: "se necesita este campo" })}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
