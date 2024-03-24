import { menuSchema, userSchema, loginSchema } from "../utils/validation.js";
export const ValidationMenu = (req, res, next) => {
  try {
    const { jsonData } = req.body;
    const { nombre, precio, estado, descripcion } = JSON.parse(jsonData);
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

    menuSchema.parse({ id, nombre, precio, estado, descripcion, vendidos });
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error,
    });
  }
};

export const ValidationUser = (req, res, next) => {
  const { nombre, email, contraseña } = req.body;
  try {
    userSchema.parse({ nombre, email, contraseña });
    next();
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

export const ValidationLogin = (req, res, next) => {
  const { email, contraseña } = req.body;
  try {
    loginSchema.parse({ email, contraseña });
    next();
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
