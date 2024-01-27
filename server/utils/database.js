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
