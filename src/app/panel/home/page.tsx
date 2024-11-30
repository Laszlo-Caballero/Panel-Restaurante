"use client";
import { useUser } from "@/Context/UserContext";
import React from "react";

export default function Home() {
  const { initialState } = useUser();
  return <div>{initialState.user.nombre}</div>;
}
