"use client";
import { userLogin } from "@/interfaces/types";
import {
  createContext,
  FC,
  HTMLAttributes,
  useCallback,
  useContext,
  useState,
} from "react";

type UserContextType = {
  initialState: userLogin;
  updateState: (data: userLogin) => void;
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

  const updateState = useCallback((data: userLogin) => {
    setInitialState(data);
  }, []);

  return (
    <UserContext.Provider value={{ initialState, updateState }}>
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
