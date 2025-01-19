import { constEnv } from "@/config/env";
import Header from "@/modules/menus/Header";
import axios from "axios";
import React from "react";

export default async function Menus() {
  const data = await axios.get(`${constEnv.apiUrl}/menu`);

  console.log(data.data);

  return (
    <div className="h-full w-full">
      <Header />
    </div>
  );
}
