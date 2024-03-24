import { menuSchema } from "../utils/validation.js";
export const ValidationMenu = (req, res, next) => {
  try {
    const { jsonData } = req.body;
    const { nombre, precio, estado, descripcion } = JSON.parse(jsonData);
    console.log(req.body);
    menuSchema.parse({ nombre, precio, estado, descripcion });
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
};

export const ValidationUpdate = (req, res, next) => {
  try {
    const { jsonData } = req.body;
    const { id, nombre, precio, estado, descripcion, vendidos } =
      JSON.parse(jsonData);
    console.log(req.body);
    menuSchema.parse({ id, nombre, precio, estado, descripcion, vendidos });
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
};
