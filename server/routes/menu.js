import express from "express";
import subirArchivo from "./../config/subirImagen.js";
import { EnviarComida, Menu } from "../controllers/menu/Menu.js";

const router = express.Router();

router.post("/insertar", subirArchivo.single("file"), EnviarComida);
router.get("/", Menu);

export default router;
