import { userLogin } from "@/interfaces/types";
import axios from "axios";
import { useState } from "react";
import { constEnv } from "@/config/env";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(0);
  const [data, setData] = useState<userLogin | null>(null);

  const login = async (email: string, contraseña: string) => {
    setLoading(true);
    try {
      const response = await axios.post<userLogin>(
        constEnv.apiUrl.concat("/auth/login"),
        {
          email,
          contraseña,
        },
      );
      if (response.status === 201) {
        setData(response.data);
        setLoading(false);
        setError(201);
      } else {
        throw new Error("Error 404");
      }
    } catch (err) {
      console.log(err);
      setError(404);
    }
  };

  return { login, loading, error, data };
}
