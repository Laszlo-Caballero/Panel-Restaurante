import { useState, useEffect } from "react";
import axios from "src/utils/axios";

export default function useGet(ruta, update = []) {
  const [values, setValues] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${ruta}`)
      .then((response) => {
        setValues(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, update);

  return values;
}
