import ConvertirWebp from "../../config/Webp.js";
import connectDatabase from "../../config/mysql.js";
import { subirComida } from "../../utils/database.js";

export async function EnviarComida(req, res) {
  const { file } = req;
  const { nombre, precio, descripcion, estado } = req.body;

  try {
    const img = file.filename.split(".").shift();
    await ConvertirWebp(file);
    await subirComida(nombre, precio, img, estado, descripcion);
    res.send("se envio");
    console.log("se envio");
  } catch (error) {
    console.error(error);
    res.status(404).send("error");
  }
}

export async function Menu(req, res) {
  const database = await connectDatabase();
  try {
    const [rows, fields] = await database.execute("Select * from comidas");
    res.send(rows);
  } catch (error) {
    res.status(404).send(error);
  }
}
