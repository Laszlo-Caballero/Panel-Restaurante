"use client";
import { constEnv } from "@/config/env";
import { userLogin } from "@/interfaces/types";
import axios from "axios";
import {
  createContext,
  FC,
  HTMLAttributes,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { Toast } from "componentsla";

type UserContextType = {
  initialState: userLogin;
  loading: boolean;
  error: number;
  login: (email: string, contraseña: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const [initialState, setInitialState] = useState<userLogin>({
    token: "",
    user: {
      contraseña: "",
      email: "",
      idUser: -1,
      nombre: "",
      tipo: "",
      imagen: "",
    },
  });

  useEffect(() => {
    const data = Cookies.get("data") ?? localStorage.getItem("data");
    if (data) {
      setInitialState(JSON.parse(data));
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(0);
  const toast = Toast();
  const login = useCallback(async (email: string, contraseña: string) => {
    setLoading(true);
    try {
      const response = await axios.post(constEnv.apiUrl.concat("/auth/login"), {
        email,
        contraseña,
      });
      const data = response.data;
      console.log(data);
      if (data.status === 201) {
        setInitialState(data);
        setLoading(false);
        setError(201);
        Cookies.set("data", JSON.stringify(data));
        localStorage.setItem("data", JSON.stringify(data));
        toast.success("Bienvenido");
      } else {
        setLoading(false);
        setError(404);
        throw new Error("Error 404");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);

      setError(404);
      toast.error("Error 404");
    }
  }, []);

  const logout = useCallback(() => {
    setInitialState({
      token: "",
      user: {
        contraseña: "",
        email: "",
        idUser: -1,
        nombre: "",
        tipo: "",
        imagen: "",
      },
    });
    Cookies.remove("data");
    localStorage.removeItem("data");
  }, []);

  return (
    <UserContext.Provider
      value={{ initialState, loading, error, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser tiene que estar en un contexto");
  }

  return context;
};
