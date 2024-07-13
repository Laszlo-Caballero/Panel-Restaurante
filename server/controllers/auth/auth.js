import bcrypt from "bcryptjs";
import { exectQuery } from "../../config/mysql.js";
import { createAccessToken, accessToken } from "../../utils/jwt.js";

export async function Register(req, res) {
  const { nombre, email, contraseña } = req.body;
  try {
    const hash = await bcrypt.hash(contraseña, 10);

    const result = await exectQuery(
      "INSERT INTO Usuario(nombre, email, contraseña) VALUES (?,?,?)",
      [nombre, email, hash]
    );

    const token = await createAccessToken(email);
    res.cookie("token", token);
    res.send({
      message: "Se Registro",
      nombre,
      email,
    });
  } catch (error) {
    res.status(404).json(error);
  }
}

export async function Login(req, res) {
  const { email, contraseña } = req.body;
  try {
    const rows = await exectQuery(
      "Select nombre, email, contraseña, tipo, imagen from Usuario Where email = ?",
      [email]
    );

    if (!rows) return res.status(404).send("Not found");

    const data = rows[0];

    const isMatch = await bcrypt.compare(contraseña, data.contraseña);

    if (!isMatch) return res.status(404).send("Error password");

    const token = await createAccessToken(data.email);

    res.cookie("token", token);

    res.json(data);
  } catch (error) {
    res.status(404).send("Not found");
  }
}

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

  if (!data && data.tipo != "admin")
    return res.status(401).json({ message: "Unauthorized" });
  return res.json(data);
}
