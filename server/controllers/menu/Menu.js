import ConvertirWebp from "../../config/Webp.js";
import connectDatabase from "../../config/mysql.js";
import { subirComida } from "../../utils/database.js";

export async function EnviarComida(req, res) {
  const { file } = req;
  const { nombre, precio } = req.body;
  try {
    await ConvertirWebp(file);
    await subirComida(nombre, precio, file.filename.split(".").shift());
    res.send("se envio");

    console.log("se envio");
  } catch (error) {
    console.error(error);
    res.send("error");
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
