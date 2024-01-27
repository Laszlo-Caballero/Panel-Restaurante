import express from "express";
import subirArchivo from "./../config/subirImagen.js";
import { EnviarComida, Food, Menu } from "../controllers/menu/Menu.js";

const router = express.Router();

router.post("/insertar", subirArchivo.single("file"), EnviarComida);
router.get("/", Menu);
router.get("/comida/:id", Food);

export default router;
