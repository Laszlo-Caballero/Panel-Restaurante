import { userLogin } from "@/interfaces/types";
import axios from "axios";
import { useState } from "react";
import { constEnv } from "@/config/env";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
      if (response.status === 200) {
        setData(response.data);
      } else {
        throw new Error("Error 404");
      }
    } catch (err) {
      console.log(err);
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
}
