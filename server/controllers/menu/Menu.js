import ConvertirWebp from "../../config/Webp.js";
import connectDatabase from "../../config/mysql.js";
import {
  actualizarComida,
  actualizarComidaFoto,
  subirComida,
} from "../../utils/database.js";

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

export async function ActualizarComida(req, res) {
  const { file } = req;
  const { id, nombre, precio, vendidos, estado, descripcion } = req.body;
  if (file) {
    try {
      const img = file.filename.split(".").shift();
      await ConvertirWebp(file);
      await actualizarComidaFoto(
        id,
        nombre,
        precio,
        img,
        vendidos,
        estado,
        descripcion
      );
      res.send("se actualizo");
      console.log("se actualizo");
    } catch (error) {
      console.error(error);
      res.status(404).send("error");
    }
  } else {
    try {
      await actualizarComida(id, nombre, precio, vendidos, estado, descripcion);
      res.send("se actualizo");
      console.log("se actualizo");
    } catch (error) {
      console.error(error);
      res.status(404).send("error");
    }
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

export async function Food(req, res) {
  const database = await connectDatabase();
  const { id } = req.params;
  try {
    const [rows, fields] = await database.execute(
      "Select * from comidas where id = ?",
      [id]
    );
    res.send(rows);
  } catch (error) {
    res.status(404).send(error);
  }
}
