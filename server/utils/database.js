import connectDatabase from "../config/mysql.js";

export async function subirComida(
  nombre,
  precio,
  img,
  status,
  descripcion,
  categoria,
  sku
) {
  const database = await connectDatabase();
  database.query(
    "INSERT INTO comidas (nombre,precio,img, status, descripcion, categoria, sku) VALUES (?,?,?,?,?,?,?)",
    [nombre, precio, img, status, descripcion, categoria, sku],
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
  descripcion,
  categoria,
  sku
) {
  const database = await connectDatabase();
  database.query(
    "update comidas set nombre = ?, precio = ?, img = ?, vendidos = ?, status = ?, descripcion = ?, categoria = ?, sku  = ? where id = ?",
    [nombre, precio, img, vendidos, status, descripcion, categoria, sku, id],
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
  descripcion,
  categoria,
  sku
) {
  const database = await connectDatabase();
  database.query(
    "update comidas set nombre = ?, precio = ?, vendidos = ?, status = ?, descripcion = ?, categoria = ?, sku = ?  where id = ?",
    [nombre, precio, vendidos, status, descripcion, categoria, sku, id],
    (error, result) => {
      if (error) throw error;
      console.log(result);
    }
  );
}
