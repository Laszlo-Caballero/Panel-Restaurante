import mysql from "mysql2/promise";

const connectionConfig = {
  host: "localhost",
  user: "root",
  password: "jade2314",
  database: "restaurante",
};

async function connectDatabase() {
  try {
    const connection = await mysql.createConnection(connectionConfig);
    console.log("Conexión exitosa a MySQL");
    return connection;
  } catch (error) {
    console.error("Error al conectar a MySQL:", error.message);
  }
}

export default connectDatabase;
