import connectDatabase from "../config/mysql.js";

export async function subirComida(nombre, precio, img, status, descripcion) {
  const database = await connectDatabase();
  database.query(
    "INSERT INTO comidas (nombre,precio,img, status, descripcion) VALUES (?,?,?,?,?)",
    [nombre, precio, img, status, descripcion],
    (error, result) => {
      if (error) throw error;
      console.log(result);
    }
  );
}

export async function actualizarComidaFoto(
  id,
  nombre,
  precio,
  img,
  vendidos,
  status,
  descripcion
) {
  const database = await connectDatabase();
  database.query(
    "update comidas set nombre = ?, precio = ?, img = ?, vendidos = ?, status = ?, descripcion = ? where id = ?",
    [nombre, precio, img, vendidos, status, descripcion, id],
    (error, result) => {
      if (error) throw error;
      console.log(result);
    }
  );
}

export async function actualizarComida(
  id,
  nombre,
  precio,
  vendidos,
  status,
  descripcion
) {
  const database = await connectDatabase();
  database.query(
    "update comidas set nombre = ?, precio = ?, vendidos = ?, status = ?, descripcion = ? where id = ?",
    [nombre, precio, vendidos, status, descripcion, id],
    (error, result) => {
      if (error) throw error;
      console.log(result);
    }
  );
}
