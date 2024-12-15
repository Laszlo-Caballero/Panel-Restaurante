"use client";
import Image from "next/image";
import ImagenLogin from "@/assets/images/login.jpg";
import Input from "@/Components/ui/Input/Input";
import { FormEvent, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { user } from "@/interfaces/types";
import Loader from "@/Components/ui/loader/Loader";
import { redirect } from "next/navigation";
import { useUser } from "@/Context/UserContext";

export default function Home() {
  const { login, loading, error } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<user>();

  const onSubmit: SubmitHandler<user> = (data) => {
    login(data.email, data.password);
  };

  useEffect(() => {
    if (error == 201) {
      redirect("/panel/home");
    }
  }, [loading]);

  return (
    <>
      <main className="flex h-svh w-full">
        <div className="h-full w-1/2">
          <Image
            src={ImagenLogin}
            alt="Imagen Login"
            className="h-full object-cover object-center"
          />
        </div>
        <article className="flex h-full w-1/2 flex-col items-center justify-center px-12">
          <header className="py-10">
            <h2 className="text-4xl font-semibold">Login</h2>
          </header>
          <form
            className="flex w-full flex-col items-center gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label="Correo"
              error={errors.email?.message}
              {...register("email", {
                required: "se necesita este campo",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Formato de correo no valido",
                },
              })}
            />
            <Input
              label="Contraseña"
              error={errors.password?.message}
              type="password"
              {...register("password", {
                required: "Se necesita este campo",
              })}
            />

            <button className="rounded-2xl bg-blue-300 px-12 py-1 text-slate-100">
              Login
            </button>
          </form>
        </article>
      </main>

      {loading && <Loader />}
    </>
  );
}
