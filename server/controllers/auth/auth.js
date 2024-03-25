import bcrypt from "bcryptjs";
import connectDatabase from "../../config/mysql.js";
import { createAccessToken } from "../../utils/jwt.js";
import jwt from "jsonwebtoken";
import { PasswordJWT } from "../../utils/const.js";

export async function Register(req, res) {
  const { nombre, email, contraseña } = req.body;
  try {
    const hash = await bcrypt.hash(contraseña, 10);
    const database = await connectDatabase();
    const [result] = await database.query(
      "INSERT INTO usuarios(nombre, email, contraseña) VALUES (?,?,?)",
      [nombre, email, hash]
    );
    const id = result.insertId;
    const token = await createAccessToken(id.toString());
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
    const database = await connectDatabase();
    const [rows, fields] = await database.execute(
      "Select * from usuarios Where email = ?",
      [email]
    );
    const rowsbolean = rows ? true : false;
    if (!rowsbolean) return res.status(404).send("Not found");
    const data = rows[0];
    const isMatch = await bcrypt.compare(contraseña, data.contraseña);
    if (!isMatch) return res.status(404).send("Error password");
    const token = await createAccessToken(data.id.toString());
    res.cookie("token", token);
    let user = { ...data };
    delete user.id;
    res.json(user);
  } catch (error) {
    res.status(404).send("Not found");
  }
}

export async function Validate(req, res) {
  const token = req.cookies.token;
  const database = await connectDatabase();
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, PasswordJWT, async (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized verify" });
    }

    const [rows, fields] = await database.execute(
      "Select nombre, email, contraseña, tipo, imagen from usuarios Where id = ?",
      [user]
    );
    const data = rows[0];
    if (!data) return res.status(401).json({ message: "Unauthorized" });
    let retorno = { ...data };
    delete retorno.id;
    return res.json(retorno);
  });
}
