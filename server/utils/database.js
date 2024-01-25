import connectDatabase from "../config/mysql.js";

export async function subirComida(nombre, precio, img) {
  const database = await connectDatabase();
  database.query(
    "INSERT INTO comidas (nombre,precio,img) VALUES (?,?,?)",
    [nombre, precio, img],
    (error, result) => {
      if (error) throw error;
      console.log(result);
    }
  );
}
