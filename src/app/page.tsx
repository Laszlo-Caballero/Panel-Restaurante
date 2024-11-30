"use client";
import Image from "next/image";
import ImagenLogin from "@/assets/images/login.jpg";
import Input from "@/Components/Input/Input";
import { useLogin } from "@/hooks/useLogin";
import { FormEvent, useEffect } from "react";

export default function Home() {
  const { login, data } = useLogin();
  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    login("admin@admin.com", "1232456");
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
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
          onSubmit={formSubmit}
        >
          <Input label="Correo" />
          <Input label="Contraseña" type="password" />

          <button className="rounded-2xl bg-blue-300 px-12 py-1 text-slate-100">
            Login
          </button>
        </form>
      </article>
    </main>
  );
}
