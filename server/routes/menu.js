import express from "express";
import subirArchivo from "./../config/subirImagen.js";
import {
  EnviarComida,
  Food,
  Menu,
  Categorias,
} from "../controllers/menu/Menu.js";
import {
  ValidationMenu,
  ValidationUpdate,
} from "../middleware/schemaValidation.js";

const router = express.Router();

router.post(
  "/insertar",
  subirArchivo.single("file"),
  ValidationMenu,
  EnviarComida
);

/*
router.put(
  "/actualizar",
  subirArchivo.single("file"),
  ValidationUpdate,
  ActualizarComida
);
*/

router.get("/", Menu);
router.get("/categoria", Categorias);
router.get("/comida/:id", Food);

export default router;
