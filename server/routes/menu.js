import express from "express";
import subirArchivo from "./../config/subirImagen.js";
import {
  ActualizarComida,
  EnviarComida,
  Food,
  Menu,
} from "../controllers/menu/Menu.js";

const router = express.Router();

router.post("/insertar", subirArchivo.single("file"), EnviarComida);
router.put("/actualizar", subirArchivo.single("file"), ActualizarComida);
router.get("/", Menu);
router.get("/comida/:id", Food);

export default router;
