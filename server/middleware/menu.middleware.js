import { menuSchema } from "../utils/validation.js";
import { accessToken } from "../utils/jwt.js";

export const ValidationMenu = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const data = await accessToken(token);
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const { jsonData } = req.body;
    const { nombre, precio, estado, descripcion, categoria } =
      JSON.parse(jsonData);
    menuSchema.parse({ nombre, precio, estado, descripcion, categoria });
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
};

export const ValidationUpdate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const data = await accessToken(token);
    const { jsonData } = req.body;
    const {
      id,
      nombre,
      precio,
      estado,
      descripcion,
      vendidos,
      categoria,
      sku,
    } = JSON.parse(jsonData);

    menuSchema.parse({
      id,
      nombre,
      precio,
      estado,
      descripcion,
      vendidos,
      categoria,
      sku,
    });
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
};

export const ValidationGet = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "401 Unauthorized" });
    await accessToken(token);
    next();
  } catch (error) {
    res.status(401).json({ message: "401 Unauthorized" });
  }
};
