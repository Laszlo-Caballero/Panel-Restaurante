import { accessToken } from "../utils/jwt.js";
import { userSchema, loginSchema } from "../utils/validation.js";

export const ValidationUser = async (req, res, next) => {
  const token = req.cookies.token;

  console.log(token);

  if (!token) return res.status(401).json({ message: "Unathorized" });

  const data = await accessToken(token);

  if (!data || data.tipo != "admin")
    return res.status(401).json({ message: "Unathorized" });

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

export async function Validate(req, res) {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const data = await accessToken(token);

  if (!data) res.status(401).json({ message: "Unauthorized" });

  res.json(data);
}

export async function ValidateAdmin(req, res) {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const data = await accessToken(token);

  if (!data || data.tipo != "admin")
    return res.status(401).json({ message: "Unauthorized" });
  return res.json(data);
}
