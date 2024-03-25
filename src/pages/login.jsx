import Logo from "./../images/login.webp";
import { InputForm, LabelForm, Error, Loader } from "../components/forms/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "../utils/axios";
import { Navigate, redirect } from "react-router-dom";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loader, setLodaer] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const onSubmit = handleSubmit((data) => {
    setLodaer(true);
    axios
      .post("/users/login", data)
      .then((response) => {
        console.log("autenticado");
        console.log(response.data);
        setLodaer(false);
        setIsLogin(true);
      })
      .catch((error) => {
        setLodaer(false);
        setIsLogin(false);
        console.log(error);
      });
  });

  return (
    <>
      <div className="flex w-full h-full overflow-hidden font-WorkSansregular">
        <img alt="login-foto" src={Logo} className="h-screen" />
        <main className="w-full flex flex-col items-center justify-center">
          <section className="flex flex-col gap-y-2">
            <h1 className="text-4xl font-WorkSansmedium">Login</h1>
            <h3>Ingrese las credenciales cedidas para su registro</h3>
            <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
              <LabelForm name="Email" title="Ingrese su Email" />
              <InputForm
                name="Email"
                type="email"
                require={register("email", {
                  required: {
                    value: true,
                    message: "Email requerido",
                  },
                  validate: (value) => {
                    return (
                      value.includes("@") || "Este debe ser un correo valido"
                    );
                  },
                })}
              />
              {errors.email && <Error error={errors.email.message} />}
              <LabelForm name="Password" title="Ingrese su Contraseña" />
              <InputForm
                name="Password"
                type="password"
                require={register("contraseña", {
                  required: {
                    value: true,
                    message: "Contraseña requerida",
                  },
                })}
              />
              {errors.contraseña && <Error error={errors.contraseña.message} />}
              <button
                type="submit"
                className="py-2 px-8 border rounded-md bg-nepal-500 text-nepal-100 font-WorkSansmedium"
              >
                Entrar
              </button>
            </form>
          </section>
        </main>
      </div>
      {loader && <Loader />}
      {isLogin && <Navigate to="/panel" />}
    </>
  );
}
