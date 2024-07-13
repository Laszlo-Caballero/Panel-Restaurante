import ConvertirWebp from "../../config/Webp.js";
import { exectQuery } from "../../config/mysql.js";

export async function EnviarComida(req, res) {
  const { file } = req;
  const { jsonData } = req.body;
  const { nombre, precio, estado, descripcion, categoria } =
    JSON.parse(jsonData);

  try {
    const img = file.filename.split(".").shift();
    await ConvertirWebp(file);

    const categoryId = await exectQuery(
      "select idCategoria from categoria where categoria = ?",
      [categoria]
    );

    console.log(categoryId);

    const imgUpload = await exectQuery(
      "Insert into Imagen (imagenPath) values (?)",
      [img]
    );

    const FoodUpload = await exectQuery(
      "insert into Comida (nombre, precio, estado, descripcion) values(?,?,?,?)",
      [nombre, precio, estado, descripcion]
    );

    console.log(FoodUpload.insertId, categoryId[0].idCategoria);
    const id = categoryId[0].idCategoria;
    await exectQuery(
      "insert into categoriacomida (idCategoria, idComida) values (?,?)",
      [id, FoodUpload.insertId]
    );

    await exectQuery(
      "Insert into imagencomida (idComida, idImagen) values (?,?)",
      [FoodUpload.insertId, imgUpload.insertId]
    );

    res.send("se envio");
    console.log("se envio");
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
}

/*export async function ActualizarComida(req, res) {
  const { file } = req;
  const { jsonData } = req.body;
  const { id, nombre, precio, estado, descripcion, vendidos, categoria, sku } =
    JSON.parse(jsonData);
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
        descripcion,
        categoria,
        sku
      );
      res.send("se actualizo");
      console.log("se actualizo");
    } catch (error) {
      console.error(error);
      res.status(404).send("error");
    }
  } else {
    try {
      await actualizarComida(
        id,
        nombre,
        precio,
        vendidos,
        estado,
        descripcion,
        categoria,
        sku
      );
      res.send("se actualizo");
      console.log("se actualizo");
    } catch (error) {
      console.error(error);
      res.status(404).send("error");
    }
  }
}

*/

export async function Categorias(req, res) {
  try {
    const rows = await exectQuery("select * from categoria", []);
    res.send(rows);
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function Menu(req, res) {
  try {
    const rows = await exectQuery(
      "select C.idComida , (select I.imagenPath from imagencomida as IC inner join Imagen as I on I.idImagen = IC.idImagen where C.idComida = IC.IdComida limit 1) as img, C.nombre, Round(C.precio, 2) as precio, C.estado, C.descripcion, C.vendidos from Comida as C",
      []
    );
    res.send(rows);
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function Food(req, res) {
  const { id } = req.params;
  try {
    const foods = await exectQuery("Select * from comida where idComida = ?", [
      id,
    ]);

    const category = await exectQuery(
      "select C.idCategoria, C.categoria from Categoria as C inner join CategoriaComida as CC on C.idCategoria = CC.idCategoria where CC.idComida = ?",
      [id]
    );

    const images = await exectQuery(
      "select IC.idImagen,I.ImagenPath from imagencomida as IC inner join imagen as I on  IC.idImagen = I.idImagen where IC.idComida = ?",
      [id]
    );

    foods[0].categorias = category;
    foods[0].images = images;

    res.send(foods);
  } catch (error) {
    res.status(404).send(error);
  }
}
